import React from "react";
import styled from 'styled-components';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { useEffect,useContext , useState } from 'react';
import UserContext from "../context/UserContext";
import Header from "./Header.js";
import Footer from "./Footer";

export default function HabitsPage(){
    const { user } = useContext(UserContext);
   
    const {id,name,image,email,token} = user;

    const navigate = useNavigate();

    return(
        <>
        <Header/>
        <Container>
            
        </Container>    
        <Footer/>
        </>

    )
}

const Container=styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 68px;
    
    font-family: 'Lexend Deca', sans-serif;
    img{
        width: 180px;
        height: 178px;
        margin-bottom: 35px;
    }
    a{
        margin-top: 25px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
    }
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-right: 36px;
    margin-left: 36px;
    
    input {
        height: 45px;
        margin-right: 36px;
        margin-left: 36px;
        min-width:  100px;
        margin-bottom: 6px;
        border-radius: 5px;
        border: 1px solid #D4D4D4; 
        padding-left:11px ;
    }
    input::placeholder {
        color: grey;
        font-size: 20px;
        font-style: italic;
    }
    button {
        min-width: 100px;
        height: 45px;
        margin-right: 36px;
        margin-left: 36px;
        text-align: center;
        background-color: #52B6FF;
        color: #FFFFFF;
        font-size: 21px;
        border: none;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        a{
            text-decoration: none;
        }
    }
`