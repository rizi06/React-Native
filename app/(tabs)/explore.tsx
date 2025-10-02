import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <View style={styles.container}> 
        <View style={styles.headerContainer}></View>
        <View style={styles.pictureContainer}> 
          <Image source={require('../../assets/images/riz.jpeg')} style={styles.image} />
        </View>
        <View style={styles.InfoContainer}> 
          <Text> Rizky Maulana </Text>
          <Text> Student at SMK Telkom Malang </Text>
          <Text> Learning React Native </Text>
        </View>
      </View> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    // justifyContent: 'center', // vertical centering
    alignItems: 'center', // horizontal centering
    backgroundColor: '#eee',
  },

  pictureContainer: {
    marginBottom: 20,
        borderRadius: 1000,
        overflow: 'hidden',
  },

  image: {
      width: 250,
      height: 250,
    resizeMode: 'cover',

  },

  headerContainer: {
    height: 'auto',
    width: 'auto',
    backgroundColor: '#8096ab94',
    marginBottom: 20,
  },

  InfoContainer: {
    // margin: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});