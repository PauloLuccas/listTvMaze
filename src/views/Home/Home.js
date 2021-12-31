import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Alert, SafeAreaView } from 'react-native'
import ListItem from '../../components/ListItem/ListItem'
import api from '../../services/Api'

import { styles } from './styles'

export default props => {

    const [listShow, setListShow] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [offset] = useState(0);
    const [perPage] = useState(5);

    useEffect(() => {
        loadGetApi()
    }, [])

    async function loadGetApi() {
        if(loading) return;

        setLoading(true);

        const response = await api.get(`/show?page=${page}`);
        const data = response.data;
        const slice = data.slice(offset, offset + perPage)
        setListShow([...listShow, ...slice]);
        setPage(page + 1);
        setLoading(false);
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                keyExtractor={list => list.id.toString()}
                data={listShow}
                renderItem={({item}) => <ListItem data={item} />}
                alwaysBounceVertical
                onEndReached={loadGetApi}
                onEndReachedThreshold={0.5}
            />
        </SafeAreaView>
    )
}
