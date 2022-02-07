import styled from "styled-components";
import TextField from "@material-ui/core/TextField"
import { Select } from "@material-ui/core";

export const ContainerRender = styled.div`
display: grid;
align-items: center;
justify-items: center;
border: 3px solid black;
color: white;
background-color: #1B0034;
margin: 5px;
width: 20vw;
height: 25vh;
border-radius: 2.5%;
`

export const ContainerButton = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 20vw;
padding: 0 20px;
`
export const ButtonCard = styled.button`
background-color: transparent;
border: 0;
cursor: pointer;
padding: 10px;
img{
    width: 40px;
    height: 40px;
   object-fit: cover;
}
`
export const ButtonCard2 = styled.button`
background-color: transparent;
border: 0;
cursor: pointer;
padding: 10px;
img{
    width: 35px;
    height: 25px;
    object-fit: cover;
}
`
export const ContainerJobs = styled.div`
display: grid;
justify-content: center;
grid-template-columns: repeat(4, 22vw);
margin: 15px;
font-size: 15px;
`
export const DivContainer = styled.div`
    background-color: #1B0034;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin-bottom: 30px;
`
export const Img = styled.img`
    height: 3rem;
`
export const DivButoes = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center
`

export const PosicaoSelect = styled.div`
    display: flex;
    flex-direction: row;
    align-itens: center;
    justify-content: center;
    gap: 20px;
`

export const PosicaoInput = styled.div`
    display: flex;
    flex-direction: row;
    align-itens: center;
    justify-content: center;
    gap: 20px;
`

export const Geral = styled.div`
    display: flex;
    flex-direction: row;
    align-itens: center;
    justify-content: center;
    gap: 60px;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`
export const BuscaContainer = styled.div`
    position: relative;
    left: 0;
    right: 0;
    margin-right: 160px;
    border-radius: 8px;
    background-color: rgba(255,255,255, 0.15);
    margin-left: 0;
    padding: 4px;
    display: flex;
    align-items: center;
    width: 500px;
    &:hover {
        background-color: rgba(255,255,255, 0.25);
    };
`
export const InputPreco = styled(TextField)`
    width: 200px;
    margin-right: 32px !important;
`
export const StyleSelect = styled.select`
    width: 200px;
    margin: 0 32px 8px 0;
    height: 40px;
    border-radius: 5px;
    border-color: #CBC8C8;
`
export const BotaoHome = styled.button`
    color: #F8E59B;
    background: transparent;
    border-radius: 15px;
    border: none;
    width: 120px;
    height: 30px;
&:hover {
    cursor: pointer;
    background-color: rgba(255,255,255, 0.25);
}
`