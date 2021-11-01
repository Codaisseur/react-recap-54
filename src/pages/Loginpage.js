import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  // HTML
  // <form>
  // <label> + <input onChange>
  // <button>

  const onFormSubmit = async (event) => {
    event.preventDefault();
    console.log("hey im submittingggg", email, password);
    // time to do the login from here:
    try {
      const response = await axios.post("http://localhost:4000/auth/login", {
        email,
        password: password,
      });
      // setToken(response.data.token); // was saving it,
      // no longer here.
      props.saveToken(response.data.token);
      history.push("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onFormSubmit}>
        <div>
          <label>Email</label>
          <input type='email' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
