import React from "react";
import Button from "./../components/shared/Button";

export default function RegisterPage() {
  return (
    <div className=" w-full h-screen flex justify-center items-center bg-slate-100">
      <div className=" max-w-lg rounded-xl w-full bg-white  shadow-xl px-10">
        <div className=" -mt-10 flex justify-center text-2xl font-bold text-white rounded-xl shadow-xl py-7  mx-auto bg-primary">
          <span>Register</span>
        </div>
        <form className="py-10 space-y-7">
          <div>
            <input
              type="text"
              className=" input w-full input-bordered"
              placeholder="Fist Name"
            />
          </div>
          <div className="">
            <input
              type="text"
              className=" input w-full input-bordered"
              placeholder="Last Name"
            />
          </div>
          <div>
            <input
              type="text"
              className=" input w-full input-bordered"
              placeholder="E-mail address"
            />
          </div>
          <div className="">
            <input
              type="password"
              className=" input w-full input-bordered"
              placeholder="Password"
            />
          </div>
          <div className="">
            <input
              type="password"
              className=" input w-full input-bordered"
              placeholder="Confirm Password"
            />
          </div>
          <div className="pt-4">
            <Button
              text="Create account"
              customClass=" btn-secondary btn-block rounded-full"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
