import axios from "axios";
import React, { useState } from "react";
import { ProfileImg } from "../../../assets/images";
import { Avatar } from "../../standard";
// import Profile from "../../standard/avtar";
import BasicButton from "../../standard/button";
import Input from "../../standard/input/input";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Box } from "@mui/system";
import ErrorMsg from "../../errors/err";

import "./style.css";
import { RiLockPasswordFill } from "react-icons/ri";

export default function Login() {
  const initialVal = {
    email: "",
    password: "",
  };
  const [values, setValues] = useState(initialVal);
  const [formErrors, setFormErrors] = useState({});

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const submit = async (e) => {
    // const {email,password}=values
    e.preventDefault();

    // setFormErrors(validate(values));

    // if (!values === "") {
      console.log("values", values);

      const data = {
        email: values.email,
        password: values.password,
      };
      const response = await axios.post(
        "http://localhost:9001/api/user",
        data,
        {
          headers: { "Content-Type": "application/Json" },
        }
      );
      console.log("response------", response);
    // } 
  };

  // let result = await fetch("http://localhost:9000/api/login", {
  //   method: "POST",
  //   body: JSON.stringify(data),
  //   headers: { "Content-Type": "application/Json" },
  // });
  // result = result.json();
  // console.log(result);
  // if (result) {
  //   navigator("/");
  // }
  // };
  // const validate = (val) => {
  //   const errors = {};
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   console.log("errrr", formErrors);
  //   if (!val.email) {
  //     errors.email = "Email is required";
  //   } else if (!regex.test(val.email)) {
  //     errors.email = "This is not a valid email format!";
  //   }
  // if (!values.password) {
  //   errors.password = "Password is required";
  // } else if (!regex.test(values.password)) {
  //   errors.password = "This must be contain special character!";
  // }
  // };
  // console.log("addd=========", emaiTablel);
  // console.log("loggg======", password);

  //   try {
  //     await axios.post("http://localhost:9000/api/user", {
  //       email,
  //       password,
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }    console.log("submit");

  return (
    <div className="main">
      <div className="loginContainer">
        <Box component="form" noValidate autoComplete="off">
          <Avatar id="img-pro" src={ProfileImg} />
          {/* <img src={ProfileImg} /> */}
          <Input
            required
            value={values.email}
            id="filled"
            name="email"
            onChange={handleUserInput}
            label="Email"
            icon={<AccountCircle />}
            variant="filled"
          />{" "}
          {/* <ErrorMsg text={values.email} /> */}
          <Input
            name="password"
            value={values.password}
            id="input-with-icon-textfield"
            label="Password"
            type="password" // const validate = (val) => {
            //   const errors = {};
            //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
            //   console.log("errrr", formErrors);
            //   if (!val.email) {
            //     errors.email = "Email is required";
            //   } else if (!regex.test(val.email)) {
            //     errors.email = "This is not a valid email format!";
            //   }
            onChange={handleUserInput}
            autoComplete="current-password"
            icon={<RiLockPasswordFill />}
            variant="filled"
          />
          <div className="login-btn">
            <BasicButton
              id="btn"
              value="submit"
              onClick={submit}
              variant="contained"
            />
          </div>
        </Box>
      </div>
    </div>
  );
}
