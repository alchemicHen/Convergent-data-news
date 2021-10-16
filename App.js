import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.summary}>Headline info here</Text>
      <Text style={styles.discussion}>Discussion preview here</Text>
      <Image
        style={styles.decisions}
        source={{
          uri: 'https://cdn4.iconfinder.com/data/icons/arrows-set-1-1/100/arrow6-512.png',
        }}
      />
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    alignItems: 'center',
    justifyContent: 'center',
  },
  summary: {
    fontSize: 20,
    borderWidth: 5,
    padding: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
  discussion: {
    fontSize: 15,
    borderWidth: 2,
    padding: 20,
    textAlign: 'right',
    margin: 10,
  },
  decisions: {
    width: 100,
    height: 100,
  }
});
