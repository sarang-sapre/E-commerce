import React from 'react';
import {Route,Link,Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage-component'
import ShopPage from '../src/pages/shoppage/shoppage-component';
import './App.css'
import Header from './component/header/header-componenet';
import SigninAndSignupPage from './pages/sign-in-sign-up/sign-in-up.component';
import {auth} from '../src/firebase/firebase.utiles';



class App extends React.Component{
constructor(){
super();
this.state={
  CurrentUser:null
}
}

unsubscribauth = null;

componentDidMount(){
 this.unsubscribauth = auth.onAuthStateChanged(user => {
    this.setState({CurrentUser : user})
    console.log(user)
  })

  
}

componentWillUnmount(){
  this.unsubscribauth()
}

render(){
  return (
    <div className='body'>
      <Header currentuser={this.state.CurrentUser}/>
      <Switch>
  <Route exact path='/' component={HomePage}/>
  <Route exact path='/shop' component={ShopPage}/>
  <Route exact path='/signin' component={SigninAndSignupPage}/>
  </Switch>
    </div>
  );
}
}
export default App;
