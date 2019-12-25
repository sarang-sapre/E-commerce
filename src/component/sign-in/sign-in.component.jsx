import React from 'react';
import './sign-in.styles.scss';
import FormInput from './../form-input/form-input.component';
import Button from './../button/button.component';
import {signInWithGoogle} from './../../firebase/firebase.utiles';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            Password:''

        }
    };

handelSubmit = event =>{
    event.preventDefault();

    this.setState({email:'',Password:''})
}

handelChange = event =>{
    const {name, value} = event.target;
    this.setState({[name]:value})
}

    render(){
        return(

            <div className='sign-in'>
                <h1>I Already Have An Account</h1>
                <span>Sign in with your email and password</span>
            
            <form onSubmit={this.handelSubmit}>

                <FormInput 
                type="email" 
                name="email"
                value={this.state.email} 
                handleChange={this.handelChange}
                label="email" 
                required
                 />
                 <FormInput 
                type="Password" 
                name="Password"
                 value={this.state.Password} 
                 handleChange={this.handelChange}
                 label="password"
                 required
                 />
                  <div className='buttons'>
                 <Button type="submit"> SIGN IN
                 </Button>
                 
                 <Button isGoogleButton onClick={signInWithGoogle}> SIGN IN WITH GOOGLE
                 </Button>
                 </div>
            </form>
            </div>
        )
    }
}

export default SignIn;