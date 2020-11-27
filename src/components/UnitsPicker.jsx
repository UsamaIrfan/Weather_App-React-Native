import React from 'react'
import { Picker } from "@react-native-community/picker";
import { View, Text , StyleSheet, Platform } from 'react-native'

export default function UnitsPicker({unitSystem , setUnitSystem}) {
   return (
      <View style={styles.unitSystem}>
         <Picker selectedValue={unitSystem} onValueChange={(item)=> {setUnitSystem(item)}} mode="dropdown" itemStyle={{fontSize: 12}} >
            <Picker.item label="&deg;C" value="metric" />
            <Picker.item label="&deg;F" value="imperial" />
         </Picker>
      </View>
   )
}

const styles = StyleSheet.create({
   unitSystem: {
      position: "absolute",
      ...Platform.select({
         ios: {
            top: -20,
         }, 
         android: {
            top: 30
         }
      }),
      height: 50,
      width: 100,
      top: 20,
      left: 10,
   }
})