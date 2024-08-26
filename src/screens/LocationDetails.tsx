import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, ScrollView, ActivityIndicator, Image } from 'react-native';
import { COLORS } from '../themes/colors';
import { FollowingDays } from '../components/FollowingDays';
import { Footer } from '../components/Footer';
import { fetchCityData, fetchFollowingDays } from '../services/apis'; 
import { ApiError, CityData, FollowingDay } from "../types/api";
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/Root';

export const LocationDetails = () => {
  const [current, setCurrent] = useState<null | CityData | ApiError>(null);
  const [followingDays, setFollowingDays] = useState<null | FollowingDay>(null); 

  const {params: {location}} = useRoute<RouteProp<RootStackParamList, "LocationDetails">>();

  useEffect(() => {
    const init = async () => {
      try {
        const currentData = await fetchCityData(location);
        setCurrent(currentData);
        
        const followingDaysData = await fetchFollowingDays(location);
        setFollowingDays(followingDaysData);
      } catch (error) {
        console.error("Błąd podczas pobierania danych:", error);
      }
    };
    init();
  }, []);

  if (!current || !followingDays || "error" in current  || "error" in followingDays ) {
    return <ActivityIndicator color={COLORS.sun} size="large" style={{ height: "100%" }} />
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.cityName}>{current.location.name}</Text>
        <Text style={styles.temperature}>{current.current.temp_c}°</Text>
        <View style={styles.weatherContainer}>
          <Image
            source={{
              uri: `https:${current.current.condition.icon}`,
            }}
            resizeMode="contain"
            width={150}
            height={150}
          />
          <Text style={styles.weather}>{current.current.condition.text}</Text>
        </View>
        <View style={styles.followingDaysContainer}>
          {followingDays.forecast.forecastday.map((day, index, allDays) => (
            <FollowingDays
              key={day.date}
              day={day}
              isLast={index === allDays.length - 1} 
              locationName={current.location.name}
              />
          ))}
        </View>
        <Footer/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  weatherContainer: {
    width: '100%',
    alignItems: "center",
  },
  cityName: {
    fontSize: 30,
    color: COLORS.text,
    marginTop: 20,
  },
  temperature: {
    fontSize: 72,
    fontWeight: '600',
    color: COLORS.text,
    marginTop: 20,
  },
  weather: {
    fontSize: 26,
    color: COLORS.text,
  },
  followingDaysContainer: {
    margin: 20,
    marginTop: 40,
    backgroundColor: COLORS.lightBlue,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
})
