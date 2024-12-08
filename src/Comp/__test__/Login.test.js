import renderer from "react-test-renderer";
import Login from "../Login";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import { store } from "../../store";
import reducer from "../../Features/UserSlice";

/*test("Match the UI",()=>{
    const {container}=render(
        <Provider store={store}>
            <Router>
                <Login/>
            </Router>
        </Provider>
    );
    screen.debug(container);
    expect(container).toMatchSnapshot();
});*/

// test("Checking Email Input", () => {
//   render(
//     <Provider store={store}>
//       <Router>
//         <Login />
//       </Router>
//     </Provider>
//   );
//   const emailInput = screen.getByLabelText(/email/i);
//   //const testemail="abc@gmail.com";
//   //expect(emailInput.value).toEqual(testemail);
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   fireEvent.change(emailInput, {
//     target: {
//       value: "abc@gmail.com",
//     },
//   });
//   expect(emailRegex.test(emailInput.value)).toBe(true);
// });

// test("Checking Password Input", () => {
//   render(
//     <Provider store={store}>
//       <Router>
//         <Login />
//       </Router>
//     </Provider>
//   );
//   const passInput = screen.getByLabelText(/password/i);
//   //const testemail="abc@gmail.com";
//   //expect(emailInput.value).toEqual(testemail);
//   const passwordRegex =
//     /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
//   fireEvent.change(passInput, {
//     target: {
//       value: "Abc@123",
//     },
//   });
//   expect(passwordRegex.test(passInput.value)).toBe(true);
// });

const testInitValue = {
  users: {},
  message: "",
  isLoading: false,
  isSuccess: false,
  isError: false,
};

test("Cechking the states", () => {
  expect(reducer(undefined, { type: undefined })).toEqual(testInitValue);
});
