import dayjs from "dayjs";
import { ForecastDay } from "../types/api";
import { ListItem } from "./ListItem";

interface FollowingDaysProps {
  day: ForecastDay;
  isLast?: boolean;
}

export const FollowingDays = ({ day, isLast = false }: FollowingDaysProps) => {
  const date = dayjs(day.date).isToday()
    ? "dzisiaj"
    : dayjs(day.date).format("dddd");

  return (
    <ListItem
    isLast={isLast}
      title={date}
      value={`${Math.floor(day.day.mintemp_c)}° - ${Math.ceil(day.day.maxtemp_c)}°`}
      condition={day.day.condition}
    />
  );
};