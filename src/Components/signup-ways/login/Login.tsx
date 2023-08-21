import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase_setup/firebase";
import { Link, useNavigate } from "react-router-dom";
import { TextFieldFunction } from "../../../stories/molecules/textfield/Textfield";
import { ZButton } from "../../../stories/molecules/button/Button";
import { ZSnackbar } from "../../../stories/molecules/snackbar/Snackbar";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [snackbar, setSnackbar] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("...");
  const [snackbarSeverityText, setSnackbarSeverityText] = useState("...");

  const onLogin = (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setSnackbarMsg(`Login Succssfully`);
        setSnackbarSeverityText("success");
        setSnackbar(true);
        const user = userCredential.user;
        navigate("/dashboard");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setSnackbar(true);
        setSnackbarMsg(`${errorMessage}`);
        setSnackbarSeverityText("error");
      });
  };

  const onSnackbarclosed = (event: any) => {
    setSnackbar(false);
  };

  return (
    <>
      <main>
        <div className="signup-container">
          <div className="form-background">
            <h1> Sign In </h1>
            <TextFieldFunction
              textLabel="Email"
              isRequired
              textVariant="outlined"
              size="small"
              width="60%"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextFieldFunction
              textLabel="Password"
              isRequired
              textVariant="outlined"
              size="small"
              width="60%"
              onChange={(e) => setPassword(e.target.value)}
            />
            <ZButton
              textLabel="Sign In"
              width="60%"
              variant="contained"
              onClick={onLogin}
            />
            <div>
              No account yet? <Link to="/login">Sign up</Link>
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
    </>
  );
};

export default Login;
