import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Posts from "./pages/Posts";
import About from "./pages/About";
import Navbar from "./components/UI/Navbar/Navbar";
import Error from "./pages/Error";
import AppRouter from "./components/AppRouter/AppRouter";

function App() {
    return (
    <div>
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>


    </div>
    )
}

export default App;
