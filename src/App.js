import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/Homepage";
import LoginPage from "./pages/Loginpage";
import { useState } from "react";

const NavBar = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: 30 }}>
        <Link to='/'>Home</Link>
      </div>
      <div>
        <Link to='/login'>Login</Link>
      </div>
    </div>
  );
};

function App() {
  const [token, setToken] = useState(null);
  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route
          path='/login'
          render={() => <LoginPage saveToken={setToken} />}
        />
        <Route path='/' render={() => <HomePage token={token} />} />
      </Switch>
    </div>
  );
}

export default App;
