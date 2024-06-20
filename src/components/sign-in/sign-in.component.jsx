import React from "react";

import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { signInWithEmailAndPassword } from "firebase/auth";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    try{
      await signInWithEmailAndPassword(auth, email, password)
      this.setState({ email: "", password: "" });
    } catch(error){
      console.log(error);
    }
    
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign In with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label='Email'
            required
          />

          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label='Password'
            required
          />
         
          <div className="buttons">

            <CustomButton name="submit" type="submit" >Sign In</CustomButton>
            <CustomButton name="sign-in-with-google" onClick={signInWithGoogle} isGoogleSignIn>Sign in With Google</CustomButton>
          
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
