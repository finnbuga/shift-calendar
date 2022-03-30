import { Box } from "@mui/material";
import type { SxProps } from "@mui/material";

import { GridItem } from "./GridItem";

const MIN_HEIGHT = 50;
const MIN_WIDTH = 100;

export const Grid: React.FC<{
  readonly rows?: number;
  readonly cols?: number;
  readonly border?: boolean;
  readonly sx?: SxProps;
}> = ({ rows = 1, cols = 1, border = false, sx, children }) => {
  const containerStyle: SxProps = {
    ...sx,
    display: "grid",
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    backgroundColor: border ? "divider" : "transparent",
    padding: "1px",
    columnGap: "1px",
    rowGap: "1px",
  };

  const itemStyle: SxProps = {
    minWidth: MIN_WIDTH,
    minHeight: MIN_HEIGHT,
  };

  return (
    <Box sx={containerStyle}>
      {getNumbersFrom1toN(cols).map((col) =>
        getNumbersFrom1toN(rows).map((row) => (
          <GridItem col={col} row={row} sx={itemStyle} key={col * row} />
        ))
      )}

      {children}
    </Box>
  );
};

const getNumbersFrom1toN = (n: number) =>
  [...Array(n).keys()].map((i) => i + 1);
