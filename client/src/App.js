import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import index from './components/Login/index'


const App = () =>
  <Router>
    <div>
        <Route exact path="/" component={index} />
    </div>
  </Router>;



export default App;
