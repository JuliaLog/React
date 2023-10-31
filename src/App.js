import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/Login/Login';
import { BrowserRouter } from 'react-router-dom';
import { withSuspense } from './hoc/withSuspense';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

// import ProfileContainer from './components/Profile/ProfileContainer';
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

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
                <Switch>
                    <Routes exact path='/' 
                    render = {() => <Redirect to={'/profile'} />} />  
                    <Routes path='/dialogs' 
                    render = { withSuspense (DialogsContainer) }/>  
                    <Routes path='/profile/:userId?' 
                        render = { withSuspense (ProfileContainer) }/>  
                    <Routes path='/users' 
                        render = { () => <UsersContainer />} />
                    <Route der = { () => <LoginPage />} />
                    <Routes path='*' 
                        render = { () => <div>404 NOT FOUND</div>} />
                </Switch>
              
            </div>
          </div>
      );
  }
  
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const SamuraiJSApp = (props) => {
    return <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Provider store = {store}>
            <AppContainer />
          </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;