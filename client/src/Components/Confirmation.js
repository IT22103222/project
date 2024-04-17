import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Slide,
  } from "@mui/material";
  import * as React from "react";
  
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  function Confirmation(props) {
    return (
      <div>
        <Dialog
          open={props.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={props.handleClose}
        >
          <DialogTitle sx={{fontWeight:900}}>{"Confirmation"}</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{fontWeight:700}}>Do you Want to Delete</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.handleYes} sx={{color:"red"}}>Yes</Button>
            <Button onClick={props.handleClose}>No</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  
  export default Confirmation;