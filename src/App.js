import './App.css';
import {useState} from "react";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div className="App">
        <Counter/>
        <Counter/>
        <Counter/>
    </div>
  );
}

export default App;
