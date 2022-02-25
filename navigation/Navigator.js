import React from 'react';
import { Text, Button, Alert, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import DtaInfoScreen from '../screens/DtaInfoScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import TabScreen1 from '../screens/TabScreen1';
import TabScreen2 from '../screens/TabScreen2';
import TabScreen3 from '../screens/TabScreen3';
import TabScreen4 from '../screens/TabScreen4';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const TabNavigator = (navigation) => {
    const logoutHandler = () => {
        navigation.navigation.navigate('Login Page');
    };
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            headerRight: () => (
                <MaterialCommunityIcons
                    name='power-standby'
                    color='red'
                    size={24}
                    style={{ marginHorizontal: 20 }}
                    onPress={() => Alert.alert(
                        'Logout',
                        'Are you sure?',
                        [{
                            text: 'Yes',
                            onPress: logoutHandler
                        },
                        {
                            text: 'No',
                            style: "cancel"
                        }
                        ]
                    )} />
            )
        }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={TabScreen1}
                options={{
                    tabBarLabel: 'Updates',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={TabScreen2}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    )
                }}
            />
            {/* <Tab.Screen name="TabScreen3" component={TabScreen3} />
                <Tab.Screen name="TabScreen4" component={TabScreen4} /> */}
        </Tab.Navigator>
    );
};

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name='Login Page' component={LoginScreen} />
                <Stack.Screen name='DtaInfoScreen' component={DtaInfoScreen} options={{
                    title: 'DTA Information', headerShown: true, headerTitleAlign: 'center'
                }} />
                <Stack.Screen name='Home Screen' component={TabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;