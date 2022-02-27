import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, FlatList, Dimensions, Image } from 'react-native';

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export const Full = ({navigation, route}) => {
    const {image, full, city, date, latitude, longitude} = route.params

    return (
      <View>
          <Image style={styles.image} source={{uri: image}}/>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.city}>Область</Text>
                <Text style={styles.city}>{city}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.city}>Широта</Text>
                <Text style={styles.city}>{latitude}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.city}>Довгота</Text>
                <Text style={styles.city}>{longitude}</Text>
          </View>
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
  image:{
    width: WIDTH,
    height: WIDTH * 0.76,
  },
  city:{
    fontFamily: 'mt',
    fontSize: 15,
    marginHorizontal: '5%',
    marginVertical: '3%'
  }
});
