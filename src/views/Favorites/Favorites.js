import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import ListItem from '../../components/ListItem/ListItem';

import { styles } from './styles'

export default props => {

    const favorited = useSelector(state => state.favorites.data);

    return (
        <View style={styles.container}>
            <FlatList
                key={favorited.id}
                data={favorited}
                renderItem={({item}) => <ListItem data={item} />}
                alwaysBounceVertical
            />
        </View>
    )
}

