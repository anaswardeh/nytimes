import React, { Component } from 'react'
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
// import Dashboard from './protected/Dashboard'
import { logout } from '../../helpers/auth'
import { firebaseAuth } from '../../config/constants'
import search from '../../pages/search';
import Footer from '../Footer/Footer'
import './Login.css'
import NoMatch from '../../pages/NoMatch'
import Saved from '../../pages/saved';




function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/' />}
    />
  )
}

export default class App extends Component {
  state = {
    authed: false,
    loading: true,
  }
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
  render() {
    return this.state.loading === true ? <h1>Loading</h1> : (
      <BrowserRouter>
        <div >
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <div className="navbar-header">
            <Link to="/" className="navbar-brand">NY Times Scrubber</Link>
              </div>
              <ul className="nav navbar-nav">
                <li
                className={window.location.pathname === "/" ? "active" : ""} 
                >
                {this.state.authed
                    ? <span>
                <Link to="/" className="nav-link">Home</Link>
                      </span>
                    : <span>
                      </span>}
                </li>
                <li
                      className={window.location.pathname === "/Saved" ? "active" : "" }                >

                {this.state.authed
                    ? <span>
                        <Link to="/saved" className="nav-link">Saved Articles</Link>
                    </span>
                    : <span>
                      </span>}
                </li>

                <li
                >
                  {this.state.authed
                    ? <button
                        style={{border: 'none', background: 'transparent'}}
                        onClick={() => {
                          logout()
                        }}
                        className="nav-link glyphicon glyphicon-log-out">Logout</button>
                    : <ul className="nav navbar-nav">
                        <li>
                        <Link to="/login" className="nav-link"> Login</Link>
                        </li>
                        <li>
                        <Link to="/register" className="nav-link"> Register</Link>
                        </li>
                      </ul>}
                </li>
              </ul>
            </div>
          </nav>
          <div className="container-fluid">
            <div className="row">
              <Switch>
                <PublicRoute authed={this.state.authed} path='/login' component={Login} />
                <PublicRoute authed={this.state.authed} path='/register' component={Register} />
                <PrivateRoute authed={this.state.authed} path='/saved' component={Saved} />
                <PrivateRoute authed={this.state.authed} path='/' component={search} />
                <Route render={() => <h3>No Match</h3>} />
                <Route component={NoMatch}/>                
              </Switch>
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
