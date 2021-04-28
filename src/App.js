import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.component';
import { auth } from './firebase/firebase.util';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop-page.component';
import SignInSignUp from './pages/Sign-in-and-sign-out/sign-in-and-sign-up.component';

class App extends React.Component{

  constructor(props) {
    super(props)
  
    this.state = {
       currentUser : null
    };
  }

  unsubscribeFromAuth = null;
 
 componentDidMount(){
   this.unsubscribeFromAuth=auth.onAuthStateChanged(user =>{
     this.setState({currentUser:user});
     console.log(user);
   })
 };

 componentWillUnmount(){

   this.unsubscribeFromAuth();

 }

  render(){
    
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/SignIn' component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;