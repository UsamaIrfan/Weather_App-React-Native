import React from 'react'
import { View, Text , StyleSheet } from 'react-native'
import {colors} from '../../utils/index';
import { FontAwesome5 , MaterialCommunityIcons } from '@expo/vector-icons'; 

const {primary, secondary , border } = colors

export default function WeatherDetails({currentWeather , unitSystem , setUnitSystem}) {
   const {
      main: { feels_like , humidity , pressure },
      wind: { speed }
   } = currentWeather

   const windSpeed = unitSystem === "metric" ? `${Math.round(speed)} m/s` : `${Math.round(speed)} miles/h`

   return (
      <View style={styles.WeatherDetails}>
         <View style={styles.WeatherDetailsRow}>
            <View style={{...styles.WeatherDetailsBox, borderRightWidth: 1, borderRightColor: border}}>
               <View style={styles.WeatherDetailsRow}>
                  <FontAwesome5 name="temperature-low" size={22} color={primary}/>
                  <View style={styles.WeatherDetailsItems}>
                     <Text>Feels Like:</Text>
                     <Text style={styles.textSecondary}>{feels_like}&deg;</Text>
                  </View>
               </View>
            </View>
            <View style={styles.WeatherDetailsBox}>
               <View style={styles.WeatherDetailsRow}>
                  <MaterialCommunityIcons name="water" size={22} color={primary}/>
                  <View style={styles.WeatherDetailsItems}>
                     <Text>Humidity</Text>
                     <Text style={styles.textSecondary}>{humidity}%</Text>
                  </View>
               </View>
            </View>
         </View>
         <View style={{...styles.WeatherDetailsRow, borderTopColor: border, borderTopWidth: 1}}>
            <View style={{...styles.WeatherDetailsBox, borderRightWidth: 1, borderRightColor: border}}>
               <View style={styles.WeatherDetailsRow}>
                  <MaterialCommunityIcons name="weather-windy" size={22} color={primary}/>
                  <View style={styles.WeatherDetailsItems}>
                     <Text>Wind Speed: </Text>
                     <Text style={styles.textSecondary}>{windSpeed}</Text>
                  </View>
               </View>
            </View>
            <View style={styles.WeatherDetailsBox}>
               <View style={styles.WeatherDetailsRow}>
                  <MaterialCommunityIcons name="speedometer" size={22} color={primary}/>
                  <View style={styles.WeatherDetailsItems}>
                     <Text>Pressure</Text>
                     <Text style={styles.textSecondary}>{pressure} hPa</Text>
                  </View>
               </View>
            </View>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   WeatherDetails: {
      borderWidth: 1,
      borderColor: border,
      borderRadius: 10,
      margin: 15,
   },
   WeatherDetailsRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: 'space-between',    
   },
   WeatherDetailsBox: {
      flex: 1,
      padding: 20,
   },
   WeatherDetailsItems: {
      justifyContent: "flex-end",
      alignItems: "flex-end"
   },
   textSecondary: {
      fontSize: 15,
      fontWeight: "700",
      color: secondary,
      margin: 7,
   }
})