import React, { useState } from "react";
import "../signup-ways/SignupWays.css";
import Login from "./login/Login";
import Signup from "./signup/Signup";
import { ZButton } from "../../stories/molecules/button/Button";

const SignupWays = () => {
  const handleSignupData = (e: any) => {
    setCurrentComponent(<Login />);
  };
  const [currentComponent, setCurrentComponent] = useState<JSX.Element>(
    <Signup onSignup={handleSignupData} />
  );

  const getWayChangeEvent = (event: string) => {
    console.log("event");
    switch (event) {
      case "login-screen":
        setCurrentComponent(<Login />);
        break;
      case "signup-screen":
        setCurrentComponent(<Signup onSignup={handleSignupData} />);
        break;
      default:
        setCurrentComponent(<Signup onSignup={handleSignupData} />);
        break;
    }
  };

  return (
    <div className="signupways-container">
      <div className="left-side">
        <div className="left-part-button-align">
          <ZButton
            textLabel="Login"
            variant="contained"
            width="60%"
            onClick={(e) => getWayChangeEvent("login-screen")}
          />
          <ZButton
            textLabel="Sign Up"
            variant="contained"
            width="60%"
            onClick={(e) => getWayChangeEvent("signup-scree")}
          />
        </div>
      </div>
      <div className="right-side">{currentComponent}</div>
    </div>
  );
};

export default SignupWays;
