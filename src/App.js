import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from './pages/search';
import Footer from "./components/Footer";



const App = () =>
  <Router>
    <div>
        <Route exact path="/" component={Search} />
        <Footer />
    </div>
  </Router>;



export default App;
