import React, { useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomerAdd = (props) => {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();
  const [userName, setUserName] = useState();
  const [birthday, setBirthday] = useState();
  const [gender, setGender] = useState();
  const [job, setJob] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setFile(null);
    setFileName("");
    setUserName("");
    setBirthday("");
    setGender("");
    setJob("");
    setIsOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addCustomer().then((response) => {
      console.log(response.data);
      props.stateRefresh();
    });
    setIsOpen(false);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.value);
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleBirthdayChange = (e) => {
    setBirthday(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleJobChange = (e) => {
    setJob(e.target.value);
  };

  const addCustomer = () => {
    const url = "/api/customers";
    const formData = new FormData();
    formData.append("image", file);
    formData.append("userName", userName);
    formData.append("birthday", birthday);
    formData.append("gender", gender);
    formData.append("job", job);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return axios.post(url, formData, config);
  };

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        고객 추가하기
      </Button>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>고객 추가</DialogTitle>
        <DialogContent>
          <input
            accept="image/*"
            id="raised-button-file"
            type="file"
            file={file}
            value={fileName}
            onChange={handleFileChange}
          />
          <label htmlFor="raised-button-file">
            {/* <Button component="label" variant="contained">
              {fileName === "" ? "프로필 이미지 선택" : fileName}
              <VisuallyHiddenInput type="file" />
            </Button> */}
          </label>
          <br />
          <TextField
            label="이름"
            type="text"
            name="userName"
            value={userName}
            onChange={handleUserNameChange}
          />
          <br />
          <TextField
            label="생년월일"
            type="text"
            name="birthday"
            value={birthday}
            onChange={handleBirthdayChange}
          />
          <br />
          <TextField
            label="성별"
            type="text"
            name="gender"
            value={gender}
            onChange={handleGenderChange}
          />
          <br />
          <TextField
            label="직업"
            type="text"
            name="job"
            value={job}
            onChange={handleJobChange}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            onClick={handleFormSubmit}
          >
            추가
          </Button>
          <Button variant="outlined" color="primary" onClick={handleClose}>
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CustomerAdd;
