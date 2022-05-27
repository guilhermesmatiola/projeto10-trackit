import styled from 'styled-components';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import {React, useContext, useState } from 'react';
import UserContext from "../context/UserContext";

export default function NewHabit({setAdd}){

    const { user } = useContext(UserContext);
    const {image,token} = user;
    const [habit, setHabit]=useState("");
    const [days,setDays]=useState([false,false,false,false,false,false,false]);
    const navigate = useNavigate();

    function submitData(event) {

        event.preventDefault();

        let postdays=[];
        for(let i=0;i<7;i++){
            if(days[i]){
                postdays.push(i);
                console.log("postdays "+ postdays);
            }
        }
       
        let postObject={
            name: habit,
            days: postdays
        };

        const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
        };

        const promise=axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",postObject,config);
    
        promise.then(resposta => {
            setHabit("");
            console.log(resposta.data);
            //close newhabit tab
            navigate("/habitos");
        });
    }

    const [backgrounds,setBackgrounds]=useState(["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"]);
    const [colors,setColors]=useState(["#CFCFCF","#CFCFCF","#CFCFCF","#CFCFCF","#CFCFCF","#CFCFCF","#CFCFCF"]);

    function selectDay(day){
        let newbackgrounds=[...backgrounds];
        let newcolors=[...colors];
        if(newbackgrounds[day]==="#ffffff"){
            newbackgrounds[day]="#CFCFCF";
            newcolors[day]="#ffffff";
        }else{
            newbackgrounds[day]="#ffffff";
            newcolors[day]="#CFCFCF";
        }
        console.log("newbackgrounds: "+newbackgrounds);
        setBackgrounds(newbackgrounds);
        setColors(newcolors);

        let newdays=[...days];
        newdays[day]=(!newdays[day]);
        setDays(newdays);
    }

    return(
        <Container>
            <input type="text" id="name" value={habit} placeholder="Nome do hábito" required onChange={(e)=>setHabit(e.target.value)} />
            
            <ContainerDays>
                <DayBox colors={colors[0]} backgrounds={backgrounds[0]}  onClick={() => selectDay(0)}>D</DayBox>
                <DayBox colors={colors[1]} backgrounds={backgrounds[1]}  onClick={() => selectDay(1)}>S</DayBox>
                <DayBox colors={colors[2]} backgrounds={backgrounds[2]}  onClick={() => selectDay(2)}>T</DayBox>
                <DayBox colors={colors[3]} backgrounds={backgrounds[3]}  onClick={() => selectDay(3)}>Q</DayBox>
                <DayBox colors={colors[4]} backgrounds={backgrounds[4]}  onClick={() => selectDay(4)}>Q</DayBox>
                <DayBox colors={colors[5]} backgrounds={backgrounds[5]}  onClick={() => selectDay(5)}>S</DayBox>
                <DayBox colors={colors[6]} backgrounds={backgrounds[6]}  onClick={() => selectDay(6)}>S</DayBox>
            </ContainerDays>
            <Row>
                <Cancel  onClick={() => setAdd(false)}>Cancelar</Cancel>
                <button onClick={submitData}>Salvar</button>
            </Row>
            
        </Container>
    )
}
const ContainerDays=styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-left: 10px;
`
const DayBox=styled.div`
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background: ${props => props.backgrounds};
    border: 1px solid #CFCFCF;
    border-radius: 5px;
    margin:5px;
    margin-top:15px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${props => props.colors};
`
const Row=styled.div`
    display: flex;
    align-items: center;
    button {
        cursor: pointer;
        margin:10px;
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
const Cancel=styled.div`
    margin-left: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #52B6FF;
`
const Container=styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 88%;
    height: 180px;;
    margin-top: 68px;
    background-color: #ffffff;
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    margin:10px;
    padding: 10px;
    input{
        margin-top: 10px;
        padding-left:10px;
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }
    input::placeholder{
        color: #DBDBDB;
    }
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