import { CityData, FollowingDay } from "../types/api";

export const fetchCityData = async (location: string): Promise<CityData> => {
  const response = await fetch(
    `${process.env.EXPO_PUBLIC_API_URL}/current.json?key=${process.env.EXPO_PUBLIC_API_KEY}&q=${location}&lang=pl`
  )
  return response.json();
};

export const fetchFollowingDays = async (location: string): Promise<FollowingDay> => {
  const response = await fetch(
    `${process.env.EXPO_PUBLIC_API_URL}/forecast.json?key=${process.env.EXPO_PUBLIC_API_KEY}&q=${location}&lang=pl&days=7`
  )
  return response.json();
}