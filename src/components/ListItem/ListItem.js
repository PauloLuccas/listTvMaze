import React from 'react'
import { View, Text } from 'react-native'
import { ListItem, Avatar} from 'react-native-elements'
import { NavigationContext } from '@react-navigation/native';

import { styles } from './styles'

export default function getListShow(list) {

    const navigation = React.useContext(NavigationContext);

    return (
        <ListItem
            key={list.data.id}
            onPress={() => navigation.navigate('Detalhes', list.data)}
        >
            <View style={styles.item}>
                <Avatar
                    source={{uri: list.data.image.medium}}
                    size="xlarge"
                />
                <View style={styles.itemInfo}>
                    <ListItem.Title style={styles.title}>{list.data.name}</ListItem.Title>
                    <View style={styles.subContent}>
                        <Text>De:</Text>
                        <ListItem.Subtitle style={styles.subtitle}>{list.data.name}</ListItem.Subtitle>
                    </View>
                    <View style={styles.subContent}>
                        <Text>Categoria:</Text>
                        <ListItem.Subtitle style={styles.subtitle}>{list.data.type}</ListItem.Subtitle>
                    </View>
                </View>
            </View>
        </ListItem>
    )
}