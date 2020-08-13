import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
    return (
        <Navigator>
            tabBarOptions={{
                style: {
                    elevation: 0, //Sombra no Android
                    shadowOpacity: 0, //sombra no IOS
                    height: 64,
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                },
                labelStyle: {
                    fontFamily: 'Archivo_700Bold',
                    fontSize: 13,
                    marginLeft: 16,
                },
                inactiveBackgroundColor: '#FAFAFC', //Cor de quando ñ está seleciona
                activeBackgroundColor: '#EBEBF5', //Quando a barra estiver ativa
                inativeTintColor: '#C1BCCC', //Cor do texto quando não está ativo
                activeTintColor: '#32264D',
            }}

            <Screen
                name='TeacherList'
                component={TeacherList}
                options={{
                    tabBarLabel: 'Proffys',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Ionicons
                                name='ios-easel'
                                size={size}
                                color={focused ? '#8257e5' : color}
                            />
                        );
                    },
                }}
            />
            <Screen
                name='Favorites'
                component={Favorites}
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({ size, color, focused }) => {
                        return (
                            <Ionicons
                                name='ios-heart'
                                size={size}
                                color={focused ? '#8257e5' : color}
                            />
                        );
                    },
                }}
            />
        </Navigator>
    );
}

export default StudyTabs;