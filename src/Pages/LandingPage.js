import React from "react"
import styled from "styled-components"
import Header from "../Components/LandingPage/Header"
import Footer from "../Components/LandingPage/Footer"
import CardDepoimentos from "../Components/LandingPage/CardDepoimentos"
import Carrossel from "../Components/LandingPage/Carrossel"
import Logo from "../assets/Logomarca.png"

const DivIntro = styled.div`
    background-color: #F0F0F0;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    gap: 50px;
    height: 90vh;
`
const DivTextos = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 90px;
    margin-right: 120px;
`
const DivBotoes = styled.div`
    display: flex;
    gap: 50px;
`

const DivTB = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`

const Img = styled.img`
    height: 15rem;
    margin: 90px;
`

const DivQuemSomos = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
`
const DivTexto2 = styled.div`
    color: white;
    background-color: #1B0034;
    height: 90vh;
    width: 115vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const DivCarrossel2 = styled.div`
    background-color: #D1C7DB;
    height: 90vh;
    width: 115vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

class LandingPage extends React.Component {

    render() {
        return (
            <div>
                
                <Header/>

                <DivIntro>
                    <div>
                        <Img src={Logo} alt="Logomarca Labeninjas" />
                    </div>
                    <DivTB>
                        <DivTextos>
                            <h1>Conectando quem precisa com quem sabe fazer</h1>
                            <p>A Labeninjas nasceu com o propósito de conectar quem precisa com quem sabe fazer.
                                Somos uma plataforma que conecta clientes e profissionais, com diversos tipos de
                                serviços disponíveis.</p>
                        </DivTextos>

                        <DivBotoes>
                            <button>QUERO SER UM NINJA</button>
                            <button onClick={this.props.contratar}>CONTRATE UM NINJA</button>
                        </DivBotoes>
                    </DivTB>
                </DivIntro>

                <DivQuemSomos>

                    <DivCarrossel2>
                    <Carrossel/>
                    </DivCarrossel2>

                    <DivTexto2>
                    <h1>O que é o Labeninjas?</h1>
                    <p>É a maior plataforma de contratação de serviços do Brasil. 
                    Uma plataforma que conecta clientes e profissionais, com diversos 
                    tipos de serviços disponíveis. Nascemos em 2005, com o propósito de 
                    conectar quem precisa com quem sabe fazer. E desejamos ajudar quem 
                    precisa com muito empenho e prestatividade.
                    </p>
                    <p>
                    Para isso, buscamos desenvolver em todo profissional suas habilidades 
                    ninjas, pois acreditamos que em todo mundo há uma história de sucesso 
                    que podemos ajudar a tornar realidade.
                    </p>
                    </DivTexto2>

                </DivQuemSomos>

                <CardDepoimentos/>

                <Footer />
            </div>
        )
    }
}

export default LandingPage;