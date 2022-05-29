import React from "react";
import styled from 'styled-components';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { useEffect,useContext , useState } from 'react';
import UserContext from "../context/UserContext";
import Header from "./Header";
import Habit from "./Habit";
import Footer from "./Footer";
import Newhabit from "./Newhabit";

export default function HabitsPage(){
    const { user } = useContext(UserContext);
    
    const {image,token} = user;
    const [habits,setHabits]=useState([]);
    
    const [hasHabit, sethasHabit] = useState(true);
    const [add, setAdd] = useState(false);

    useEffect(() => {
       
        loadHabits();

    }, []);

    const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
    };

    function loadHabits(){
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`,config);

        promise.then(resposta => {
            setHabits(resposta.data);
            sethasHabit(false);
        });
    }

    return(
        <>
        <Header/>
        <Page>
        <Container> <h1>Meus hábitos</h1> <Add onClick={() => setAdd(!add)}>+</Add> </Container>
        {add ? (<Newhabit setAdd={setAdd} loadHabits={loadHabits} />):(<></>)}
        {hasHabit ? 
        (
            <DummyText> Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear! </DummyText>
        ):(
            <Column>
                {habits.map((habit) => (
                    <Habit habit={habit} loadHabits={loadHabits} token={token} key={habit.id}/>
                ))}
            </Column>
        )}
        </Page>
        <Footer percent={user.percentage}/>
        </>
    )
}

const DummyText=styled.div`
    width: 88%;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
`
const Column=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: calc(100vh - 140px);
    background: #E5E5E5;
    margin: 20px;
    margin-bottom: 35px;
`

const Page=styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: calc(100vh - 140px);
    background: #E5E5E5;
    //margin-top: 70px;
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