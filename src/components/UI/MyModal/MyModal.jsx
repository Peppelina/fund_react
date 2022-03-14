import React from 'react';
import classes from './MyModale.module.css'

const MyModal = ({children, visiable, setVisiable}) => {

    const rootClass = [classes.MyModal]

    if (visiable) {
        rootClass.push(classes.active)
    }
    return (
        <div className={rootClass.join(' ')} onClick={() => setVisiable(false)}>
            <div className={classes.MyModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;