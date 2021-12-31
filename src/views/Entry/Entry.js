import React from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import Logo from '../../assets/tvm_api.png';
import { RectButton } from 'react-native-gesture-handler';

export default props => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image
                source={Logo}
                resizeMode="stretch"
                style={styles.logo}
            />

            <RectButton
                style={styles.button}
                onPress={() => navigation.navigate('Homes')}
            >
                <Text style={styles.title}>
                    Entrar
                </Text>
            </RectButton>
        </View>
    )
}

