import React from 'react';
import { 
  Dimensions,
  StyleSheet,
  AppRegistry, 
  StatusBar,
  View, 
  Text,
  Image,
  TouchableHighlight
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
        <TouchableHighlight style={styles.button} onPress={() => this.changeColor('red')} underlayColor = "orange">
          <View style={styles.row}>
            <View style={[styles.sample,{backgroundColor:'red'}]} />
              <Text style={styles.text}>Red</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={() => this.changeColor('green')}>
          <View style={styles.row}>
            <View style={[styles.sample,{backgroundColor: 'green'}]} />
            <Text style={styles.text}>Green</Text>
          </View>
        </TouchableHighlight>
        
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
    borderWidth: 2,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'stretch',

  },
  row :{
    flexDirection: 'row',
    alignItems: 'center'
  },
  sample :{
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    margin: 5,
    backgroundColor: 'white'
  },
  text :{
    fontSize: 30,
    margin: 5
  }
});


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);