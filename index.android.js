import React from 'react';
import { 
  Dimensions,
  StyleSheet,
  AppRegistry, 
  StatusBar,
  ScrollView, 
  Text,
  Image,
  TouchableHighlight
} from 'react-native';

import ColorButton from './components/ColorButton'


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
      <ScrollView style={[styles.container,{backgroundColor}]}> 
        <ColorButton warnaLatar="red" onSelect33={this.changeColor}/>
        <ColorButton warnaLatar="blue" onSelect33={this.changeColor}/>
        <ColorButton warnaLatar="orange" onSelect33={this.changeColor}/>
        <ColorButton warnaLatar="white" onSelect33={this.changeColor}/>
        <ColorButton warnaLatar="green" onSelect33={this.changeColor}/>
        <ColorButton warnaLatar="pink" onSelect33={this.changeColor}/>
        <ColorButton warnaLatar="brown" onSelect33={this.changeColor}/>
        <ColorButton warnaLatar="silver" onSelect33={this.changeColor}/>
        <ColorButton warnaLatar="gold" onSelect33={this.changeColor}/>
        <ColorButton warnaLatar="yellow" onSelect33={this.changeColor}/>
        <ColorButton warnaLatar="magenta" onSelect33={this.changeColor}/>
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  container :{
    flex: 1
  }
});


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);