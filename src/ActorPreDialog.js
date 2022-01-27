import {
  Typography,
  Dialog,
  Button,
  Toolbar,
  IconButton,
  Box,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";

const ActorPreDialog = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog fullScreen open={open} onClose={handleClose}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
        <Box className="dialogBox">
          <Typography>
            Sorry, you didn't get it this time. Come back tomorrow for another
            round.
          </Typography>
          <Button variant="outline">play</Button>
        </Box>
      </Dialog>
    </div>
  );
};

export default ActorPreDialog;
