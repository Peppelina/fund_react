import React from 'react';
import classes from './MyButton.module.css'

const MyButton = ({children, ...props}) => {

    const rootClass = [classes.MyBtn]
       if (props.active) {
           rootClass.push(classes.MyBtnCurrent)
       }

    return (
        <button {...props} className={rootClass.join(' ')}>
            {children}
        </button>
    );
};

export default MyButton;