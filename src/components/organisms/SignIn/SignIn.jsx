import React from 'react';
import { TextField } from '../../atoms/TextField/TextField';
import { Button } from '../../molecules/Button/Button';
import { InputField } from '../../molecules/InputField/InputField';
import SignUpPage from '../../../pages/SignUpPage';
import PhraseLink from '../../molecules/PhraseLink/PhraseLink' ;
import Link from '../../atoms/Links/Link';
import "./SignIn.scss";

export const SignInCard = () => {
  return (
    <div className="card">
        <TextField tag="headingText" variant="niv1" text="Welcome Back !"/>
        <TextField tag="standardText" variant="niv1" text="Sign in or create a new account please. "/>
        <div>
            <InputField  
                label= 'Username'
                type= 'text'
                id= 'aze'
            />

            <InputField  
                label= 'Password'
                type= 'password'
                id= 'aze'
            />
            <div className="row">
                <div>
                    <Link>Forgot your password?</Link>
                </div>
            </div>

            <Button label="Log In" />
            <div className='row'>

                <PhraseLink text="Don't have an account?" linkText="Sign Up" to="/signup"/>
            </div>
        </div>

 
    </div>
  )
}

  