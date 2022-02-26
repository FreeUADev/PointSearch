import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, FlatList, Dimensions, Image } from 'react-native';

export const MainPage = ({navigation}) => {
  return (
    <View>
        <TouchableOpacity style={styles.categview}>
            <Text style={styles.category}>Вся країна</Text>
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
    fontFamily: 'mt-bold',
    fontSize: 25,
    backgroundColor: '#46c433',
    textAlign: 'center',
    padding: '6%',
    paddingHorizontal: '20%',
    borderRadius: 15
  },
  categview:{
    alignItems: 'center',
    marginHorizontal: '10%'
  }
});
