import React, { useState } from "react";
import FormInput from "./shared/FormInput";
import { useNavigate } from "react-router-dom";
const inputs = [
  {
    id: 1,
    name: "email",
    type: "email",
    placeholder: "Email address",
    pattern:
      ' /^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/',
    errorMessage: "The email should be valid",
  },
  {
    id: 2,
    name: "password",
    type: "password",
    placeholder: "Password",
    pattern: "charroufe0123",
    errorMessage: "Invalid password",
  },
];
export default function LoginForm() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    setValues({ email: "", password: "" });
    navigate("/dashboard");
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className=" w-full bg-white px-10 pb-10 pt-6 rounded-lg shadow-2xl"
      >
        <h1 className="text-4xl text-center font-bold mb-10">Welcome back</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div className="flex justify-between items-center mb-6">
          <div className="form-control mt-3">
            <label className="label cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-sm checkbox-secondary mr-2"
              />
              <span className="label-text">Remember me</span>
            </label>
          </div>
          <a
            href="#!"
            className=" text-sm  hover:text-secondary  duration-200 transition ease-in-out mt-3"
          >
            Forgot password?
          </a>
        </div>

        <button type="submit" className=" btn btn-primary block w-full">
          Sign in
        </button>

        <div className="divider">OR</div>

        <a
          className="btn  w-full bg-blue-500 border-none hover:bg-blue-800"
          href="#!"
          role="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="w-3.5 h-3.5 mr-2"
          >
            <path
              fill="currentColor"
              d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
            />
          </svg>
          Continue with Facebook
        </a>
      </form>
    </div>
  );
}
