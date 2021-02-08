import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBoACh5ugZSnZbTFU7QnoZlKQViaDaDivs",
  authDomain: "fbase-2021-test.firebaseapp.com",
  databaseURL: "https://fbase-2021-test-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fbase-2021-test",
  storageBucket: "fbase-2021-test.appspot.com",
  messagingSenderId: "45690471389",
  appId: "1:45690471389:web:4d6571b639acf7ff2aac34"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
