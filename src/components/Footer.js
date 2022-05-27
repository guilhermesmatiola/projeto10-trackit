import { useContext } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar,  buildStyles } from 'react-circular-progressbar';


export default function Footer(){

    const { user } = useContext(UserContext);

    const percentage=20;

    return(
        <Container>
            <Link to="/habitos">
                <button>Hábitos</button>
            </Link>
            <Link to="/hoje">            
                <ProgressBar>
                    <CircularProgressbar
                        value={percentage}
                        text="Hoje"
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                        })}
                    />
                </ProgressBar>
            </Link>
            <Link to="/historico">
                <button>Histórico</button>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 70px; 
    position:fixed;
    bottom:0;
    right:0;
    background-color: #FFFFFF; 
    z-index:1;
    *{
        box-sizing: border-box;
    }
    button{
        /* width: 00%; */
        /* margin-right: 45px;
        margin-left: 45px; */
        background-color: #FFFFFF;  
        border:none;
        color:#52B6FF;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        cursor: pointer;
        /* padding-left: 30px;
        padding-right: 30px; */
    }
`
const ProgressBar = styled.div`
    width:91px;
    height: 91px;
    position: fixed;
    bottom: -40px;
    left:50%;
    /* margin: 0 auto; */
    font-family: 'Lexend Deca', sans-serif;
    cursor: pointer;
    transform: translate(-50%, -50%);
`
