import React from 'react';
import { 
  StyleSheet,
  AppRegistry, 
  StatusBar,
  View, 
  Text 
} from 'react-native';

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 22,
    padding: 10,
    margin: 5,
    color: 'black',
    borderWidth: StyleSheet.hairlineWidth
  },
  selectedText: {
    backgroundColor: 'red',
    color: 'white',
    fontWeight: 'bold'
  }
});

class AwesomeProject extends React.Component {
  render() {
    return (
      <View>
        <StatusBar hidden={true} />
          <Text style={[styles.defaultText,styles.selectedText]}>Sierraa</Text>
          <Text style={styles.defaultText}>Tanner</Text>
          <Text style={styles.defaultText}>Travis</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);