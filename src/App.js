import React from 'react';
import { Login } from './components/loginComponent/Login';
import { User } from './components/userComponent/User';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Route exact path="/" component={LoginView} />
          <Route exact path="/user" component={UserView} />
        </div>
      </div>
    </Router>
  );
}

const LoginView = () => (
  <div>
    <Login />
  </div>
);

const UserView = () => (
  <div>
    <User />
  </div>
);

export default App;
