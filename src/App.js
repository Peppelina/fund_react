import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter/AppRouter";
import {AuthContext} from "./context";
import {useEffect, useState} from "react";

function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setLoading] = useState(true)


    useEffect( () => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
            }
        setLoading(false)
        }, [])

    return (
    <div>
        <AuthContext.Provider value={{
            isAuth: isAuth,
            setIsAuth: setIsAuth,
            isLoading: isLoading
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>



    </div>
    )
}

export default App;
