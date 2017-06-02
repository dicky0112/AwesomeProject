import React from 'react';
import { 
  StyleSheet,
  AppRegistry, 
  StatusBar,
  View, 
  Text 
} from 'react-native';


class AwesomeProject extends React.Component {
  render() {
    return (
      <View style={styles.container}> 
        <StatusBar hidden={true} />
          <Text style={[styles.defaultText,styles.selectedText]}>Sierra</Text>
          <Text style={styles.defaultText}>Tanner</Text>
          <Text style={styles.defaultText}>Travis</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
    flexDirection: 'row', //column --> Untuk ke bawah
    justifyContent: 'center', //flex-start --> Untuk Rata Kiri
                              //flex-end --> Untuk Rata Kanan
                              //center --> Untuk tengah
    alignItems: 'center', //untuk atas/bawah jika flexDirection=row
    backgroundColor: '#DDD'

  },
  defaultText: {
    flex: 1, //Skala nya. Jika komponen nya ada 2 masing2 flex nya 1, maka ukuran nya masing2 setengah
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 22,
    padding: 10,
    margin: 5,
    color: 'black',
    backgroundColor: 'yellow',
    borderWidth: StyleSheet.hairlineWidth
  },
  selectedText: {
    backgroundColor: 'red',
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'flex-end'
  }
});


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);