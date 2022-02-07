import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const DivIntro = styled.div`
    background-color: #F0F0F0;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    height: 100vh;
`
export const TextoQuemSomos = styled.div`
    display: flex;
    align-itens: center;
    flex-direction: column;
    gap: 20px;
    width: 450px;
`

export const DivTextos = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    gap: 30px;
`
export const DivBotoes = styled.div`
    display: flex;
    gap: 50px;
`

export const DivTB = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`

export const Img = styled.img`
    height: 15rem;
`

export const DivQuemSomos = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
`
export const DivTexto2 = styled.div`
    color: white;
    background-color: #1B0034;
    height: 80vh;
    width: 70rem ;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const DivCarrossel2 = styled.div`
    background-color: #D1C7DB;
    width: 50rem;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const CardsStyle = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const TituloCards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: 40px;
`
export const Button = styled.button`
    color: black;
    background: #E6BC0F;
    border-radius: 15px;
    border: none;
    height: 32px;
    width: 175px;
&:hover {
    cursor: pointer;
    background: #D4AB05;
}
`

export const HeaderFixed = styled.div`
    position: fixed;
    top: 0;
    z-index: 99;  
    width: 100%;
`
export const Botoes = styled(AnchorLink)`
  color: white;
  text-decoration: none;
  font-size: 13.5px;
  background: transparent;
    border-radius: 15px;
    border: none;
    height: 30px;
&:hover {
  cursor: pointer;
  text-decoration: none;
  font-size: 14px;
  color: #F8E59B;
}
`
export const DivContainer = styled.div`
    background-color: #1B0034;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin-bottom: 30px;
`
export const Img2 = styled.img`
    height: 3rem;
`

export const DivButoon = styled.div`
    display: flex;
    gap: 20px;
`

export const H1 = styled.div`
    color: #756684;
    font-size: 30px;
    font-weight: bold;
`
export const H4 = styled.div`
    color: #1B0034;
    font-weight: bold;
`
