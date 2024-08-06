import dayjs from "dayjs";
import { ForecastDay } from "../types/api";
import { ListItem } from "./ListItem";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/Root";

interface FollowingDaysProps {
  day: ForecastDay;
  isLast?: boolean;
  locationName: string;
}

export const FollowingDays = ({
  day,
  isLast = false,
  locationName,
}: FollowingDaysProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const date = dayjs(day.date).isToday()
    ? "dzisiaj"
    : dayjs(day.date).format("dddd");

  return (
    <ListItem
      isLast={isLast}
      title={date}
      value={`${Math.floor(day.day.mintemp_c)}° - ${Math.ceil(
        day.day.maxtemp_c
      )}°`}
      condition={day.day.condition}
      onPress={() => navigation.navigate("DayDetails", { day, locationName })}
    />
  );
};
