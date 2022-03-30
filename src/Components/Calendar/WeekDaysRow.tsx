import { Grid, GridItem } from "../Grid";

export const WeekDaysRow: React.FC<{ weekDays: string[] }> = ({ weekDays }) => (
  <Grid cols={weekDays.length}>
    {weekDays.map((day, i) => (
      <GridItem col={i + 1} sx={{ placeSelf: "center" }} key={day}>
        {day}
      </GridItem>
    ))}
  </Grid>
);
