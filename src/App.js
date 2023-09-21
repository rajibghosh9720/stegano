import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import React from 'react'
import ImageCrypt from "./pages/ImageCrypt";
import ImageDecrypt from "./pages/ImageDecrypt";
import About from "./pages/About";

function App() {
  return (
    <Router>

      <nav className="navbar">
        <ul className="nav">
          <a href="/" className="BrandName">Stegano</a>
          <li>
            <Link to="/stegano/">Encode</Link>
          </li>
          <li>
            <Link to="/stegano/decode">Decode</Link>
          </li>
          <li>
            <Link to="/stegano/about">About</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/stegano/about">
          <About />
        </Route>
        <Route path="/stegano/decode">
          <ImageDecrypt />
        </Route>
        <Route path="/stegano/">
          <ImageCrypt />
        </Route>
        <Route path="/">
          <ImageCrypt />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
