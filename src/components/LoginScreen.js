import React from "react";
import styled from 'styled-components';
import axios from 'axios';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useContext, useState } from 'react';
import logo from '../assets/images/trackitlogo.png'
import UserContext from "../context/UserContext";

export default function LoginScreen(){
    
    const [email, setEmail]=useState("");
    const [password,setPassword]=useState("");

    const navigate = useNavigate();

    const { user, setUser } = useContext(UserContext);

    function Login(event){
        event.preventDefault();

        const postLogin={
            email,
            password
        }

        const promise=axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",postLogin);

        promise.then(resposta => {
            setEmail("");
            setPassword("");
            
            console.log(resposta.data);
            setUser(
                {
                    id: resposta.data.id,
                    name: resposta.data.name,
                    image: resposta.data.image,
                    email: resposta.data.email,
                    token: resposta.data.token
                },
            );
            navigate("/habitos");
        });
    }
    
    return(

        <Container>
            <img src={logo} alt="logo"/>
            <Form onSubmit={Login}>
                <input type="email" id="email" value={email} placeholder="email" required onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" id="password" value={password} placeholder="senha" required onChange={(e)=>setPassword(e.target.value)} />
                <button type="submit" >Entrar</button>
            </Form>
            <Link to='/cadastro'>Não tem uma conta? Cadastre-se</Link>
        </Container>

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
        min-width: 303px;
        margin-bottom: 6px;
        border-radius: 5px;
        border: 1px solid #D4D4D4; 
        padding-left:11px ;
        box-sizing: border-box;
    }
    input::placeholder {
        color: grey;
        font-size: 20px;
        font-style: italic;
        box-sizing: border-box;
    }
    button {
        min-width: 303px;
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
