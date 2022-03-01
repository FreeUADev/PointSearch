import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const OPTIONS = ['Автовизначення', 'Київська', 'Вінницька', 'Волинська', 'Дніпропетровська', 'Донецька', 'Житомирська', 'Закарпатська','Запорізька', 'Івано-Франківська', 'Київська', 'Кіровоградська', 'Луганська', 'Львівська', 'Миколаївська', 'Одеська', 'Полтавська', 'Рівненська', 'Сумська', 'Тернопільська', 'Харківська', 'Херсонська', 'Хмельницька', 'Черкаська', 'Чернівецька', 'Чернігівська']
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height
const TownSelect = (props) => {
  const onPressItem = (option) => {
    props.changeModalVisibility(false);
    props.setData(option);
    console.log(option) // Вывод в консоль выбраного города
  }

  const option = OPTIONS.map((item, index) => {
    return(
      <TouchableOpacity style={styles.option} key={index} onPress={() => onPressItem(item)}>
        <Text style={styles.text}>
          {item}
        </Text>
      </TouchableOpacity>
    )
  })

  return(
    <TouchableOpacity
    onPress={() => props.changeModalVisibility(false)}
    style={styles.container}
    >
      <View style={styles.modal}>
        <ScrollView>
          {option}
        </ScrollView>
      </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal:{
    backgroundColor: '#46c433',
    width: WIDTH,
    height: HEIGHT
  },
  option:{
    alignItems: 'flex-start'
  },
  text:{
    margin: 20,
    fontSize: 18,
    fontFamily: 'mt-bold'
  }
});

export {TownSelect}