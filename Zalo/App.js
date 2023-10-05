import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,Image} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.style1}>
      <Image source={require('./assets/Ellipse 8.png')}
                style={{width:'140px',height:'140px'}}>
                </Image>
        </View>
        <View style={styles.style2} >
        <Text style={styles.baseText1}>GROW</Text>
        <Text style={styles.baseText1}>YOUR BUSINESS</Text>
        </View>
        <View style={styles.style3}>
        <Text style={styles.baseText}>We will help to grow your business using online server</Text>
        </View>
        <View style={styles.style4}>
            <Button title='LOGIN' style={{width:'120px',height:'50px'}} color='#E3C000'></Button>
            <Button title='SIGN UP' style={{width:'120px',height:'50px'}} color='#E3C000'></Button>
        </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: "#00CCF9"

    },
    style1:{
        flex:2,
        justifyContent: 'center',
        alignItems:'center'
    },
    style2:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center',
        
    },
    style3:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    style4:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',

    },
    style5:{
        flex:1,
        
    },
    baseText: {
        fontWeight: 'bold',
    },
    baseText1: {
      fontWeight: 'bold',
      fontSize: 30,
  },

});
