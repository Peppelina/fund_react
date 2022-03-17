import React from 'react';
import loading from '../../../images/loading.gif'

const Loader = () => {
    return (
        <div>
            {/*<h1>Загрузка..</h1>*/}
            <img src={loading}/>
        </div>
    );
};

export default Loader;