import React, { useEffect } from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Header from "./Header";
// import {useState,useEffect} from 'react';
// import Axios from 'axios';

import Users from "./HomeComp/Users";
import SharePosts from "./HomeComp/SharePosts";
import Posts from "./HomeComp/Posts";
import { useSelector } from "react-redux";
function Home() {
  let email = useSelector((state) => state.user.users.email);
  const navigate = useNavigate();

  useEffect(() => {
    if (!email) {
      navigate("/");
    }
  }, [email]);
  return (
    <Container fluid>
      <Row>
        <Col md="3">
          <Users />
        </Col>
        <Col md="9">
          <SharePosts />
        </Col>
      </Row>
      <Row>
        <Col md="3"></Col>
        <Col md="9">
          <Posts />
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
