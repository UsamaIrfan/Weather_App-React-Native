import React from 'react';
import { View, Text, Platform , StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import {colors} from '../../utils/index'

const {primary} = colors;

export default function ReloadIcon({load}) {
   const ReloadIconName = Platform.OS === 'ios' ? "ios-refresh" : "md-refresh"
   return (
      <View style={styles.reloadIcon}>
         <Ionicons onPress={()=>load()} name={ReloadIconName} size={24} color={primary} />
      </View>
   )
}

const styles = StyleSheet.create({
   reloadIcon: {
      position: "absolute",
      top: 30,
      right: 20,
   }
})