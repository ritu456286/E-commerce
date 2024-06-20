import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import React from "react";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { auth, createUserProfileDocument, onSnapshot } from "./firebase/firebase.utils";

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if(userAuth){
        const userDocRef = await createUserProfileDocument(userAuth);
      
        onSnapshot(userDocRef, (snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        });
        
      }else{
        this.setState({currentUser: null});
      }

      // this.setState({currentUser: userAuth});

    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {

  
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/shop" element={<ShopPage />}></Route>
          <Route path="/signin" element={<SignInAndSignUp />}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
