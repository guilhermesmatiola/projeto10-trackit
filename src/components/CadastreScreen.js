import React,{ useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/trackitlogo.png" 
import { ThreeDots } from  'react-loader-spinner'

export default function SignUp() {

  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [registerData, setRegisterData] = useState(null);

  function submitData(event) {
    event.preventDefault();

    let postObject=
        {
            email ,
            password,
            name,
            image
        };
    
    const promise=axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",postObject);

    promise.then(resposta => {
        setEmail("");
        setImage("");
        setPassword("");
        navigate("/");
        console.log(resposta.data);
    });
  }

  return (
    <>
      <Container>
        <img src={logo}/>
        <Form onSubmit={submitData}>
            <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            <input type="text" placeholder="nome" onChange={(e) => setName(e.target.value)} value={name} />
            <input type="text" placeholder="foto" onChange={(e) => setImage(e.target.value)} value={image}/>
            <input type="text"  placeholder="senha" onChange={(e) => setPassword(e.target.value)} value={password} />
            <button type="submit" >Cadastrar</button>
        </Form>
        <Link to='/'>Já tem uma conta? Faça login! </Link>
      </Container>
    </>  
  );
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
        min-width: 150px;
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