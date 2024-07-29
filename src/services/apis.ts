import { CityData, FollowingDay } from "../types/api";

export const fetchCityData = async (): Promise<CityData> => {
  const response = await fetch(
    `${process.env.EXPO_PUBLIC_API_URL}/current.json?key=${process.env.EXPO_PUBLIC_API_KEY}&q=Warszawa&lang=pl`
  )
  return response.json();
};

export const fetchFollowingDays = async (): Promise<FollowingDay> => {
  const response = await fetch(
    `${process.env.EXPO_PUBLIC_API_URL}/forecast.json?key=${process.env.EXPO_PUBLIC_API_KEY}&q=Warszawa&lang=pl&days=7`
  )
  return response.json();
}