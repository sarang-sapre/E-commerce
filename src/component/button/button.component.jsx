import React from 'react';
import './button.styles.scss';

const Button = ({children , isGoogleButton,...otherProps}) =>(


        <button className={`${isGoogleButton ? 'gooogle-sign-in': ''}  custom-button`} {...otherProps}>
         {children}
        </button>

)


export default Button;