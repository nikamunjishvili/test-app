import * as Yup from "yup";

export const SignupValidationSchema = Yup.object({
  name: Yup.string().required("Enter Something..."),
  email: Yup.string().email().required("Enter something..."),
  age: Yup.number().required("Enter Valid Age!!"),
});
