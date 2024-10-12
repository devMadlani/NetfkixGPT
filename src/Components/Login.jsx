import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { checkEmail, checkName, checkPassWord } from "../utils/Validate";
import { auth } from "../utils/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const [isSignForm, setIsSignForm] = useState(true);
  const [errors, setErrors] = useState({
    email: null,
    password: null,
    name: null,
    submit:null
  });
  const email = useRef(null);
  const password = useRef(null);
  const cName = useRef(null);
  const toggelForm = () => {
    setIsSignForm(!isSignForm);
  };
  const handleValidation = () => {
    const newErrors = {
      email: checkEmail(email.current.value),
      password: checkPassWord(password.current.value),
      name: !isSignForm ? checkName(cName.current.value) : null,
    };
    setErrors(newErrors);
    return !newErrors.email && !newErrors.password && !newErrors.name;
  };
  const handleButtonClick = async (e) => {
    e.preventDefault();

    if (!handleValidation()) return; // Stop if any validation fails

    try {
      if (isSignForm) {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        console.log("Signed in:", userCredential.user);
      } else {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        console.log("Signed up:", userCredential.user);
      }
    } catch (error) {
      console.error(error.code);
      if (error.code == "auth/invalid-credential")
        setErrors({ ...error, submit: "invalid email and password"});
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg"
          alt=""
        />
      </div>
      <form
        action=""
        className=" absolute max-w-[450px] py-12 px-16 bg-[rgba(0,0,0,0.8)] my-32 mx-auto right-0 left-0"
      >
        <h1 className="text-[rgb(255,255,255)] text-[2rem] font-bold mb-7 ">
          {isSignForm ? "Sign In" : "Sign Up"}
        </h1>
        <div className="flex flex-col gap-4">
          {errors.submit && <h1 className="text-red-600 -my-3">{errors.submit}</h1>}
          {!isSignForm && (
            <>
              {errors.name && (
                <h1 className="text-red-600 -mb-3">{errors.name}</h1>
              )}
              <input
                ref={cName}
                type="text"
                placeholder="Name"
                className="p-4 bg-[rgba(0,0,0,0.5)] w-full border border-[#aba9a9] rounded text-base font-normal text-white"
              />
            </>
          )}
          {errors.email && (
            <h1 className="text-red-600 -my-3">{errors.email}</h1>
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 bg-[rgba(0,0,0,0.5)] w-full border border-[#aba9a9] rounded text-base font-normal text-white"
          />
          {errors.password && (
            <h1 className="text-red-600   -my-3">{errors.password}</h1>
          )}
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 bg-[rgba(0,0,0,0.5)] w-full border border-[#aba9a9] rounded text-base font-normal text-white"
          />
          <button
            className="p-2 rounded w-full text-white bg-[rgb(229,9,20)]"
            onClick={handleButtonClick}
          >
            {isSignForm ? "Sign In" : "Sign Up"}
          </button>
          {isSignForm && (
            <>
              <h1 className="text-[rgba(255,255,255,0.7)] text-center">OR</h1>
              <button className="p-2 rounded w-full text-white bg-[rgba(128,128,128,0.4)] hover:bg-[rgba(87,83,83,0.4)]">
                Use a sign-in code
              </button>
              <Link className="text-white text-center">Forgot password?</Link>
              <div className="flex gap-3 mt-2">
                <input
                  type="checkbox"
                  className="w-4 h-4  text-white bg-transparent my-auto"
                />
                <label className="text-[white]">Remeber Me</label>
              </div>
            </>
          )}
          <h1 className="text-[rgba(255,255,255,0.7)]">
            {isSignForm ? "New to Netflix?" : "Already a customer"}{" "}
            <button
              type="button"
              className="text-white font-medium"
              onClick={toggelForm}
            >
              {isSignForm ? "Sign Up" : "Sign In"} now.
            </button>
          </h1>
          <h1 className="mt-3 text-[rgba(255,255,255,0.7)]">
            This page is protected by Google reCAPTCHA to ensure you are not a
            bot. <Link className="text-[#0071eb]"> Learn More</Link>
          </h1>
        </div>
      </form>
    </div>
  );
}

export default Login;
