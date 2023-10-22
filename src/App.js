import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/Login/Login';
import { compose } from 'redux';

class App extends Component {
    componentDidMount () {
        this.props.initializeApp();
     }

  render( ) {
    if (!this.props.initialized) {
        return <Preloader />
    }
    
    return (
          <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar />
            <div className='app-wrapper-content'>
              <Routes path='/dialogs' 
                render = { () => <DialogsContainer />} />
              <Routes path='/profile/:userId?' 
                render = { () => <ProfileContainer/>} />
              <Routes path='/users' 
                render = { () => <UsersContainer />} />
              <Routes path='/login' 
                render = { () => <LoginPage />} />
            </div>
          </div>
      );
  }
  
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(withRouter, connect(mapStateToProps, {initializeApp})) (App);
