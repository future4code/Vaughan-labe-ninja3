import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardDepoimentos from "../components/CardDepoimentos"
import Logo from "../components/img/Logomarca.png"
import Carrossel from "../components/Carrossel";

const DivIntro = styled.div`
    background-color: #F0F0F0;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    gap: 50px;
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
    margin-left: 10rem;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 50px;
`
const DivTexto2 = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 10rem;
    margin-left: 10rem;
`

class LandingPage extends React.Component {

    render() {
        return (
            <div>
                <Header />

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
                            <button>CONTRATE UM NINJA</button>
                        </DivBotoes>
                    </DivTB>
                </DivIntro>

                <CardDepoimentos/>

                <DivQuemSomos>
                    <div>
                    <Carrossel/>
                    </div>

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

                <Footer />
            </div>
        )
    }
}

export default LandingPage;