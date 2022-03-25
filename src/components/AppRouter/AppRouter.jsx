import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {PrivateRoutes, PublicRoutes} from "../../router/routes"

const AppRouter = () => {
    const isAuth = false
    return (
        isAuth
            ? <Routes>
                {PrivateRoutes.map(route =>
                    <Route path={route.path} element={route.component}/>
                )}
                <Route path='*' element={<Navigate to="/posts"/>}/>
            </Routes>
            : <Routes>
                {PublicRoutes.map(route =>
                    <Route path={route.path} element={route.component}/>
                )}
                <Route path='*' element={<Navigate to="/login"/>}/>
            </Routes>
    );
};

export default AppRouter;