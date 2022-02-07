import styled from "styled-components"; 
import { Chip } from "@material-ui/core";

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

export const ButtonContrat = styled.button`
color: #1B0034;
border: 3px solid #1B0034; 
height: 40px;
width: 25%;
border-radius: 10px;
cursor: pointer;
`

export const StyleCard = styled.div`
  color:  #1B0034;
  margin: 20px;
  width: 25%;
  height: 20rem;
  background-color: #F8E59B;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

`
export const StyleDetail = styled.div`
gap: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
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
export const ButtonCard = styled.button`
border: 3px solid #1B0034; 
height: 40px;
width: 25vw;
border-radius: 10px;
background-color: #1B0034;
color: #FFFFFF;
cursor: pointer;
padding: 10px;
text-aling: center;
`
export const ButtonDirection = styled.div`
display: flex;
justify-content: center;
align-item: center;
display: block;
    margin-left: auto;
    margin-right: auto;
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
export const ContainerButton = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
width: 20vw;
padding: 0 20px;
`
export const TextoInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`
export const Info = styled.div`
  display: flex;
  gap: 15px;
`

export const H5 = styled.h5`
  font-size: 13.5px;
`
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 24px;
`
export const ChipStyle = styled(Chip)`
    margin: 0 4px;
    height: 28px !important;
`
