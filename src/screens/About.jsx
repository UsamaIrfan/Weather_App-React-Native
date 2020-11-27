import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, FlatList , Text, View , Button, ScrollView} from 'react-native';

function About() {
   return (
      <View style={styles.container}>
        <Text>About</Text>
        <StatusBar style="auto" />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
   }
})

export default About
