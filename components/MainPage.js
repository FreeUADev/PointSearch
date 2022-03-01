import { useState, useEffect } from 'react';
import { LogBox } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Dimensions, Image, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import firebase from 'firebase/app'
import 'firebase/firestore'
import moment from 'moment';
import 'moment/locale/uk'  // Переклад часу українською
moment.locale('uk');

LogBox.ignoreLogs(['Warning: Can\'t perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.']);
LogBox.ignoreLogs(['Setting a timer for a long period of time', '[react-native-gesture-handler]', 'AsyncStorage has been extracted', 'The action \'GO_BACK\' was not handled by any navigator.'])

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export const MainPage = ({navigation}) => {

  const [visible, setVisible] = useState(false)

  const [posts, setPosts] = useState([])
  // 25
  const cities = [
  'Київська', 
  'Вінницька', 
  'Волинська', 
  'Дніпропетровська', 
  'Донецька', 
  'Житомирська', 
  'Закарпатська',
  'Запорізька', 
  'Івано-Франківська', 
  'Київська', 
  'Кіровоградська', 
  'Луганська', 
  'Львівська', 
  'Миколаївська', 
  'Одеська', 
  'Полтавська', 
  'Рівненська', 
  'Сумська', 
  'Тернопільська', 
  'Харківська', 
  'Херсонська', 
  'Хмельницька', 
  'Черкаська', 
  'Чернівецька', 
  'Чернігівська']
  
  useEffect(() => {
    firebase.firestore().collection('posts').orderBy('date', 'desc').onSnapshot(querySnapshot => {
        const posts = [];
  
        querySnapshot.docs.forEach(documentSnapshot => {
          posts.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
  
        setPosts(posts);
      });
  }, []);

  return (
    <View style={{flex: 1}}>
        <TouchableOpacity style={styles.categview} onPress={() => setVisible(true)}>
            <Text style={styles.category}>Вся країна</Text>
        </TouchableOpacity>
        <FlatList 
          data={posts}
          numColumns={2}
          ListEmptyComponent={
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Text style={{ fontFamily: 'mt', textAlign: 'center', justifyContent: 'center' }}>Ми не знайшли жодної мітки</Text>
            </View>}
          renderItem={({item}) => (
           <TouchableOpacity style={styles.recblock} onPress={() => navigation.navigate('Full',
           {
            image: item.image.toString(),
            city: item.city,
            full: item.full,
            latitude: item.latitude,
            longitude: item.longitude,
            date: moment(item.date.toDate()).fromNow(),
           })}>
              <View style={{alignItems: 'center'}}>
                  <Image source={{uri: item.image}} style={styles.blockimage} />
              </View>
              <Text style={styles.blocktown}>{item.city}</Text>
              <Text style={styles.blockDate}>{moment(item.date.toDate()).fromNow().charAt(0).toUpperCase() + moment(item.date.toDate()).fromNow().slice(1)}</Text>
           </TouchableOpacity>
        )} 
        />
        <TouchableOpacity style={styles.floatingButton} onPress={() => navigation.navigate('CreatePage')}>
          <AntDesign name="plus" size={35} color="white" />
        </TouchableOpacity>
        <Modal
        animationType={'fade'}
        transparent={true}
        visible={visible}>
          <FlatList 
          data={cities}
          keyExtractor={(item, index) => 'key'+index}
          renderItem={({item}) => (
            <TouchableOpacity>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
          />
        </Modal>
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
    marginHorizontal: '10%',
    marginBottom: '3%'
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
  recblock:{
    width: WIDTH / 2 - 10,
    backgroundColor:'#fff',
    borderRadius: 5,
    marginLeft: '1.5%',
    marginRight: '0.5%',
    marginBottom: '2%'
  },
  blockimage: {
    resizeMode: 'cover',
    width: WIDTH / 2 - 10,
    height: WIDTH / 2,
    borderRadius: 3,
  },
});
