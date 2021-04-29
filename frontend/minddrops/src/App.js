import logo from './logo.svg';
import './App.css';
import React from "react";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import routes from "./routes";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

// var firebaseConfig = {
//   apiKey: "AIzaSyB4Qaibwp_TvHO2qsjGPnaASAfWj-VAXPQ",
//   authDomain: "minddrops-9c7e2.firebaseapp.com",
//   projectId: "minddrops-9c7e2",
//   storageBucket: "minddrops-9c7e2.appspot.com",
//   messagingSenderId: "370552082892",
//   appId: "1:370552082892:web:85993046b5aa9e5df14d69",
//   measurementId: "G-FD43JVL9YW"
// };
// firebase.initializeApp(firebaseConfig);

// // Configure FirebaseUI.
// const uiConfig = {
//   // Popup signin flow rather than redirect flow.
//   signInFlow: 'popup',
//   // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
//   signInSuccessUrl: '/signedIn',
//   // We will display Google and Facebook as auth providers.
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//   ],
// };

// function SignInScreen() {
//   return (
//     <div>
//       <h1>My App</h1>
//       <p>Please sign-in:</p>
//       <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
//     </div>
//   );
// }

// export default SignInScreen

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {routes.map((route, idx) => (
            <Route path={route.path} component={route.component} key={idx} />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
