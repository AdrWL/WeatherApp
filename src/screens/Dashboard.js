import React from 'react'
import { Feather } from '@expo/vector-icons';
import { Text, View, StyleSheet } from 'react-native'
import { COLORS } from '../themes/colors';
import { FollowingDays } from '../components/FollowingDays';

const FOLLOWING_DAYS = [
  {
    name: 'Dzisiaj',
    value: 22,
    type: 'sun',
  },
  {
    name: 'Wtorek',
    value: 22,
    type: 'sun',
  },
  {
    name: 'Środa',
    value: 22,
    type: 'sun',
  }
]

export const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>Warszawa</Text>
      <Text style={styles.temperature}>22°</Text>
      <View style={styles.weatherContainer}>
        <Feather name="sun" size={100} color={COLORS.sun} />
        <Text style={styles.weather}>Słonecznie</Text>
      </View>
      {FOLLOWING_DAYS.map((item) => {
        return (
          <>
            <FollowingDays day={item} />
          </>
        );
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  weatherContainer: {
    width: '100%',
    alignItems: "center",
    marginTop: 10,
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
  }
})
