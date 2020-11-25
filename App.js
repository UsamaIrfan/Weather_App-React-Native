import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';

export default function App() {

  const [test, settest] = useState("This is working")
  const [count, setcount] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.lightText}>{test}</Text>
      <Text style={styles.largeText}>This is so cool!</Text>
      <Text style={styles.largeText}>{count}</Text>
      <Button
        onPress={() => setcount(count + 1)}
        title="Add"
        style={styles.button}
      />
      <Button
        onPress={() => setcount(count - 1)}
        title="Remove"
        style={styles.button}
      />
      <StatusBar style="auto" />
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
  lightText: {
    color: "#000"
  },
  largeText: {
    fontSize: 20,
    color: "#000",
  },
  button: {
    padding: 10 + "px"
  }
});
