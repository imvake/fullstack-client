import React, { useState } from "react";
import { Button, Col, Input, Row } from "reactstrap";
import banner from "../../images/banner.jpg";
import { useDispatch, useSelector } from "react-redux";
import { savePost } from "../../Features/PostSlice";

function SharePosts() {
  let [msg, setMsg] = useState("");
  let [lat, setLat] = useState("");
  let [lang, setLang] = useState("");
  let email = useSelector((state) => state.user.users.email);
  let dispatch = useDispatch();

  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(function (position) {
      setLat(position.coords.latitude);
      setLang(position.coords.longitude);
    });
  }

  const savePosts = () => {
    if (msg === "") {
      alert("Write a message");
    } else {
      const postData = {
        msg: msg,
        email: email,
        lat: null,
        lang: null,
      };
      dispatch(savePost(postData));
    }
  };
  const saveLocation = () => {
    const postData = {
      msg: "My location is",
      email: email,
      lat: lat,
      lang: lang,
    };
    dispatch(savePost(postData));
  };

  console.log(lang);
  console.log(lat);

  return (
    <div>
      <Row>
        <img src={banner} className="bannerpic" />
      </Row>
      <Row>
        <h3>Share & Connect</h3>

        <Col md="6">
          <Input
            type="textarea"
            placeholder="Share your Thoughts"
            className="inputarea form-control"
            onChange={(e) => setMsg(e.target.value)}
            value={msg}
          />
        </Col>
        <Row>
          <Col md="3">
            <Button color="danger" className="postbutton" onClick={savePosts}>
              POST
            </Button>
          </Col>

          <Col md="3">
            <Button
              color="success"
              className="postbutton"
              onClick={saveLocation}
            >
              SHARE LOCATION
            </Button>
          </Col>
        </Row>
      </Row>
    </div>
  );
}

export default SharePosts;
