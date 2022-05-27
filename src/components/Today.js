import React from "react";
import styled from 'styled-components';
import axios from 'axios';
//import { Link, useNavigate } from "react-router-dom";
import { useEffect,useContext , useState } from 'react';
import UserContext from "../context/UserContext";
import Header from "./Header";
import Habit from "./Habit";
import Footer from "./Footer";

export default function Today(){
    const { user } = useContext(UserContext);
   
    const {image,token} = user;
    const [habits,setHabits]=useState([]);
    //const navigate = useNavigate();
    // navigate("/");

    useEffect(() => {
        const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
        };

        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`,config);

        promise.then(resposta => {
            console.log(resposta.data);
            setHabits(resposta.data);
        });

    }, []);
   
    return(
        <>
        <Header/>
        <Page>
        <Container> <h1>Hoje</h1> <Add>+</Add> </Container>
        </Page>
        <Footer/>
        </>
    )
}
const Page=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background: #E5E5E5;
`
const Container=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    margin-top: 20px;
    font-family: 'Lexend Deca', sans-serif;
    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
`
const Add=styled.div`
    width: 40px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #52B6FF;
    border-radius: 4.63636px;
    font-size: 25px;
    color: #ffffff;
    padding-bottom: 4px;
`