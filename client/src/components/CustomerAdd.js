import React, { useState } from "react";
import axios from "axios";

const CustomerAdd = (props) => {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();
  const [userName, setUserName] = useState();
  const [birthday, setBirthday] = useState();
  const [gender, setGender] = useState();
  const [job, setJob] = useState();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addCustomer().then((response) => {
      console.log(response.data);
      props.stateRefresh();
    });
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

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>고객추가</h1>
      프로필 이미지:
      <input
        type="file"
        name="file"
        file={file}
        value={fileName}
        onChange={handleFileChange}
      />
      <br />
      이름:
      <input
        type="text"
        name="userName"
        value={userName}
        onChange={handleUserNameChange}
      />
      생년월일:
      <input
        type="text"
        name="birthday"
        value={birthday}
        onChange={handleBirthdayChange}
      />
      성별:
      <input
        type="text"
        name="gender"
        value={gender}
        onChange={handleGenderChange}
      />
      직업:
      <input type="text" name="job" value={job} onChange={handleJobChange} />
      <button type="submit">추가하기</button>
    </form>
  );
};

export default CustomerAdd;
