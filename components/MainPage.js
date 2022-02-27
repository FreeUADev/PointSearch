import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, FlatList, Dimensions, Image } from 'react-native';

export const MainPage = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
        <TouchableOpacity style={styles.categview}>
            <Text style={styles.category}>Вся країна</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.floatingButton} onPress={() => navigation.navigate('CreatePage')}>
          <AntDesign name="plus" size={35} color="white" />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  category:{
    marginTop: '3%',
    fontFamily: 'mt-med',
    fontSize: 25,
    backgroundColor: '#46c433',
    textAlign: 'center',
    padding: '4%',
    paddingHorizontal: '20%',
    borderRadius: 15
  },
  categview:{
    alignItems: 'center',
    marginHorizontal: '10%'
  },
  floatingButton:{
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 70,
    backgroundColor: '#46c433',
    borderRadius: 100,
  },
});
