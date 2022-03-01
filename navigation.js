import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { MainPage } from './components/MainPage';
import { Login } from './components/Login'
import { Loading } from './components/Loading';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, Dimensions, Image, Modal, Pressable } from 'react-native';
import { CreatePage } from './components/CreatePage';
import { Full } from './components/Full';
import { Track } from './components/Track';
import { SearchPage } from './components/SearchPage';

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
        <Stack.Screen name='CreatePage' component={CreatePage} options={{ 
            headerShown: true, 
            title: 'Публікація мітки', 
            headerTintColor: '#46c433', 
            headerTitleAlign: 'center',
            headerTitleStyle:
            {fontFamily: 'mt'}}}/>
        <Stack.Screen name='Full' component={Full} options={{ 
            headerShown: true, 
            title: 'Огляд мітки', 
            headerTintColor: '#46c433', 
            headerTitleAlign: 'center',
            headerTitleStyle:
            {fontFamily: 'mt'}}}/>
        <Stack.Screen name='Track' component={Track} options={{ 
            headerShown: true, 
            title: 'Мітка на карті', 
            headerTintColor: '#46c433', 
            headerTitleAlign: 'center',
            headerTitleStyle:
            {fontFamily: 'mt'}}}/>
        <Stack.Screen name='SearchPage' component={SearchPage} options={{ 
            headerShown: true, 
            title: 'Мітки в області', 
            headerTintColor: '#46c433', 
            headerTitleAlign: 'center',
            headerTitleStyle:
            {fontFamily: 'mt'}}}/>
    </Stack.Navigator>
    )
}

export {Stacks};