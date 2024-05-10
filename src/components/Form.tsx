import { useFormik } from "formik";
import { SignupValidationSchema } from "../utils/Validation-Schemas";
import { useState } from "react";

interface User {
  name: string;
  email: string;
  age?: number;
}

const Form = () => {
  const [getData, setGetData] = useState<User[]>([]);

  const formik = useFormik({
    initialValues: { name: "", email: "", age: "" },
    onSubmit: (values) => {
      try {
        localStorage.setItem("users", JSON.stringify(values));
        const getDatas: User = JSON.parse(localStorage.getItem("users"));
        setGetData(getDatas);
      } catch (error) {
        if (error) {
          throw new Error("This users not found!!");
        }
      }
    },
    validationSchema: SignupValidationSchema,
  });

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    formik;

  return (
    <div>
      {getData ? (
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <input
            name="age"
            type="number"
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <h1>Home Page!!</h1>
      )}
    </div>
  );
};

export default Form;
