import './App.css';
import firebase from "firebase";

const App = () => {
  const firebaseApp = firebase.apps[0];


const authenticate = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithRedirect(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
  
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;

      console.log(`token: ${token}
      credential: ${credential}
      user: ${user}`)
      // ...
    }).catch((error) => {

      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      console.log('ERROR')
    });
}
  return (
    <div className="App">
      <header className="Firebase test">
        
        <h1>
          Just a simple app for checking out Firebase
        </h1>
      </header>
      <button
      onClick={ authenticate }
      >
        Login
      </button>
      <code>
        <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
      </code>
    </div>
  );
}

export default App;
