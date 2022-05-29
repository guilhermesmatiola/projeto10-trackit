import {React} from "react";
import styled from 'styled-components';
import Header from "./Header";
import Footer from "./Footer";


export default function History(){
    return(
        <>
        <Header/>
        <Page>
            <Container> <h1>Historico</h1> </Container>
            <EmptyText>Em breve você poderá ver o histórico dos seus hábitos aqui!</EmptyText>
        </Page>
        <Footer/>
        </>
    )
}

const EmptyText=styled.div`
    width: 88%;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    margin-top: 15px;
    color: #666666;
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