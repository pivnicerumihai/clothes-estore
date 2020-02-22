import React from "react";
import "./signInSignUp.scss";
import SignIn from "../../components/signIn/signIn"
import SignUp from "../../components/signUp/signUp";

const SignInSignUp = () =>{
    return(
        <div className="signInSignUp">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInSignUp;