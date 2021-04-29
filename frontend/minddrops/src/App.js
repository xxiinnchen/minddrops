import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import "firebase/auth";
import routes from "./routes";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
  Collapse,
  Button,
} from "reactstrap";

var firebaseConfig = {
  apiKey: "AIzaSyB4Qaibwp_TvHO2qsjGPnaASAfWj-VAXPQ",
  authDomain: "minddrops-9c7e2.firebaseapp.com",
  projectId: "minddrops-9c7e2",
  storageBucket: "minddrops-9c7e2.appspot.com",
  messagingSenderId: "370552082892",
  appId: "1:370552082892:web:85993046b5aa9e5df14d69",
  measurementId: "G-FD43JVL9YW"
};
firebase.initializeApp(firebaseConfig);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
};

function SignInScreen() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
      <div className="text-center mt-3">
        <h1>MindDrops</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }
  return (
    <div className="text-center mt-3">
      <h1>My App</h1>
      <p>Welcome {firebase.auth().currentUser.displayName}({firebase.auth().currentUser.email})! You are now signed-in!</p>
      <Button className="btn btn-primary navbar-btn btn-rounded waves-effect waves-light"
      onClick={() => firebase.auth().signOut()}>
        Sign-out
      </Button>
    </div>
  );
}
export default SignInScreen


function SignedInComponent() {
  return (
    <section>
      <div>
      Hello! You are now signed in!  
      </div>
    </section>
  )
}

// function App() {
//   return (
//     <React.Fragment>
//       <Router>
//         <Switch>
//           {routes.map((route, idx) => (
//             <Route path={route.path} component={route.component} key={idx} />
//           ))}
//         </Switch>
//       </Router>
//     </React.Fragment>
//   );
// }

// export default App;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

