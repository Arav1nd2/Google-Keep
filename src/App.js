import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand, Nav, NavLink, NavItem} from  'reactstrap';
import MainPage from "./components/mainPage";
import LoginPage from './components/login';
import Notifications from 'react-notify-toast';
import { connect } from 'react-redux';
import {checkUser, signOut} from './actions/actionCreaters';


class App extends Component {
  constructor(props) {
    super(props); 
    this.state ={ 
      loginState : true
    };

    this.loginToggle = () => {
        this.setState({
        loginState : !this.state.loginState
      })
    }
  }

  componentWillMount() {
      this.props.checkUser();
      
   }

  render() {
    return (
     <div>
        <Notifications />
        <Navbar color="warning" light expand = "md">
          <NavbarBrand><b>Google Keep</b></NavbarBrand>
            <Nav className="ml-auto" navbar>
            <NavItem onClick = {this.loginToggle}>
                {this.props.user ?  <NavLink onClick = {this.props.signOut}>Logout </NavLink>: ""}
            </NavItem>
            </Nav>
        </Navbar>
        <main>
          <div className = "Container">
            { this.props.user ? <MainPage /> : <LoginPage />}
          </div>
        </main>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user  : state.user
})

export default connect(mapStateToProps,{ checkUser,signOut } )(App);