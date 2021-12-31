import React, {useContext, useEffect, useState} from 'react';
import { SafeAreaView, View, TextInput } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Context } from '../../contextApi/Provider';
import ListItem from '../../components/ListItem/ListItem'

import { styles } from './styles'

export default props => {

    const {listShow} = useContext(Context)

    const [listFiltered, setListFiltered] = useState(listShow)
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        if(searchText === '') {
            setListFiltered(listShow)
        } else {
            setListFiltered(
                listShow.filter(item => {
                    return (item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1)
                })
            )
        }
    },[searchText])

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <TextInput
                    placeholder="Pesquise aqui"
                    value={searchText}
                    onChangeText={(v) => setSearchText(v)}
                    style={styles.input}
                />
            </View>
            
            <FlatList
                keyExtractor={list => list.id.toString()}
                data={listFiltered}
                renderItem={({item}) => <ListItem data={item} />}
                alwaysBounceVertical
            />
        </SafeAreaView>
    )
}

