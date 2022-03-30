import { useState } from "react";
import dayjs from "dayjs";

export const useSelectedDate = (initialValue: Date) => {
  const [selectedDate, setSelectedDate] = useState(initialValue);
  const weekDates = getEntireWeek(selectedDate);

  return {
    selectedDate,
    selectNextWeek: () =>
      setSelectedDate(dayjs(selectedDate).add(7, "day").toDate()),
    selectPrevWeek: () =>
      setSelectedDate(dayjs(selectedDate).subtract(7, "day").toDate()),
    weekDays: weekDates.map(getWeekDay),
    month: getUnique(weekDates.map(getMonth)).join(" - "),
  };
};

const getEntireWeek = (reference: Date) => {
  let date = getFirstDayInTheWeek(reference);

  const weekDates: Date[] = [];
  do {
    weekDates.push(date);
    date = getNextDay(date);
  } while (date.getDay() !== FIRST_DAY_OF_WEEK);

  return weekDates;
};

// This is basically getMonday() or getSunday() depending on the country
// Can probably transfer the responsibility to with Day.js
const getFirstDayInTheWeek = (date: Date): Date =>
  date.getDay() === FIRST_DAY_OF_WEEK
    ? date
    : getFirstDayInTheWeek(getPrevDay(date));

const getPrevDay = (date: Date) => dayjs(date).subtract(1, "day").toDate();

const getNextDay = (date: Date) => dayjs(date).add(1, "day").toDate();

const getMonth = (date: Date) =>
  date.toLocaleString(undefined, { month: "long" });

const getWeekDay = (date: Date) =>
  date.toLocaleDateString(undefined, { weekday: "short", day: "2-digit" });

const getUnique = <T>(array: Array<T>) => [...new Set(array)];

const FIRST_DAY_OF_WEEK = 1;
