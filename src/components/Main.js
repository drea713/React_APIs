import React, { Component } from 'react';
import '../App.css';
import { Switch, Route, Link } from 'react-router-dom'
import Home from '../views/Home';
import About from '../views/About';
import Shop from '../views/Shop';
import Contact from '../views/Contact';
import Login from '../views/Login';
import Profile from '../views/Profile';
import Register from '../views/Register';
import BlogSingle from '../views/BlogSingle';


export default class Main extends Component {
    render() {
        return (
                <React.Fragment>
                    <header>
                        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                            <Link className="navbar-brand" to="/">Fakebook React</Link>
                            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="collapsibleNavId">
                                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/shop">Shop</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact">Contact</Link>
                                    </li>
                            </ul>
                            <ul className="navbar-nav ml-atuo">
                                    <li className="nav-item">
                                            <Link className="nav-link" to="/auth/profile">Profile</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/auth/login">Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/auth/register">Register</Link>
                                        </li>
                                    </ul>
                        </div>
                    </nav>
                </header>

                <main className="container">
                    <Switch>
                        <Route exact path='/' render={ () => <Home posts= { this.props.posts } /> } />
                        <Route exact path='/about' render={ () => <About /> } />
                        <Route exact path='/shop' render={ () => <Shop /> } />
                        <Route exact path='/conact' render={ () => <Contact /> } />
                        <Route exact path='/auth/login' render={ () => <Login /> } />
                        <Route exact path='/auth/register' render={ () => <Register /> } />
                        <Route exact path='/auth/profile' render={ () => <Profile /> } />
                        <Route exact path='/blog/:id' render={ ({ match }) => <BlogSingle posts= { this.props.posts } match={match} /> } />

                        

                        

                    </Switch>
                </main>
                <footer>
                
                </footer>
            </React.Fragment>
        )
    }
}
