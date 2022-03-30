import type { SxProps } from "@mui/material";

import { Grid, GridItem } from "../Grid";

export const HoursColumn: React.FC = () => (
  <Grid rows={24}>
    {hours.map((hour, i) => (
      <GridItem row={i + 1} sx={style} key={hour}>
        {hour}
      </GridItem>
    ))}
  </Grid>
);

const hours = [...Array(24).keys()].map((hour) =>
  hour < 10 ? `0${hour}:00` : `${hour}:00`
);

const style: SxProps = {
  textAlign: "right",
  mt: -1,
  pr: 2,
  color: "text.disabled",
  typography: "body2",
};
