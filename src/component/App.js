import "./App.css";
import { authentication } from "./appFirebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({});

  const signInWithGmail = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const signOutGmail = () => {
    signOut(authentication)
      .then(() => {
        const userclass = document.querySelector(".myclass");
        userclass.parentNode.removeChild(userclass);
        console.log("Signed out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <button onClick={signInWithGmail}>Sign in with google</button> <br />
      {user.email && (
        <div className="myclass">
          <h2>Welcome {user.displayName}</h2>
          <button onClick={signOutGmail}>Sign Out</button>
        </div>
      )}
    </div>
  );
}

export default App;
