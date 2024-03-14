import { useState } from "react";
import logo from './logo.jpg';
import './Login.css';

/*This will hold the logic for the login button*/

//URL to redirect user to the implicit grant flow.
const URL = `https://accounts.spotify.com/authorize?response_type=token&client_id=16d8561ba8ab44fb92e4f65f28009b25&redirect_uri=http://localhost:3000`;

function Login() {

  /*This component has only one state.
    -access token.*/
  let [token, setToken] = useState(() => {
    const checkToken = window.sessionStorage.getItem("token");

    if (checkToken === ``) {
      return ``;
    }
  });


  //This event handler is in charge of logging in the user and then displaying the appropriate screen.
  const handleClick = () => {
    token = window.sessionStorage.getItem("token");

    if (!token) {
      window.location.assign(URL);

      setToken(() => {
        let getToken = window.location.href.match(/#access_token=([^&]*)/);
        let access_token = getToken[1];
        token = access_token.replace(`#access_token=`, ``);
        window.sessionStorage.setItem("token", token);
      })

    } else {
      console.log(token);
    }
  }

  return (
    <div id="login">
      <h2 id="login-title"> Ja<span id="logo-title-span">mm</span>ing</h2>
      <img src={logo} id="logo" alt="spotify logo" />
      <button
        type='button'
        id='login-btn'
        onClick={handleClick}
      >
        Login
        </button>
    </div>
  );
};

export default Login;