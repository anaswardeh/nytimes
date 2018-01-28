import React from 'react';
import { BrowserRouter as Router, Route,   Switch} from "react-router-dom";
import index from './components/Login/index'

const App = () => 

<Router>
      <Switch>
        <Route path="/login"  component={index}/>
      </Switch>
</Router>;

export default App;
