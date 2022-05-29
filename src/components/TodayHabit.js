import {React,useState,useEffect} from "react";
import styled from 'styled-components';
import axios from "axios";
import checkmark from "../assets/images/check.png" ;

export default function TodayHabit({habit,loadHabits,token}){
   
    let background='';
    if(habit.done){
        background="#8FC549";
    }else{
        background="#EBEBEB";
    }

    function doHabit(){
        let isCheck;
        const config = {
            headers: {
              "Authorization": `Bearer ${token}`
            }
        };
        if(habit.done){
            isCheck="uncheck";
        }else{
            isCheck="check";
        }
        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/${isCheck}`,null, config);
    
        promise.then(resposta => {  
            console.log(resposta.data);
            loadHabits();
        });
    }

    return(
        <>
        <Container background={background}>
            <Row>
                <Column>
                    <h1>{habit.name}</h1>
                    <h2>Sequência atual:<strong>{habit.currentSequence}</strong></h2><br></br>
                    <h2>Seu recorde:<strong>{habit.highestSequence}</strong></h2>
                </Column>
                <Column>
                    <CheckBox background={background} onClick={doHabit}><img src={checkmark}></img></CheckBox>
                </Column>
            </Row>
        </Container>
        </>
    )
}

const CheckBox=styled.div`
    width: 69px;
    height: 69px;
    background: ${props => props.background};
    border-radius: 5px;
    margin-right:10px;
    display: flex;
    align-items:center;
    justify-content: center;
`
const Column=styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
`
const Row=styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Container=styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 10px;
    justify-content: center;
    margin-bottom: 15px;
    h1{
        margin-left: 10px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }
    h2{
        margin-left: 10px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
    }
    strong{
        margin-left: 10px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: ${props => props.background};
    }
`