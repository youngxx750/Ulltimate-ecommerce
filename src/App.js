import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';


import HomePage from './components/homepage/homepage.component';
import ShopPage from './components/shop/shop.component';
import SignInAndRegister from './components/sign-in-and-register/sign-in-and-register.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';

import './App.css';
import './components/homepage/component.style.scss';
import SignInAndRegisterPage from './components/sign-in-and-register/sign-in-and-register.component';

class App extends React.Component{

   unsbscribeFromAuth = null;

   componentDidMount () {
     const {setCurrentUser} = this.props
     this.unsbscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
       if (userAuth){
         const userRef = await createUserProfileDocument(userAuth);

         userRef.onSnapshot(snapShot => {
           setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
              });
           });
         }
       setCurrentUser(userAuth);
     });
    }


   componentWillUnmount() {
     this.unsbscribeFromAuth();
   }

  render(){
  return (
    <>
     <div className="container">
     <Header />
       <Switch>
         <Route exact path="/" component={HomePage} />
         <Route path="/shop" component={ShopPage} />
         <Route exact path="/signin" render={() => 
             this.props.currentUser ? (
            <Redirect to='/' />
             ) : ( <SignInAndRegisterPage />
             )
         }/>
       </Switch>
     </div>
       <Footer />
    </>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchFromProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
   mapStateToProps,
   mapDispatchFromProps)(App);
