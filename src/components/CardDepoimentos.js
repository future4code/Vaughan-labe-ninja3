import React from "react";
import styled from "styled-components";
import Aspas from "./img/aspas.png"
import Pessoa1 from "./img/Pessoa1.png"
import Pessoa2 from "./img/Pessoa2.png"
import Pessoa3 from "./img/Pessoa3.png"
import Pessoa4 from "./img/Pessoa4.png"

const DivContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const DivCards = styled.div`
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const ImgPessoas = styled.img`
    height: 200px;
    width: 200px;
    border-radius: 100px;
    margin-right: 20px;
`
const ImgAspas = styled.img`
    height: 3rem;
`

const StyleCard = styled.div`
  margin: 20px;
  width: 20%;
  height: 25rem;
  background-color: #F0F0F0;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #D1C7DB;
  }
`
class Header extends React.Component {

    render() {
        return (
            <DivContainer>
                <h1>DEPOIMENTOS</h1>
                <h3>O QUE DIZEM OS NOSSOS NINJAS:</h3>

                <DivCards>
                <StyleCard>
                    <div>
                        <ImgPessoas src={Pessoa1} alt="Imagem Pessoa" />
                    </div>
                    <div>
                        <ImgAspas src={Aspas} />
                        <p>Eu nunca trabalhei em um lugar tão maravilhoso! Sinto que o
                            meu trabalho importa mesmo, mas além disso sinto que eu importo.</p>
                        <p>Adriana, Agente de Atendimentos</p>
                    </div>
                </StyleCard>

                <StyleCard>
                    <div>
                        <ImgPessoas src={Pessoa2} alt="Imagem Pessoa" />
                    </div>
                    <div>
                        <ImgAspas src={Aspas} />
                        <p>É um ambiente muito leve de trabalhar, onde comunicação entre
                            os diferentes times é muito frequente. Tenho muito orgulho de
                            fazer parte dessa empresa.</p>
                        <p>Roberto, Especialista de Comunicação</p>
                    </div>
                </StyleCard>

                <StyleCard>
                    <div>
                        <ImgPessoas src={Pessoa3} alt="Imagem Pessoa" />
                    </div>
                    <div>
                        <ImgAspas src={Aspas} />
                        <p>Muito orgulho de trabalhar em um ambiente com tanta valorização a
                            diversidade onde a inclusão é um valor tão importante.</p>
                        <p>Magnólia, Agile Master</p>
                    </div>
                </StyleCard>

                <StyleCard>
                    <div>
                        <ImgPessoas src={Pessoa4} alt="Imagem Pessoa" />
                    </div>
                    <div>
                        <ImgAspas src={Aspas} />
                        <p>A chance de aprender cada vez mais o que faço é incrível, 
                        o apoio que tenho é maravilhoso. Esse apoio que representa que 
                        quero continuar aqui.</p>
                        <p>Júlio César, Agente de Atendimentos</p>
                    </div>
                </StyleCard>
                
                </DivCards>

            </DivContainer>
        )
    }
}

export default Header;