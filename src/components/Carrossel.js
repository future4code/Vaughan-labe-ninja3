import React from "react";
import styled from "styled-components";
import Imagem1 from "./img/1.png";
import Imagem2 from "./img/2.png";
import Imagem3 from "./img/3.png";
import Imagem4 from "./img/4.png";
import Imagem5 from "./img/5.png";
import Imagem6 from "./img/6.png";


const CarrosselMascara = styled.section `
    width: 500px;
    height: 500px;
    margin: 0 auto;
    overflow: hidden;
    font-size: 0; 
`

const CarrosselContainer = styled.div`
    width: 2000px; 
    transition: 1s ease;
    height: 337px; 
    animation: slide 20s ease infinite;

    @keyframes slide {
    0% {
    transform: translateX(0%);
    }

    12.5% {
    transform: translateX(0%);
    }

    25% {
    transform: translateX(-25%);
    }

    37.5% {
    transform: translateX(-25%);
    }

    50% {
    transform: translateX(-50%);
    }

    62.5% {
    transform: translateX(-50%);
    }

    75% {
    transform: translateX(-75%);
    }

    87.5% {
    transform: translateX(-75%);
    }

    99% {
    transform: translateX(-75%);
    }

    100% {
    transform: translateX(0);
    }
    }

    &:hover {
    animation-play-state: paused;  
    }
`
const Img = styled.img`
    width: 500px;
    height: 500px;
    height: auto;
    display: inline-block;
    vertical-align:top;
    font-size: 16px;
    margin: 0 auto;
`

class Carrossel extends React.Component {

    render() {
        return (

            <div>
                <CarrosselMascara>

                    <CarrosselContainer>
                        <Img src={Imagem1}></Img>
                        <Img src={Imagem2}></Img>
                        <Img src={Imagem3}></Img>
                        <Img src={Imagem4}></Img>
                        <Img src={Imagem5}></Img>
                        <Img src={Imagem6}></Img>
                        <Img src={Imagem1}></Img>
                        <Img src={Imagem2}></Img>
                        <Img src={Imagem3}></Img>
                        <Img src={Imagem4}></Img>
                        <Img src={Imagem5}></Img>
                        <Img src={Imagem6}></Img>
                    </CarrosselContainer>

                </CarrosselMascara>
            </div>
        )
    }
}

export default Carrossel;