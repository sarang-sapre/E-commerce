import React from 'react';
import {Route,Link,Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage-component'

const Hats = () =>{
return(<div>
  <h1>HATS PAGE</h1>
  </div>
)
};


function App() {
  return (
    <div>
  <Route exact path='/' component={HomePage}/>
  <Route path='/shop/hats' component={Hats}/>
    </div>
  );
}

export default App;
