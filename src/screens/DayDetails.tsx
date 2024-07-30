import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ActivityIndicator, Image, ScrollView } from "react-native";
import { COLORS } from "../themes/colors";
import { CityData, FollowingDay } from "../types/api";
import { fetchCityData, fetchFollowingDays } from "../services/apis";
import dayjs from "dayjs";
import { ListItem } from "../components/ListItem";

export const DayDetails = () => {
  const [current, setCurrent] = useState<null | CityData>(null);
  const [followingDays, setFollowingDays] = useState<null | FollowingDay>(null);

  useEffect(() => {
    const init = async () => {
      try {
        const currentData = await fetchCityData();
        setCurrent(currentData);

        const followingDaysData = await fetchFollowingDays();
        setFollowingDays(followingDaysData);
      } catch (error) {
        console.error("Błąd podczas pobierania danych:", error);
      }
    };
    init();
  }, []);

  if (!current || !followingDays) {
    return (
      <ActivityIndicator
        color={COLORS.sun}
        size="large"
        style={{ height: "100%" }}
      />
    );
  }

  const day = followingDays.forecast.forecastday[0];
  const locationName = "Warszawa";

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[styles.location, styles.text]}>{locationName}</Text>
      <Text style={[styles.date, styles.text]}>{dayjs(day.date).format("dddd, D MMMM YYYY")}</Text>
      <Image
        source={{ uri: `https:${day.day.condition.icon}` }}
        width={100}
        height={100}
      />
      <Text style={[styles.temperature, styles.text]}>
        {`${Math.floor(day.day.mintemp_c)} - ${Math.ceil(day.day.maxtemp_c)}`}
      </Text>
      <View style={styles.listContainer}>
        {day.hour.map((hour, index, allHours)=> (
        <ListItem
            key={hour.time}
            isLast={index === allHours.length - 1}
            title={hour.time}
            value={hour.temp_c}
            condition={hour.condition}
        />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingBottom: 20,
  },
  location: {
    fontSize: 30,
    fontWeight: "bold",
  },
  date: {
    fontSize: 26,
    marginBottom: 20,
  },
  temperature: {
    fontSize: 40,
    fontWeight: "600"
  },
  text: {
    color: COLORS.text,
    marginTop: 20,
  },
  listContainer: {
    backgroundColor: COLORS.lightBlue,
    marginTop: 40,
    marginHorizontal: 20,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
