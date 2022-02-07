import styled from "styled-components"

export const DivBackground = styled.div`
    background: #1B0034;
    height: 100vh;
`

export const DivHeader = styled.div`
    background-color: #1B0034;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin-bottom: 30px;
    border-bottom: 1px solid #F0F0F0;
`
export const Img = styled.img`
    height: 3rem;
`

export const DivButoes = styled.div`
    display: flex;
    gap: 10px;
`

export const Container = styled.div`

  width: 620px;
  height: 620px;
  background-color: #F0F0F0;
  border-radius: 30px;
  padding: 15px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #1B0034 ;
  
`

export const ContainerAlinhar = styled.div`
  margin-top: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
 width: 400px;
 border-radius:10px ;
 border: 0;
 height: 26px;
 padding: 10px;
 font-size: 13px;
`

export const ButtonForm = styled.button`
left: 40px;
width: 180px;
background-color: #1B0034;
color: white;
font-size: inherit;
border: none;
border-radius:8px ;
height: 35px;
 &:hover{
     background-color:black ;
     color:white;
     cursor:pointer
 }
`
export const CheckboxStyle = styled.div`
 width: 500px;
 padding: 10px;
 border-radius:8px;
 border: 1px solid #B2B2B2;
 font-size: 12px;
`
export const FormContainer = styled.div`
    width: 70vw;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    margin-top: 12px;
`

export const DivContainer = styled.div`
    height: calc(90vh - 108px);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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