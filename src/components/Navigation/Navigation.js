import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Brand from "../../img/brand.png";
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../../firebase.config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const Navigation = () => {
  const [userInfo, setUserInfo] = useState({
    isSigned: false,
    name: "",
    email: "",
    photo: "",
  });
  const [newUser, setNewUser] = useState(false);
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        const { displayName, email, photoURL } = res.user;
        const isSignedIn = {
          isSigned: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUserInfo(isSignedIn);
        setNewUser(true);
      });
  };

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        const signUserOut = { isSigned: false, name: "", email: "", photo: "" };
        setUserInfo(signUserOut);
        setNewUser(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Navbar bg="" expand="lg">
      <Navbar.Brand href="#home">
        <img src={Brand} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto pr-3">
          <Nav.Link className="mr-5 button text-light" href="#doc">
            Documentation
          </Nav.Link>
          <Nav.Link href="#api" className="mr-5 button text-light">
            API
          </Nav.Link>
        </Nav>
        <Form inline>
          {newUser ? (
            <Button variant="outline-dark" className="mr-5 text-light">
              {userInfo.name}
            </Button>
          ) : (
            <Button
              variant="outline-dark"
              className="mr-5 text-light"
              onClick={handleGoogleSignIn}
            >
              Register
            </Button>
          )}

          {newUser ? (
            <Button
              variant="outline-dark"
              className="mr-5 text-light"
              onClick={handleSignOut}
            >
              Sign Out
            </Button>
          ) : (
            <Button
              variant="outline-dark"
              className="mr-5 text-light"
              onClick={handleGoogleSignIn}
            >
              Sign In
            </Button>
          )}
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
