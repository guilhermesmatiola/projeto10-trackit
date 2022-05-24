import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./TopBar";
import MovieSelect from "./MovieSelect";
import TimeSelect from "./TimeSelect";
import ChairSelect from "./ChairSelect.js";
import SessionSelect from "./TimeSelect";
import Success from "./Success";

export default function App(){
    return(
        <BrowserRouter>
            <TopBar/>
            <Routes>
                <Route path="/" element={<MovieSelect/>} />
                <Route path="/sessoes/:id" element={<TimeSelect/>} />
                <Route path="/assentos/:idSessao" element={<ChairSelect/>} />
                <Route path="/sucesso" element={<Success/>} />
            </Routes>
        </BrowserRouter>

    );
}