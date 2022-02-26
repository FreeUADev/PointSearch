import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { MainPage } from './components/MainPage';
import { Login } from './components/Login'
import { Loading } from './components/Loading';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, Dimensions, Image, Modal, Pressable } from 'react-native';
const WIDTH = Dimensions.get('window').width
const Stack = createStackNavigator();

const Stacks = () => {
    return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Loading' component={Loading} options={{ 
            headerShown: true, 
            title: 'Завантаження', 
            headerTintColor: '#46c433', 
            headerTitleAlign: 'center',
            headerTitleStyle:
            {fontFamily: 'mt'}}}/>
        <Stack.Screen name='Login' component={Login} options={{ 
            headerShown: true, 
            title: 'Авторизація', 
            headerTintColor: '#46c433',
            headerTitleAlign: 'center',
            headerTitleStyle:
            {fontFamily: 'mt'}}}/>
        <Stack.Screen name='MainPage' component={MainPage} options={{ 
            headerShown: true, 
            title: 'Мітки', 
            headerTintColor: '#46c433', 
            headerTitleAlign: 'center',
            headerTitleStyle:
            {fontFamily: 'mt'}}}/>
    </Stack.Navigator>
    )
}

export {Stacks};