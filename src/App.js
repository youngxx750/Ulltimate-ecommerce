import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';


import HomePage from './components/homepage/homepage.component';
import ShopPage from './components/shop/shop.component';

import './App.css';
import './components/homepage/component.style.scss';

const JacketsPage = () => (
  <div>
       <h1>Awesome new Featured jackets</h1>
       <h3>Shop the hottest trends today</h3>
  </div>
);

const HatsPage = () => (
   <div>
     <h3> this is the hats page werer all of our hats that are currently availbialbe will be displayed</h3>
   </div>
);
function App() {
  return (
     <div>
       <Switch>
         <Route exact path="/" component={HomePage} />
         <Route path="/shop" component={ShopPage} />
       </Switch>
     </div>
  );
}

export default App;
