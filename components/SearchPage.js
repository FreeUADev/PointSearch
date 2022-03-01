import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, FlatList, Dimensions, Image } from 'react-native';
import firebase from 'firebase/app'
import 'firebase/firestore'
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export const ClothesPage = ({navigation, route}) => {
    const db = firebase.firestore()

    const {city} = route.params

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const post = [];

          db.collection('posts').orderBy('date', 'desc').startAt(city).endAt('' + '\uf8ff').get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
            post.push({
              ...doc.data(),
              key: doc.id,
            });
          })
        setPosts(post);
        });
    }, []);

    return (
        <View style={{flex: 1}}>
            <TouchableOpacity style={styles.categview}>
                <Text style={styles.category}>Вся країна</Text>
            </TouchableOpacity>
            <FlatList 
              data={posts}
              numColumns={2}
              ListEmptyComponent={
                <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                    <Text style={{ fontFamily: 'mt', textAlign: 'center', justifyContent: 'center' }}>Мы не нашли ни одного объявления</Text>
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
    