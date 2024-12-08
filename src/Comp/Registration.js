import React, { useState } from "react";
import { Button, Col, Container, FormGroup, Label, Row } from "reactstrap";
import Logo from "../images/logo.png";
// import { UsersData } from "../ExampleData";
// import {useState,useEffect} from 'react';
// import Axios from 'axios';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegistrationValidations } from "../Validations/RegisterValidations";
import { useNavigate } from "react-router-dom";
import { addUser } from "../Features/UserSlice";
import { useDispatch, useSelector } from "react-redux";
function Registration() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [Confirmpasswrod, setConfirmPasswrod] = useState("");
  let [profileURL, setProfileURL] = useState("");

  let navigate = useNavigate();
  // const users = useSelector((state) => state.register.users);
  const msg = useSelector((state) => state.user.message);
  const dispatch = useDispatch();
  const sideImage =
    "https://www.gocnstudy.cn/wp-content/uploads/2023/03/pexels-pixabay-256455.jpg";

  const {
    register,
    handleSubmit: submitForm,
    formState: { errors },
  } = useForm({ resolver: yupResolver(RegistrationValidations) });

  const handleSubmit = () => {
    dispatch(
      addUser({
        uname: name,
        password: password,
        email: email,
        pic: profileURL,
      })
    );

    // if (msg === "User inserted successfully") {
      // navigate("/");
    // }
  };

  const toLogin = () => {
    navigate("/");
  };

  return (
    <Container fluid>
      <Row className="div-row-reg">
        <Col className="div-col-reg" md={8}>
          <form className="div-form-reg">
            <div className="div-logo">
              <img src={Logo} width="200px" height="100px" alt="img" />
            </div>

            <FormGroup>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name.."
                {...register("Fname", {
                  // value:{name},
                  onChange: (e) => setName(e.target.value),
                })}
                value={name}
              />
              <p className="error">{errors.Fname?.message}</p>
            </FormGroup>

            <FormGroup>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email.."
                {...register("email", {
                  // value:{email},
                  onChange: (e) => setEmail(e.target.value),
                })}
                value={email}
              />
              <p className="error">{errors.email?.message}</p>
            </FormGroup>

            <FormGroup>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password.."
                {...register("password", {
                  onChange: (e) => setPassword(e.target.value),
                  // value:{password}
                })}
                value={password}
              />
              <p className="error">{errors.password?.message}</p>
            </FormGroup>

            <FormGroup>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm your password.."
                {...register("confirmPassword", {
                  onChange: (e) => setConfirmPasswrod(e.target.value),
                  // value:{Confirmpasswrod}
                })}
                value={Confirmpasswrod}
              />
              <p className="error">{errors.confirmPassword?.message}</p>
            </FormGroup>

            <FormGroup>
              <input
                type="text"
                className="form-control"
                placeholder="Enter profile pic URL.."
                onChange={(e) => setProfileURL(e.target.value)}
                value={profileURL}
              />
              <p className="error">{errors.confirmPassword?.message}</p>
            </FormGroup>

            <FormGroup>
              <Button
                color="warning"
                className="form-control"
                onClick={submitForm(handleSubmit)}
              >
                Register
              </Button>
              <h5>{msg}</h5>
            </FormGroup>
            <FormGroup>
              <Label onClick={() => toLogin()}>Login</Label>
            </FormGroup>
          </form>
        </Col>
        <Col className="div-col-reg" md={4}>
          <div className="div-side">
            <img src={sideImage} width="450px" height="390px" alt="img" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Registration;
