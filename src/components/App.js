import {React,useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Header from "./Header";
import LoginScreen from "./LoginScreen";
import CadastreScreen from "./CadastreScreen";
import Habits from "./Habits"
import Today from "./Today";
import History from "./History";
import UserContext from "../context/UserContext";

export default function App(){
    const [user, setUser] = useState({});
    return(
        <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
            {/* <Header/> */}
            <Routes>
                <Route path="/" element={<LoginScreen/>} />
                <Route path="/cadastro" element={<CadastreScreen/>} />
                <Route path="/habitos" element={<Habits/>} />
                <Route path="/hoje" element={<Today/>} />
                <Route path="/historico" element={<History/>} />
            </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    );
}

