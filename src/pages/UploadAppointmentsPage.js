import React, { useRef, useState, useEffect } from "react";
import Card from "../shared/UI/Card/Card";
import Button from "@mui/material/Button";
import "./UploadAppointmentsPage.css";
import { API_URLS } from "../shared/constants";
import axios from "axios";
import { styles } from "../shared/styles";
import Snackbar from "@mui/material/Snackbar";

const UploadAppointmentsPage = (props) => {
  const [file, setFile] = React.useState();
  const [isValid, setIsValid] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const endpointURL =
    process.env.REACT_APP_COMMUNITYHUBAPI_URL + API_URLS.UPLOADAPPOINTMENTS();
  const [open, setOpen] = React.useState(false);
  const fileInputRef = React.useRef();
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // On componentDidMount set the timer
  // useEffect(() => {
  //   const timeId = setTimeout(() => {
  //     // After 3 seconds set the show value to false
  //     setMessage("");
  //   }, 3000);

  //   return () => {
  //     clearTimeout(timeId);
  //   };
  // }, [message]);
  const pickedHandler = (event) => {
    let pickedFile;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      setMessage("");
    } else {
      setIsValid(false);
    }
  };

  const placeSubmitHandler = async (event) => {
    event.preventDefault();
    //if await is removed, console log will be called before the uploadFile() is executed completely.
    //since the await is added, this will pause here then console log will be called
    await uploadFile(file);
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: {
        Connection: "keep-alive",
        Accept: "*/*",
        "Content-Type": "multipart/form-data; boundary=helldfkljksf",
      },
    };
    return await axios
      .post(endpointURL, formData, config)
      .then((response) => {
        if (response.status === 200) {
          fileInputRef.current.value = ""; //Resets the file name of the file input
          setMessage("Congrats! You have sucessfully uploaded the data.");
          setOpen(true);
          setIsValid(false);
        }
      })
      .catch(
        (err) =>{
           console.error(err);
           setOpen(false);
           setMessage(err);
           setIsValid(false);
          }
        );
  };
  return (
    <React.Fragment>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
      ></Snackbar>
      <Card className="appointment">
        <h2>Upload Appointment Details</h2>
        <hr />
        <form
          className="uploadappointments-form"
          encType="multipart/form-data"
          onSubmit={placeSubmitHandler}
        >
          <div>
            <input
              id={props.id}
              // ref={filePickerRef}
              type="file"
              accept=".xls,.xlsx"
              onChange={pickedHandler}
              style={{ float: "left" }}
              ref={fileInputRef} //Apply the ref to the input, now it's controlled
            />
          </div>
          <span></span>
          <div>
            <Button
              style={{ marginTop: "34px" }}
              disableRipple
              variant="contained"
              data-testid="submit"
              sx={styles.UploadAppointmentssubmitButton}
              type="submit"
              disabled={!isValid}
            >
              Submit
            </Button>
          </div>
          <div  style={{ paddingTop: "70px" }}>
            <h4 style={{ color: "green" }}>{message}</h4>
          </div>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default UploadAppointmentsPage;
