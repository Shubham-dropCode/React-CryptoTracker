import { Snackbar } from "@material-ui/core";
import React from "react";
import { CryptoState } from "../../CryptoContext";
import MuiAlert from "@material-ui/lab/Alert";

const AlertComponent = () => {
  const { alert, setAlert } = CryptoState();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert({ open: false });
  };
  return (
    <>
      {/* {alert && <Alert severity="error">passWord mismatched</Alert>} */}
      {/* )} */}
      <Snackbar open={alert.open} autoHideDuration={3000} onClose={handleClose}>
        <MuiAlert
          onClose={handleClose}
          elevation={10}
          variant="filled"
          severity={alert.type}
          open={alert.open}
        >
          {alert.message}
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default AlertComponent;
