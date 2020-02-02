import React from "react";
import "./signUp.scss";

import FormInput from "../formInput/formInput";
import CustomButton from "../customButton/customButton";

import { auth , createUserProfileDocument, database} from "../../firebase/firebase.utils";

class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const {email, displayName, password,confirmPassword} =this.state;

        if(password !== confirmPassword){
            alert("Password don't match");
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

           await createUserProfileDocument( user, {displayName})
           this.setState({
               displayName: "",
               email: "",
               password: "",
               confirmPassword: ""
           })
        }
        catch(error){
            console.log(error);
        }

    }

    handleChange = e =>{
        const {name , value} = e.target;
        this.setState({[name]: value})
    }

    render(){
        const {email, displayName, password,confirmPassword} =this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={this.handleChange}
                    label="Display name"
                    required />
                    <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    label="E-mail"
                    required />
                    <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    label="Password"
                    required />
                    <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label="Confirm Password"
                    required />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }

}


export default SignUp;