import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import logo from "../images/logo.png";
import { LoginValidations } from "../Validations/LoginValidations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../Features/UserSlice";
function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let Navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit: submitForm,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginValidations) });

  const message = useSelector((state) => state.user.message);
  const userData = useSelector((state) => state.user.users);
  const isSuccess = useSelector((state) => state.user.isSuccess);
  const isError = useSelector((state) => state.user.isError);

  const handleSubmit = (e) => {
    const user = { email: email, password: password };
    dispatch(getUser(user));
  };

  useEffect(() => {
    if (userData && isSuccess) {
      Navigate("/Home");
    }
    if (isError) {
      Navigate("/");
    }
  }, [isSuccess, isError, userData]);
  return (
    <Container fluid>
      <Row className="div-row">
        <Col className="div-col" md="6">
          <form className="div-form">
            <div className="div-logo">
              <img
                src={logo}
                alt="Logo"
                className="logo"
                width="200px"
                height="100px"
              />
            </div>
            <FormGroup>
              <Label for="email">Email</Label>
              <input
                id="email"
                type="email"
                className="form-control"
                {...register("email", {
                  onChange: (e) => setEmail(e.target.value),
                })}
                value={email}
              />

              {errors.email && (
                <p className="alert alert-danger">{errors.email?.message}</p>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <input
                id="password"
                type="password"
                className="form-control"
                {...register("password", {
                  onChange: (e) => setPassword(e.target.value),
                })}
                value={password}
              />
              {errors.password && (
                <p className="alert alert-danger">{errors.password?.message}</p>
              )}
            </FormGroup>
            <FormGroup>
              <Input type="checkbox" />
              <Label>Remember me</Label>
            </FormGroup>
            <FormGroup>
              <Label>
                <a href="">Forget Password ?</a>
              </Label>
            </FormGroup>
            <FormGroup>
              <Button color="primary" onClick={submitForm(handleSubmit)}>
                SignIn
              </Button>
            </FormGroup>
            <FormGroup>
              <Label>
                <Link to="/Registration">No Account? SignUp</Link>
              </Label>
            </FormGroup>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
export default Login;
