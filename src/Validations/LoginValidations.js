import * as yup from "yup";

export const LoginValidations = yup.object().shape({
  email: yup
    .string()
    .email("Incorrect Email Format")
    .required("Enter Your Email"),
  password: yup
    .string()
    .min(6, "Min Length is 6 Characters")
    .max(10, "Max Length is 10 Characters"),
});
