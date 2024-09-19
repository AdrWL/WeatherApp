import {
    Alert,
  } from "react-native";
  import * as Location from 'expo-location';
  import { fetchCityData } from "../services/apis";

export const showPermissionDeniedAlert = () => {
    Alert.alert("Brak uprawnień", "Aby móc korzystać z funkcjonalności przejdz do ustawień i pozwól na pobranie lokalizacji.")
}

export const showLocationUnvailableAlert = () => {
    Alert.alert("Nie można uzyskać lokalizacji", "Spróbuj ponownnie")
}

export const showDefaultErrorAlert = () => {
    Alert.alert("Błąd", "Pobieranie lokalizacjie nie powiodło się")
}

const getLocationName = async (location: Location.LocationObject) => {
    const cityData = await fetchCityData(`${location.coords.latitude}, ${location.coords.latitude}`)
    if ('location' in cityData){
        return cityData.location.name
    }
    return `${location.coords.latitude}, ${location.coords.latitude}`
}

export const getLocation = async () => {
    const location = await Location.getCurrentPositionAsync();
    const locationName = await getLocationName(location)
    return {
        title: locationName,
        value: `${location.coords.latitude}, ${location.coords.latitude}`
    }
}