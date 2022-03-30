import { Box } from "@mui/material";
import type { SxProps } from "@mui/material";

export const GridItem: React.FC<{
  readonly col?: number;
  readonly row?: number;
  readonly span?: number;
  readonly Component?: React.ElementType;
  readonly sx?: SxProps;
}> = ({ col = 1, row = 1, span = 1, sx, Component = Box, children }) => {
  const style: SxProps = {
    gridColumn: col,
    gridRowStart: row,
    gridRowEnd: row + span,
    background: "white",
    ...sx,
  };

  return <Component sx={style}>{children}</Component>;
};
