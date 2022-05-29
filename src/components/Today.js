import {React,useEffect,useState,useContext} from "react";
import styled from 'styled-components';
import Header from "./Header";
import Footer from "./Footer";
import dayjs from "dayjs";
import locale from  "dayjs/locale/pt-br";
import axios from "axios";
import TodayHabit from "./TodayHabit";
import UserContext from "../context/UserContext";

export default function Today(){
    dayjs.locale('pt-bt');
    const [habits,setHabits]=useState([]);
    
    const { user } = useContext(UserContext);
    
    const {image,token} = user;
    //const now = dayjs();
    const now = dayjs().locale("pt-br");
    useEffect(() => {
       
        const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
        };

        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`,config);
    
        promise.then(resposta => {
            setHabits(resposta.data);
        });
        
    }, []);

    const day = now.format("dddd");
    const Day = day.charAt(0).toUpperCase() + day.slice(1);
    
    return(
        <>
        <Header/>
        <Page>
            <Container> <h1>{Day}, {now.format("DD/MM/YYYY")} </h1> </Container>
            <Column>
                {habits.map((habit) => (
                    <TodayHabit habit={habit} token={token} key={habit.id}/>
                ))}
            </Column>
        </Page>
        <Footer/>
        </>
    )
}
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
    width: 100%;
    height: calc(100vh - 140px);
    background: #E5E5E5;
    //margin-top: 70px;
`
const Container=styled.div`
    display: flex;
    align-items: center;
    width: 88%;
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