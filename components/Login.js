import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform, Dimensions, Image, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import firebase from 'firebase/app'
import { auth } from '../API/Firebase';

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const Login = ({navigation}) => {

    useEffect(() => {
        auth
        .signInAnonymously()
        .then(() => {
          console.log('User signed in anonymously');
         })
        .catch(error => {
             if (error.code === 'auth/operation-not-allowed') {
             console.log('Enable anonymous in your firebase console.');
        }
       
           console.warn(error);
  });
    }, [])

    return (
      <SafeAreaView style={styles.main}>
          <ActivityIndicator size={100} color={'#46c433'}/>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    color: '#46c433',
    textAlign: "center",
    fontSize: 20,
    fontFamily: 'mt',
  },
  img:{
    resizeMode: 'contain',
    width: WIDTH,
    height: HEIGHT
  }
});

export {Login}