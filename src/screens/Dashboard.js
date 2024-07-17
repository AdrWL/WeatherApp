import React from 'react'
import { Feather } from '@expo/vector-icons';
import { Text, View, StyleSheet, ScrollView } from 'react-native'
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
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.cityName}>Warszawa</Text>
        <Text style={styles.temperature}>22°</Text>
        <View style={styles.weatherContainer}>
          <Feather name="sun" size={100} color={COLORS.sun} />
          <Text style={styles.weather}>Słonecznie</Text>
        </View>
        <View style={styles.followingDaysContainer}>
          {FOLLOWING_DAYS.map((item, index) => {
            return (
              <>
                <FollowingDays key={item.name} day={item} isLast={index === FOLLOWING_DAYS.length -1}/>
              </>
            );
          })}
        </View>
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
