import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';

function Home({navigation}) {
   return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button onPress={() => {navigation.navigate("About")}} title="About Page" />
        <Button onPress={() => {navigation.navigate("Contact")}} title="Contact Page" />
        <StatusBar style="auto" />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "space-around",
   }
})

export default Home
