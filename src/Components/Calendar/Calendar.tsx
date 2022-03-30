import { Box, IconButton } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBackIosNew";
import ArrowForward from "@mui/icons-material/ArrowForwardIos";
import dayjs from "dayjs";
import type { SxProps } from "@mui/material";

import { useEvents } from "../events/useEvents";
import type { Event } from "../events/Event";
import { WeekDaysRow } from "./WeekDaysRow";
import { HoursColumn } from "./HoursColumn";
import { EventsGrid } from "./EventsGrid";
import { AddEventButton } from "./AddEventButton";
import { useSelectedDate } from "./useSelectedDate";

export const Calendar: React.FC = () => {
  const { selectedDate, selectNextWeek, selectPrevWeek, weekDays, month } =
    useSelectedDate(new Date());

  const isInSelecteWeek = (event: Event) =>
    dayjs(event.date).isSame(selectedDate, "week");

  const { filteredEvents, addEvent, updateEvent } = useEvents(isInSelecteWeek);

  return (
    <>
      <Box sx={headerStyle}>
        <PrevButton onClick={selectPrevWeek} />
        {month}
        <NextButton onClick={selectNextWeek} />
      </Box>

      <Box sx={containerStyle}>
        <Box />
        <WeekDaysRow weekDays={weekDays} />
        <HoursColumn />
        <EventsGrid events={filteredEvents} updateEvent={updateEvent} />
      </Box>

      <AddEventButton addEvent={addEvent} />
    </>
  );
};

const PrevButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <IconButton onClick={onClick} color="secondary">
    <ArrowBack />
  </IconButton>
);

const NextButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <IconButton onClick={onClick} color="secondary">
    <ArrowForward />
  </IconButton>
);

const headerStyle: SxProps = {
  textAlign: "center",
  typography: "h4",
  my: 4,
};

const containerStyle: SxProps = {
  display: "grid",
  gridTemplateColumns: "auto 1fr",
};
