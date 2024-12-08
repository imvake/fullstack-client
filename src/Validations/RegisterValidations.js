import * as yup from "yup";

export const RegistrationValidations = yup.object().shape({
  Fname: yup.string().required("Name cannot be empty").min(2),
  email: yup
    .string()
    .email("Incorrect Email Format")
    .required("Email cannot be empty"),

  password: yup
    .string()
    .required("Passwrod cannot be empty")
    .min(6, "Mininum 6 Characters")
    .max(10, "Maximum 10 Characters"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password cannot be empty"),
});
