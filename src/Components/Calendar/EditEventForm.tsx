import { useState } from "react";
import {
  Box,
  Button,
  DialogContent,
  DialogActions,
  TextField,
  InputAdornment,
} from "@mui/material";

import type { Event } from "../events/Event";

export const EditEventForm: React.FC<{
  readonly event?: Event;
  readonly onSubmit: (event: Event) => void;
  readonly onCancel: () => void;
}> = ({ event = emptyEvent, onSubmit, onCancel }) => {
  const [form, setForm] = useState({
    ...event,
    date: event.date.toISOString(),
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ id: uidGenerator(), ...form, date: new Date(form.date) });
  };

  return (
    <form onSubmit={handleSubmit}>
      <DialogContent>
        <TextField
          label="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          // @TODO validate input. Use a library like react-hook-form
          fullWidth
          InputLabelProps={{ shrink: true }}
          sx={{ mt: 1 }}
        />

        <Box sx={{ display: "flex", columnGap: 2, mt: 3, mb: 1 }}>
          <TextField
            label="Date & Time"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            InputLabelProps={{ shrink: true }}
            sx={{ width: 250 }}
          />

          <TextField
            label="Duration"
            type="number"
            value={form.duration}
            onChange={(e) =>
              setForm({ ...form, duration: Number(e.target.value) })
            }
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: <InputAdornment position="end">h</InputAdornment>,
            }}
            sx={{ width: 100 }}
          />
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </DialogActions>
    </form>
  );
};

const emptyEvent = { title: "", date: new Date(), duration: 3 };

const uidGenerator = () => Date.now().toString();
