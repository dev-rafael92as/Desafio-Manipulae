import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

const CLIENT_ID = "bf5b25092f1346db97c550d941f17e04"
const REDIRECT_URI = "http://localhost:3000/redirect"
const SCOPES = "user-read-email playlist-read-private"

const AUTH_URL = `https://accounts.spotify.com/authorize`

const Home = (props) => {
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL
  } = process.env;


  
  const handleLogin = async () => {
    const uri = `${AUTH_URL}?response_type=code&client_id=${CLIENT_ID}&scopes=${encodeURIComponent(SCOPES)}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`

    const response = await fetch(uri, {
      mode: 'no-cors',
      headers: {
        "response-type": "application/json"
      }
    })

    console.log(response)
  };
  return (
    <div className="login">
      <Header />
      <button onClick={handleLogin}>Entrar no Dezzer</button>
    </div>
  );
};
export default connect()(Home);