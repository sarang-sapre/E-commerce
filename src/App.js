import React from 'react';
import {Route,Link,Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage-component'
import ShopPage from '../src/pages/shoppage/shoppage-component';
import './App.css'
import Header from './component/header/header-componenet';




function App() {
  return (
    <div className='body'>
      <Header />
      <switch>
  <Route exact path='/' component={HomePage}/>
  <Route exact path='/shop' component={ShopPage}/>
  </switch>
    </div>
  );
}

export default App;
