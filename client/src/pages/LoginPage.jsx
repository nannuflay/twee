import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(!hover);
  };
  return (
    <div>
      <section className="h-screen w-full relative">
        <div className="  absolute top-0 bottom-0 right-0 left-0 -z-10">
          <img src="login-bg.jpg" alt="" className=" brightness-50" />
        </div>
        <div className=" px-6 py-12 h-full z-10">
          <Link to="/">
            <button
              className="btn btn-ghost text-white tooltip capitalize"
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
              data-tip="Go home"
            >
              {hover ? (
                <Icon icon="codicon:home" className="w-8 h-8" />
              ) : (
                <Icon
                  icon="material-symbols:keyboard-backspace-rounded"
                  className="w-8 h-8"
                />
              )}
            </button>
          </Link>
          <div className="flex  items-center justify-center flex-wrap h-full g-6 text-gray-800">
            <div className="md:w-8/12  max-w-md w-full">
              <LoginForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
