import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
  Col,
  Container,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import { deletePost, getPosts, updatePost } from "../../Features/PostSlice";
import moment from "moment";
import {
  FaRegThumbsUp,
  FaRegThumbsDown,
  FaEdit,
  FaRegTrashAlt,
} from "react-icons/fa";

function Posts() {
  let allposts = useSelector((state) => state.posts.posts);
  let email = useSelector((state) => state.user.users.email);
  const [postMsg, setPostMsg] = useState("");
  const [postId, setPostId] = useState("");
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();
  const toggle = (msg, id) => {
    setModal(!modal);
    setPostMsg(msg);
    setPostId(id);
  };

  useEffect(() => {
    dispatch(getPosts());
  }, [allposts]);

  const handleUpdate = () => {
    const postData = {
      postMsg: postMsg,
      postId: postId,
    };
    dispatch(updatePost(postData));
    dispatch(getPosts());
  };

  const hadnleDelete = (postId) => {
    if (window.confirm("are you sure you want to delete the post ?") == true) {
      dispatch(deletePost(postId));
      dispatch(getPosts());
    }
  };

  return (
    <>
      {allposts.map((post) => (
        <Container fluid key={post._id}>
          <Row>
            <Col md="2"></Col>
            <Col>
              <Card
                className="my-2"
                style={{
                  width: "22rem",
                }}
              >
                <CardHeader>
                  <img
                    src={post.users[0].pic}
                    alt=""
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />

                  <span style={{ fontWeight: "bold" }}>
                    {post.users[0].uname}
                  </span>
                  <p style={{}}>Posted : {moment(post.createdAt).fromNow()}</p>
                </CardHeader>

                <CardBody>
                  <CardText>
                    {post.lat & post.lang ? (
                      <iframe
                        src={`https://maps.google.com/maps?q=${post.lat},${post.lug}&h1=es;&output=embed`}
                        width="auto"
                        height="auto"
                      />
                    ) : (
                      post.postMsg
                    )}
                  </CardText>
                </CardBody>
                <CardFooter>
                  <Row>
                    <Col xs="2">
                      <FaRegThumbsUp
                        style={{ width: "25px", height: "25px" }}
                      />
                    </Col>
                    <Col xs="2">
                      <FaRegThumbsDown
                        style={{ width: "25px", height: "25px" }}
                      />
                    </Col>
                    {post.email === email ? (
                      <>
                        <Col xs="2">
                          <FaEdit
                            style={{
                              width: "25px",
                              height: "25px",
                              cursor: "pointer",
                            }}
                            onClick={() => toggle(post.postMsg, post._id)}
                          />
                        </Col>
                        <Col xs="2">
                          <FaRegTrashAlt
                            onClick={() => hadnleDelete(post._id)}
                            style={{
                              width: "25px",
                              height: "25px",
                              cursor: "pointer",
                            }}
                          />
                        </Col>
                      </>
                    ) : null}
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      ))}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Modal</ModalHeader>
        <ModalBody>
          <Input
            type="textarea"
            className="form-control"
            value={postMsg}
            onChange={(e) => setPostMsg(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              toggle();
              handleUpdate();
            }}
          >
            UPDATE
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            CANCEL
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Posts;
