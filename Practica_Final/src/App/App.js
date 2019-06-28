import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

// Css
import './App.css';

const Home = React.lazy(() => import('./Home'));
const Login = React.lazy(() => import('./Login'));
const MyPlayList = React.lazy(() => import('./MyPlayList'));
const Albums = React.lazy(() => import('./Albums'));
const Album = React.lazy(() => import('./Album'));
const SongPlay = React.lazy(() => import('./SongPlay'));


class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Reactify</h1>

        <Router>
          <nav>
            <ul>
              <li><NavLink activeClassName="active" exact to="/">Inicio</NavLink></li>
              <li><NavLink activeClassName="active" exact to="/albums">Albums</NavLink></li>
              {this.props.name === "" ? (
                <li><NavLink activeClassName="active" to="/login">Login</NavLink></li>
              ) : (
                <li><NavLink activeClassName="active" to="/myplaylist">Mis canciones</NavLink></li>
              )}
            </ul>
          </nav>

          <React.Suspense fallback="<div>Loading...</div>">
            <Route path="/" exact component={Home}/>
            <Route path="/album/:id" component={Album}/>
            <Route path="/albums" exact component={Albums}/>
            <Route path="/song/:id" component={SongPlay}/>
            <Route path="/login" component={Login}/>
            <Route path="/myplaylist" component={MyPlayList}/>
          </React.Suspense>
        </Router>          
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.user.name
  }
}

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
