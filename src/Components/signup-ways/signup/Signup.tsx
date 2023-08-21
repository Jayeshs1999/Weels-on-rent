import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase_setup/firebase";
import { TextFieldFunction } from "../../../stories/molecules/textfield/Textfield";
import "./signup.css";
import { ZButton } from "../../../stories/molecules/button/Button";
import { ZSnackbar } from "../../../stories/molecules/snackbar/Snackbar";

interface LoginInterface {
  onSignup?: (event: any) => void;
}

const Signup = ({ onSignup }: LoginInterface) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [snackbar, setSnackbar] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("...");
  const [snackbarSeverityText, setSnackbarSeverityText] = useState("...");

  useEffect(() => {
    if (email != "" && password != "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password]);

  const onSubmit = async (e: any) => {
    console.log("click");
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSnackbarMsg("Sign up successfully");
        setSnackbarSeverityText("success");
        setSnackbar(true);
        // Signed in
        const user = userCredential.user;
        console.log(user);
        onSignup && onSignup(e);
        setEmail("");
        setPassword("");
        // navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setSnackbarMsg(`${errorMessage}`);
        setSnackbarSeverityText("error");
        setSnackbar(true);
        // ..
      });
  };

  const onSnackbarclosed = (event: any) => {
    setSnackbar(false);
  };

  return (
    <main>
      <div className="signup-container">
        <div className="form-background">
          <h1> Sign Up </h1>
          <TextFieldFunction
            textLabel="Email"
            isRequired
            textVariant="outlined"
            size="small"
            width="60%"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextFieldFunction
            textLabel="Password"
            isRequired
            textVariant="outlined"
            size="small"
            width="60%"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ZButton
            textLabel="Sign Up"
            isDisabled={isDisabled}
            width="60%"
            variant="contained"
            onClick={onSubmit}
          />
          <div>
            Already have an account? <Link to="/login">Sign in</Link>
          </div>
        </div>
      </div>
      {snackbar && (
        <ZSnackbar
          snackbarMsg={snackbarMsg}
          severity={
            snackbarSeverityText === "success"
              ? "success"
              : snackbarSeverityText === "warning"
              ? "warning"
              : snackbarSeverityText === "info"
              ? "info"
              : "error"
          }
          onClose={onSnackbarclosed}
        />
      )}
    </main>
  );
};

export default Signup;
