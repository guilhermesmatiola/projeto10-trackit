import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginScreen";
import CadastreScreen from "./CadastreScreen"

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen/>} />
                <Route path="/cadastro" element={<CadastreScreen/>} />

                {/* <Route path="/sessoes/:id" element={<TimeSelect/>} />
                <Route path="/assentos/:idSessao" element={<ChairSelect/>} />
                <Route path="/sucesso" element={<Success/>} /> */}
            </Routes>
        </BrowserRouter>

    );
}