import { StatusBar } from 'expo-status-bar';
import React, { useEffect , useState } from 'react';
import { StyleSheet , Text, View , ActivityIndicator } from 'react-native';
import WeatherInfo from './src/components/WeatherInfo.jsx'
import * as Location from 'expo-location';
import UnitsPicker from './src/components/UnitsPicker'
import {colors} from './utils/index'
import ReloadIcon from './src/components/ReloadIcon.jsx';
import WeatherDetails from './src/components/WeatherDetails.jsx';

const {primary} = colors

export default function App() {

  const [error, setError] = useState(null)
  const [currentWeather, setCurrentWeather] = useState(null)
  const [unitSystem, setUnitSystem] = useState('metric')
  const WEATHER_API_KEY = "afae1a82b1b3a5feda0eed4078948984";
  const BASE_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?";

  useEffect(()=> {
    load()
  }, [unitSystem])

  async function load() {
    setCurrentWeather(null)
    try {

      let { status } = await Location.requestPermissionsAsync()
      if (status !== 'granted') {
        setError("Access to device location is needed to run the app.")
        return
      }

      const location =  await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
      const {latitude, longitude} = location.coords;

      const weather_url = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitSystem}&appid=${WEATHER_API_KEY}`

      const response = await fetch(weather_url);
      const result = await response.json();
      
      if (response.ok) {
        setCurrentWeather(result)
      } else {
        setError(result.message)
      }

    } catch (err) {
      alert(`${err}`)
    }
  }
  if (currentWeather) {
    const { main: {temp}, weather: {icon} } = currentWeather
    return (
      <View style={styles.container}>
        <StatusBar auto={true}/>
        <View style={styles.main}>
          <UnitsPicker unitSystem={unitSystem} setUnitSystem={setUnitSystem} />
          <ReloadIcon load={load}/>
          <WeatherInfo currentWeather={currentWeather} />
          <WeatherDetails currentWeather={currentWeather} unitSystem={unitSystem} setUnitSystem={setUnitSystem} />
        </View>
      </View>
    );
  } else if (error) {
    return (
      <View style={styles.container}>
        <ReloadIcon load={load}/>
        <Text style={{textAlign: 'center'}}>{error}</Text>
        <StatusBar auto={true}/>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ReloadIcon load={load}/>
        <ActivityIndicator size="large" color={primary} />
        <StatusBar auto={true}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  main: {
    justifyContent: "center",
    flex: 1
  }
});
