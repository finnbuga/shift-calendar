import { useState } from "react";

import type { Event } from "./Event";

export const useEvents = (filter: (event: Event) => boolean) => {
  const [events, setEvents] = useState(defaultEvents);
  // @TODO store events normalised by id. Can use context for easier access from other components.
  const addEvent = (event: Event) => setEvents([...events, event]);
  const updateEvent = (updatedEvent: Event) =>
    setEvents(
      events.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
  const filteredEvents = events.filter(filter);

  return { filteredEvents, addEvent, updateEvent };
};

// For testing
const defaultEvents: Event[] = [
  {
    id: "1",
    title: "Work on the take home task",
    date: new Date("2022-03-30T03:00:00.000Z"),
    duration: 3,
  },
  {
    id: "2",
    title: "Take a break",
    date: new Date("2022-03-30T07:00:00.000Z"),
    duration: 2,
  },
  {
    id: "3",
    title: "Send exercise",
    date: new Date("2022-03-31T02:00:00.000Z"),
    duration: 1,
  },
  {
    id: "4",
    title: "Party",
    date: new Date("2022-04-01T05:00:00.000Z"),
    duration: 3,
  },
  {
    id: "4",
    title: "Something for next week",
    date: new Date("2022-04-06T03:00:00.000Z"),
    duration: 4,
  },
];
