import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignUp = () => {
    setIsSignIn(!isSignIn);
  };

  console.log(email)
  const handleClick = () => {
    const message = checkValidate(email.current.value, password.current.value);

    setErrorMessage(message);

    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          dispatch(removeUser());
          toggleSignUp();
          navigate("/");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          dispatch(
            addUser({
              email: user.email,
              uid: user.uid,
            })
          );
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute flex">
        <img
          className="h-screen object-cover md:w-screen md:object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="backgrd"
        />
        <div className="absolute px-8 py-2 bg-gradient-to-t from-black w-full h-full"></div>
      </div>

      {isSignIn ? (
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute w-[375px] md:w-[400px] sm:w-[400px] p-12 my-36 mx-auto sm:mx-[20%] md:mx-auto right-0 left-0 bg-black bg-opacity-80 text-white"
        >
          <h1 className="font-bold text-3xl py-4 ">Sign In</h1>
          <p className="text-red-500">{errorMessage}</p>
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-3 my-2 w-full bg-black border border-slate-600 rounded-md"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 my-2 w-full bg-black border border-slate-600 rounded-md"
          />
          <button
            onClick={handleClick}
            className="py-2 my-2 bg-red-700 w-full border rounded-md border-red-700"
          >
            Sign In
          </button>
          <p className="py-2 my-2 cursor-pointer" onClick={toggleSignUp}>
            New to Netflix? Sign up now.
          </p>
        </form>
      ) : (
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute w-9/12 py-14 my-10 md:p-12 md:my-28 mx-auto right-0 left-0 text-white"
        >
          <h1 className="font-bold text-3xl md:text-5xl md:py-4 text-center">
            Unlimited movies, TV shows and more
          </h1>
          <h2 className="text-xl md:text-2xl py-4 text-center">
            Watch anywhere. Cancel anytime.
          </h2>
          <h2 className="text-xl md:text-2xl py-4 text-center">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h2>
          <span className="grid w-6/12 mx-auto right-0 left-0 justify-center">
            <input
              ref={email}
              type="text"
              placeholder="Email Address"
              className="p-4 m-2 md:w-full bg-black border border-slate-600 rounded-md"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="p-3 m-2 md:w-full bg-black border border-slate-600 rounded-md"
            />
            <button
              onClick={handleClick}
              className="py-2 px-5 mx-10 my-3 w-[60%] md:w-8/12 md:font-bold md:text-xl bg-red-700 border rounded-md border-red-700"
            >
              Get Started {">"}
            </button>
            <p className="py-2 my-2 px-4 md:px-0 cursor-pointer" onClick={toggleSignUp}>
              Already a User? Click here to Sign In.
            </p>
          </span>
          <p className="text-red-500 text-center">{errorMessage}</p>
        </form>
      )}
    </div>
  );
};

export default Login;
