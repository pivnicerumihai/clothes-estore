import React from "react";
import FormInput from "../formInput/formInput";
import CustomButton from "../customButton/customButton"
import "./signIn.scss";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }


    handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: "", password: "" })
        }
        catch (error) {
            console.log(error);
        }
        this.setState({ email: "", password: "" })
    }

    handleChange = e => {
        e.preventDefault();
        const { value, name } = e.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="email" required />
                    <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label="password" required />
                    <div className="buttons">
                        <CustomButton type="submit" > Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> {" "} Sign In With Google {" "}</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;