import { useState, useCallback } from "react";
import { Dialog, DialogTitle, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import type { SxProps } from "@mui/material";

import type { Event } from "../events/Event";
import { EditEventForm } from "./EditEventForm";

export const UpdateEventButton: React.FC<{
  readonly event: Event;
  readonly updateEvent: (event: Event) => void;
}> = ({ event, updateEvent }) => {
  const [isOpen, setState] = useState(false);
  const openModal = useCallback(() => setState(true), []);
  const closeModal = useCallback(() => setState(false), []);

  const handleSubmit = (event: Event) => {
    updateEvent(event);
    // @TODO notify the user that the event has been updated
    closeModal();
  };

  return (
    <>
      <IconButton sx={style} size="small" color="default" onClick={openModal}>
        <EditIcon />
      </IconButton>

      <Dialog open={isOpen} onClose={closeModal}>
        <DialogTitle>Update Event</DialogTitle>
        <EditEventForm
          event={event}
          onSubmit={handleSubmit}
          onCancel={closeModal}
        />
      </Dialog>
    </>
  );
};

const style: SxProps = {
  position: "absolute",
  bottom: 0,
  right: 0,
};
