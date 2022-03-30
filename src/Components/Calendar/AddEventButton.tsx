import { useState, useCallback } from "react";
import { Dialog, DialogTitle, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import type { SxProps } from "@mui/material";

import type { Event } from "../events/Event";
import { EditEventForm } from "./EditEventForm";

export const AddEventButton: React.FC<{
  readonly addEvent: (event: Event) => void;
}> = ({ addEvent }) => {
  const [isOpen, setState] = useState(false);
  const openModal = useCallback(() => setState(true), []);
  const closeModal = useCallback(() => setState(false), []);

  const handleSubmit = (event: Event) => {
    addEvent(event);
    // @TODO notify the user that the event has been added
    closeModal();
  };

  return (
    <>
      <Fab color="secondary" sx={style} onClick={openModal}>
        <AddIcon />
      </Fab>

      <Dialog open={isOpen} onClose={closeModal}>
        <DialogTitle>Add Event</DialogTitle>
        <EditEventForm onSubmit={handleSubmit} onCancel={closeModal} />
      </Dialog>
    </>
  );
};

const style: SxProps = {
  position: "fixed",
  bottom: 32,
  right: 32,
};
