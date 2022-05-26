import React from "react";
import { useState, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginScreen";
import CadastreScreen from "./CadastreScreen"
import Habits from "./Habits"
import UserContext from "../context/UserContext";


export default function App(){
    const [user, setUser] = useState({});
    return(
    <UserContext.Provider value={{user, setUser}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen/>} />
                <Route path="/cadastro" element={<CadastreScreen/>} />
                <Route path="/habitos" element={<Habits/>} />

                {/* <Route path="/sessoes/:id" element={<TimeSelect/>} />
                <Route path="/assentos/:idSessao" element={<ChairSelect/>} />
                <Route path="/sucesso" element={<Success/>} /> */}
            </Routes>
        </BrowserRouter>
    </UserContext.Provider>
    );
}