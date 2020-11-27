import React from 'react'
import { View, Text , StyleSheet, Image } from 'react-native'
import {colors} from '../../utils/index'

const {primary, secondary} = colors

export default function WeatherInfo({currentWeather}) {
   const {
      main: {temp},
      weather: [details],
      name
   } = currentWeather
   const {icon , main , description } = details;
   const iconURL = `https://openweathermap.org/img/wn/${icon}@4x.png`
   
   return (
      <View style={styles.weatherInfo}>
         <Text>{name}</Text>
         <Image style={styles.weatherIcon} source={{uri: iconURL}}/>
         <Text style={styles.textPrimary}>{temp}&deg;</Text>
         <Text style={styles.weatherDescription}>{description}</Text>
         <Text style={styles.textSecondary}>{main}</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   weatherInfo: {
      alignItems: "center",
      marginBottom: "auto",
      marginTop: 'auto'
   },
   weatherDescription: {
      textTransform: "capitalize",
   },
   weatherIcon: {
      width: 100,
      height: 100,
   },
   textPrimary: {
      color: primary,
      fontSize: 40,
   },
   textSecondary: {
      fontSize: 26,
      fontWeight: "500",
      marginTop: 10,
      color: secondary,
   }
})