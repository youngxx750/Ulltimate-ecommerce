import React from 'react';
import { Switch, Route, } from 'react-router-dom';


import HomePage from './components/homepage/homepage.component';
import ShopPage from './components/shop/shop.component';
import SignInAndRegister from './components/sign-in-and-register/sign-in-and-register.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';
import './components/homepage/component.style.scss';

class App extends React.Component{
   constructor() {
     super();


    this.state = {
      currentUser: null
     }
   }


   unsbscribeFromAuth = null;

   componentDidMount () {
     this.unsbscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
       if (userAuth){
         const userRef = await createUserProfileDocument(userAuth);

         userRef.onSnapshot(snapShot => {
           this.setState({
             currentUser: {

              id: snapShot.id,
              ...snapShot.data()

             }
           });


             console.log(this.state);
           });
         }
       this.setState({currentUser: userAuth});
     });
   }

   componentWillUnmount() {
     this.unsbscribeFromAuth();
   }

  render(){
  return (
    <>
     <div className="container">
     <Header currentUser={this.state.currentUser} />
       <Switch>
         <Route exact path="/" component={HomePage} />
         <Route path="/shop" component={ShopPage} />
         <Route path="/signin" component={SignInAndRegister} />
       </Switch>
     </div>
       <Footer />
    </>
  );
  }
}

export default App;
