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
  
    const [habits,setHabits]=useState([]);
    
    const { user , setUser} = useContext(UserContext);
    
    const {image,token} = user;
 
    const now = dayjs().locale("pt-br");

    function loadHabits(){
        const config = {
            headers: {
              Authorization: `Bearer ${token}`
            }
        };

        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`,config);
    
        promise.then(resposta => {
            nDone=0;
            for(let i=0;i<resposta.data.length;i++){
                if(resposta.data[i].done){
                    nDone++;
                }
            }
            setUser(
                {   
                    image: user.image,
                    token: user.token,
                    percentage: (nDone/resposta.data.length)*100
                },
            );
            setHabits(resposta.data);
        });
        
    }
    let nDone=0;
    let txtcolor="#BABABA";
    let percent;
    let txt=countDone();
    
    function countDone(){
        
        for(let i=0;i<habits.length;i++){
            if(habits[i].done){
                nDone++;
            }
        }
        if(nDone===0){
            return "Nenhum hábito concluído ainda";
        }else{
            txtcolor="#8FC549";
            return `${nDone/habits.length*100}% dos hábitos concluídos`;
        }
    }

   

    useEffect(() => {
        loadHabits();
        
    }, []);

    const day = now.format("dddd");
    const Day = day.charAt(0).toUpperCase() + day.slice(1);

    


    return(
        <>
        <Header/>
        <Page>
            <Container> <h1>{Day}, {now.format("DD/MM/YYYY")} </h1> </Container>
            <Container> <Text color={txtcolor}>{txt}</Text> </Container>
            <Column>
                {habits.map((habit) => (
                    <TodayHabit loadHabits={loadHabits} habit={habit} token={token} key={habit.id}/>
                ))}
            </Column>
        </Page>
        <Footer percent={percent}/>
        </>
    )
}
const Column=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
   
    background: #E5E5E5;
    margin-top: 20px;
    margin-bottom: 35px;
`
const Text=styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: ${props=>props.color};
`
const Page=styled.div`
    margin-top:70px;
    margin-bottom:70px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: calc(100vh - 140px);
    overflow-x: scroll;
    background: #E5E5E5;
`
const Container=styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;
    justify-content: space-between;
    width: 90%;
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

