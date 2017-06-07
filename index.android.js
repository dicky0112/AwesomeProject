import React from 'react';
import { 
  Dimensions,
  StyleSheet,
  AppRegistry, 
  StatusBar,
  View, 
  Text,
  Image
} from 'react-native';

import picFemale from './assets/card_female.png'
import picMale from './assets/card_male.png'

class AwesomeProject extends React.Component {
  render() {
    return (
      
      <View style={styles.container}> 
          <Image style={styles.defaultImage} source={picMale} >
            <Text style={styles.selectedText}>Male</Text>
          </Image>
          <Image style={styles.defaultImage} source={picFemale} >
            <Text style={styles.selectedText}>Female</Text>
          </Image>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
    flexDirection: 'column', //column --> Untuk ke bawah
    justifyContent: 'space-around', //flex-start --> Untuk Rata Kiri
                              //flex-end --> Untuk Rata Kanan
                              //center --> Untuk tengah
    alignItems: 'center', //untuk atas/bawah jika flexDirection=row
    backgroundColor: '#DDD'

  },

  defaultImage: {
    flex: 1,
    //borderRadius: 100,
    width: Dimensions.get('window').width, //lebar nya sama dengan layar
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems:'flex-end'
    //height: 200
  },

  selectedText: {
    backgroundColor: 'rgba(0,0,0,.5)',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    padding: 10

  }
});


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);