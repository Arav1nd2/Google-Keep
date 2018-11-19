import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand, NavbarToggler, Nav, Collapse, NavItem, Container, card } from  'reactstrap';
import { BrowserRouter, Route ,Link } from 'react-router-dom';
import MainPage from "./components/mainPage";
import LoginPage from './components/login';
import Database from './firebase';
import firebase from 'firebase'; 


class App extends Component {
  constructor(props) {
    super(props); 
    this.state ={ 
      navBarToggle : false,
      loginState : false
    };
    this.toggle = () => {
      this.setState({
        navBarToggle : !this.state.navBarToggle
      });
    }
    this.loginToggle = () => {
        this.setState({
        loginState : !this.state.loginState
      }); 
    }
  }
  render() {
    return (
    <BrowserRouter>
     <div>
      <div>
        <Navbar color="warning" light expand = "md">
          <NavbarBrand><b>Google Keep</b></NavbarBrand>
          {this.state.loginState ? <NavbarToggler onClick ={this.toggle} /> : ""}
          <Collapse isOpen = {this.state.navBarToggle} navbar>
              <Nav className="ml-auto" navbar>
              <NavItem onClick = {this.loginToggle}>
                  {this.state.loginState ? <Link className = "nav-link" to = "/logout">Logout</Link> : ""}
              </NavItem>
              </Nav>
          </Collapse>
        </Navbar>
      </div>
      <main>
      <div className = "Container">
        <Route exact path = "/" component = {LoginPage} />
        <Route exact path = "/login" component = {MainPage} />
        <Route exact path = "/logout" component = {LoginPage} />        
      </div>
      </main>
      </div>
    </BrowserRouter> 
    );
  }
}

export default App;