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
    // <View style={[styles.container, !isLast && styles.separator]}>
    //   <Text style={styles.content}>{date}</Text>
    //   <Text style={[styles.content, styles.value]}>
    //     {Math.floor(day.day.mintemp_c)}° - {Math.ceil(day.day.maxtemp_c)}°
    //   </Text>
    //   <Image
    //     source={{
    //       uri: `https:${day.day.condition.icon}`,
    //     }}
    //     resizeMode="contain"
    //     width={40}
    //     height={40}
    //   />
    // </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     width: "100%",
//     alignItems: "center",
//     justifyContent: "space-between",
//     minHeight: 40, 
//   },
//   separator: {
//     borderBottomWidth: 1,
//     borderColor: COLORS.background,
//   },
//   content: {
//     flex: 1,
//     color: COLORS.text,
//   },
//   value: {
//     textAlign: "center",
//     fontWeight: "600",
//   },
//   type: {
//     textAlign: "right",
//     color: COLORS.sun,
//   },
// });
