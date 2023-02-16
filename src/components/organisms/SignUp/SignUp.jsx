import React from 'react'
import { TextField } from '../../atoms/TextField/TextField'
import { Button } from '../../molecules/Button/Button'
import { InputField } from '../../molecules/InputField/InputField'
import PhraseLink from '../../molecules/PhraseLink/PhraseLink' 
import "./SignUp.scss"

export const SignUpCard = () => {
  return (
    <div className="card">
        <TextField tag="headingText" variant="niv1" text="Create a new account."/>
        <TextField tag="standardText" variant="niv1" text="Please enter your informations to create a new account."/>
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

<InputField  
                label= 'Password'
                type= 'password'
                id= 'aze'
            />

            <Button label="Sign Up" />
            <div className='row'>

                <PhraseLink text="Already have an account?" linkText="Sign In" to="/signin" />
            </div>
        </div>

 
    </div>
  )
}