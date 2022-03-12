import "./App.css";
import { authentication } from "./appFirebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function App() {
  const signInWithGmail = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        console.log(re);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <button onClick={signInWithGmail}>Sign in with google</button>
    </div>
  );
}

export default App;
