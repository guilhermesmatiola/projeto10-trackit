import React from "react";
import styled from 'styled-components';
import { useContext} from 'react';
import UserContext from "../context/UserContext";

export default function Header(){
    const { user } = useContext(UserContext);
   
    const {image,token} = user;

    return(
        <Container>
            <h1>TrackIt</h1>
            <img src={image} alt="logo"/>
        </Container>
    )
}

const Container=styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;
    background-color:#126BA5 ;
    justify-content: space-between;
    position:fixed;
    top:0;
    right:0;
    h1{
        margin:18px; 
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: #FFFFFF;
    }
    img{
        margin:18px;
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }
`