import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Button,
  Typography,
} from "@mui/material";

const CustomerDelete = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const deleteCustomer = (id) => {
    const url = "/api/customers/" + id;
    fetch(url, { method: "DELETE" });
    props.stateRefresh();
  };

  return (
    <>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        삭제
      </Button>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>삭제 경고</DialogTitle>
        <DialogContent>
          <Typography gutterBottom>선택한 고객 정보가 삭제됩니다.</Typography>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            onClick={() => deleteCustomer(props.id)}
          >
            삭제
          </Button>
          <Button variant="outlined" color="primary" onClick={handleClose}>
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CustomerDelete;
