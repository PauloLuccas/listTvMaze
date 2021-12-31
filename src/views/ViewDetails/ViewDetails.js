import React, { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { Avatar } from 'react-native-elements'
import { RectButton } from 'react-native-gesture-handler';
import HTMLView from 'react-native-htmlview';
import { useDispatch } from 'react-redux';
import api from '../../services/Api';

import { styles } from './styles'

export default props => {
    const [detailsShow, setDetailsShow] = useState({})
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        handleContent()
    }, [])

    function handleContent() {
        const timer = setTimeout(() => {
            api.get(`/shows/${props.route.params.id}`)
            .then((response) => {
                setDetailsShow(response.data)
                setLoading(false);
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
        }, 3000)

        return () => clearTimeout(timer);
    }

    function handleConfirm() {
        dispatch({ type: 'ADD_FAVORITES', title: detailsShow })
        Alert.alert('Lista de Favoritos', 'Filme/Série adicionado com sucesso.');
    }

    function confirmFavItem(props) {
        Alert.alert('Favoritos', 'Deseja incluir na lista de Favoritos ?', [
            {
                text: 'Sim',
                onPress:(() => handleConfirm())
            },
            {
                text: 'Não'
            }
        ])
    }

    return (
        <View style={styles.container}>
            <View  style={styles.loading}>
                {loading && <Text>Carregando...</Text>}
            </View>
            {!loading &&
                <>
                    <View style={styles.contentInfo}>
                        <Avatar
                            source={{uri: detailsShow.image.medium}}
                            size="xlarge"
                        />
                        <View style={styles.content}>
                            <Text style={styles.title}>{detailsShow.name}</Text>
                            <View style={styles.subContent}>
                                <Text>Categoria: </Text>
                                <Text style={styles.subtitle}>{detailsShow.type}</Text>
                            </View>
                            <View style={styles.subContent}>
                                <Text>Gênero: </Text>
                                <Text style={styles.subtitle}>{detailsShow.genres[0]}</Text>
                            </View>
                            <View style={styles.subContent}>
                                <Text>Avaliação: </Text>
                                <Text style={styles.subtitle}>{detailsShow.rating.average}</Text>
                            </View>
                            <View>
                                <RectButton
                                    style={styles.button}
                                    onPress={() => confirmFavItem(props)}
                                >
                                    <Text style={styles.text}>
                                        + Favoritos
                                    </Text>
                                </RectButton>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.title}>Sinópse: </Text>
                        <HTMLView
                            style={styles.sinopse}
                            value={detailsShow.summary}
                        />
                    </View>
                </>
            }
        </View>
    ) 
     
}