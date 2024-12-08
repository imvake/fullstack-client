import logo from "./logo.svg";
import "./App.css";
import Home from "./Comp/Home";
import Login from "./Comp/Login";
import Header from "./Comp/Header";
import Footer from "./Comp/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row } from "reactstrap";
import Registration from "./Comp/Registration";
import { Provider } from "react-redux";
import { store } from "./store";
import { useSelector, useDispatch } from "react-redux";
function App() {
  let email = useSelector((state) => state.user.users.email);

  return (
    <div>
      <Container fluid>
        <BrowserRouter>
          <Row>{email ? <Header /> : null}</Row>
          <Row>
            <Routes>
              <Route path="/Home" element={<Home />}></Route>
              <Route path="/" element={<Login />}></Route>
              <Route path="/Registration" element={<Registration />}></Route>
            </Routes>
          </Row>
          <Row>
            <Footer />
          </Row>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
