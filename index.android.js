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
  constructor(){
    super()
    this.state = {backgroundColor: 'blue'}
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor(warna){
    this.setState({backgroundColor: warna})
  }

  render() {
    const { backgroundColor } = this.state;
    return (
      <View style={[styles.container,{backgroundColor}]}> 
        <Text style={styles.button} onPress={() => this.changeColor('red')}>Red</Text>
        <Text style={styles.button} onPress={() => this.changeColor('green')}>Green</Text>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
    flexDirection: 'column', //column --> Untuk ke bawah
    justifyContent: 'center', //flex-start --> Untuk Rata Kiri
                              //flex-end --> Untuk Rata Kanan
                              //center --> Untuk tengah
    alignItems: 'center', //untuk atas/bawah jika flexDirection=row
    backgroundColor: 'yellow',

  },
  button :{
    fontSize: 30,
    borderWidth: 2,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'stretch',
    textAlign: 'center'

  }
});


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);