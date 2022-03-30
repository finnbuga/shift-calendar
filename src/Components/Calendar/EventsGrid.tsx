import { Card } from "@mui/material";
import type { SxProps } from "@mui/material";

import { Grid, GridItem } from "../Grid";
import type { Event } from "../events/Event";
import { UpdateEventButton } from "./UpdateEventButton";

export const EventsGrid: React.FC<{
  readonly events: Event[];
  readonly updateEvent: (event: Event) => void;
}> = ({ events, updateEvent }) => (
  <Grid cols={7} rows={24} border>
    {events.map((event) => {
      const overlappingEventsCount = events.filter(
        ({ date }) =>
          event.date.getDay() === date.getDay() &&
          event.date.getHours() === date.getHours()
      ).length;
      // @TODO also take the duration into consideration and mark as overlapping
      // the events that happen in the next 15min or so. That should leave enough space to
      // display the first line of the title

      // @TODO do something smart with `overlappingEventsCount``. E.g. pass it to the component bellow
      // and narrow the event width proportionally. Keep howerver a minimum width.
      return (
        <GridItem
          key={event.id}
          col={event.date.getDay()}
          row={event.date.getHours() + 1} // rows start at 1 and hours at 0
          span={event.duration}
          Component={Card}
          sx={style}
        >
          {event.title}
          <UpdateEventButton event={event} updateEvent={updateEvent} />
        </GridItem>
      );
    })}
  </Grid>
);

const style: SxProps = {
  margin: "1px 2px 2px 1px",
  p: ".5rem .6rem",
  backgroundColor: "primary.light",
  typography: "caption",
  lineHeight: 1.4,
  position: "relative",
};
