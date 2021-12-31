import React from 'react'
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'
import Home from './views/Home/Home'
import Search from './views/Search/Search';
import Favorites from './views/Favorites/Favorites';
import Entry from './views/Entry/Entry'
import ViewDetails from './views/ViewDetails/ViewDetails'
import Providered from './contextApi/Provider';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();

const screenOptions = {
    headerStyle: {
        backgroundColor: '#073A35'
    },
    headerTintColor: '#fff'
}

function homeScreen() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Home') {
                    iconName = focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline';
                } else if (route.name === 'Settings') {
                    iconName = focused ? 'ios-list-box' : 'ios-list';
                }
    
                // You can return any component that you like here!
                return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#58A29A',
                tabBarInactiveTintColor: 'black',
                headerStyle: {
                    backgroundColor: '#073A35'
                },
                headerTintColor: '#fff'
            })}
        >
            <Tab.Screen
                name="Lista"
                component={Home}
                options={{
                    tabBarLabel: 'Início',
                    tabBarIcon: ({ color, size }) => (
                  <Icon name="home" size={size} color={color} />
                )}}
            />
            <Tab.Screen
                name="Pesquisa"
                component={Search}
                options={{
                    tabBarLabel: 'Pesquisa',
                    tabBarIcon: ({ color, size }) => (
                  <Icon name="search" size={size} color={color} />
                )}}
            />
            <Tab.Screen
                name="Favoritos"
                component={Favorites}
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({ color, size }) => (
                  <Icon name="star" size={size} color={color} />
                )}}
            />
        </Tab.Navigator>
    )
}

export default props => {
  return (
    <Provider store={store}>
        <Providered store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <Stack.Navigator
                        initialRouteName="Entry"
                        headerMode="none"
                        screenOptions={screenOptions}
                    >
                        <Stack.Screen
                            name="Entry"
                            component={Entry}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Homes"
                            component={homeScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Detalhes"
                            component={ViewDetails}
                            // options={{ title: 'Detalhes' }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Providered>
    </Provider>
  );
}
