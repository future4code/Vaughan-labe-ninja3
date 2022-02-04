import React from "react";
import styled from "styled-components";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CardDepoimentos from "../Components/CardDepoimentos"
import Logo from "../Components/img/Logomarca.png"

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
                            <button onClick={this.props.cadastrar}>QUERO SER UM NINJA</button>
                            <button onClick={this.props.contratar}>CONTRATE UM NINJA</button>
                        </DivBotoes>
                    </DivTB>
                </DivIntro>

                <CardDepoimentos/>

                <Footer />
            </div>
        )
    }
}

export default LandingPage;