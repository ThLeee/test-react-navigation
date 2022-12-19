import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import {IntroductionPage} from "./IntroductionPage";
import {MainBottomTabNavigator} from "./MainBottomTab";

const config = {
    screens: {
        initialRouteName: 'Home',
        Introduction: {
            path: '/',
            screens: {
                FilePage: {
                    path: '/file-page',
                },
            },
        },
        Home: {
            path: '/top',
        },
    },
};

const linking = {
    prefixes: [],
    config,
};

const Stack = createStackNavigator();

export const ApplicationNavigator = () => {
    return (
        <NavigationContainer linking={linking}>
            <Stack.Navigator
                initialRouteName={'Home'}
                screenOptions={{
                    animationEnabled: true
                }}
            >
                <Stack.Screen component={IntroductionPage} name={'Introduction'} />
                <Stack.Screen
                    component={MainBottomTabNavigator}
                    name={'Home'}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
