import React from 'react'
import { TextField } from '../../atoms/TextField/TextField'
import { Button } from '../../molecules/Button/Button'
import { InputField } from '../../molecules/InputField/InputField'
import PhraseLink from '../../molecules/PhraseLink/PhraseLink' 
import Link from '../../atoms/Links/Link'
import "./Card.scss"

// let tag  = ['paragraphText' , 'headingText', 'standardText' ];
// let variant = [ 'niv1' , 'niv2', 'niv3' , 'niv4' , 'niv5', 'niv6'];
// let sizeElement = ['simple' , 'medium' , 'large' , 'extraLarge'];
export const Card = () => {
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
                    <Link>Forgot your password? </Link>
                </div>
                <PhraseLink text="Don't have an account?" linkText="Sign Up" />
            </div>

            <Button label="Log In" />
        </div>

 
    </div>
  )
}


// Card.propTypes = {
//     /**
//      * Is this the principal call to action on the page?
//      */
//     primary: PropTypes.bool,
//     /**
//      * What background color to use
//      */
//     // backgroundColor: PropTypes.string,
//     /**
//      * How large should the button be?
//      */
//     // size: PropTypes.oneOf(["small", "medium", "large"]),
//     /**
//      * Button contents
//      */
//     // label: PropTypes.string.isRequired,
//     /**
//      * Optional click handler
//      */
//     onClick: PropTypes.func,
//     // isLoading: PropTypes.bool
//   };
  
//   Card.defaultProps = {
//     // backgroundColor: undefined,
//     // primary: false,
//     // size: "medium",
//     // onClick: undefined,
//     // isLoading: false
//   };
  