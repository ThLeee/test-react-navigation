import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FilePage} from "./FilePage";
import {NotificationPage} from "./NotificationPage";

const Tab = createBottomTabNavigator();

export const MainBottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#6B78F0',
                tabBarInactiveTintColor: '#333333',
                tabBarStyle: {
                    paddingTop: 10,
                    paddingBottom: 10,
                    height: 70,
                },
            }}
        >
            <Tab.Screen
                component={FilePage}
                name={'FilePage'}
                options={{
                    title: '記録',
                }}
            />
            <Tab.Screen
                component={FilePage}
                name={'MyPage'}
                options={{
                    title: 'マイページ',
                }}
            />
            <Tab.Screen
                component={FilePage}
                name={'SearchPage'}
                options={{
                    title: '症状検索',
                }}
            />
            <Tab.Screen
                component={FilePage}
                name={'Question'}
                options={{
                    title: 'アンケート',
                }}
            />
            <Tab.Screen
                component={NotificationPage}
                name={'NotificationPage'}
                options={{
                    title: 'お知らせ',
                }}
            />
        </Tab.Navigator>
    );
};
