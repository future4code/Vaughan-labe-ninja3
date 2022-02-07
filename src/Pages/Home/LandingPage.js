import React from "react"
import { DivIntro, TextoQuemSomos, DivTextos, DivBotoes, H1, H4, DivTB, Img, DivQuemSomos, DivTexto2, DivCarrossel2, CardsStyle, TituloCards, Button, HeaderFixed, Botoes, DivContainer, Img2, DivButoon} from "./Styled";
import Header from "../../Components/LandingPage/Header"
import Footer from "../../Components/LandingPage/Footer"
import CardDepoimentos from "../../Components/LandingPage/CardDepoimentos"
import Carrossel from "../../Components/LandingPage/Carrossel"
import Logomarca from "../../assets/Logomarca.png"
import Logo from "../../assets/logo-cabecalho.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'



class LandingPage extends React.Component {

    render() {
        return (
            <div id="servicos">
                <HeaderFixed>
                <DivContainer>
                <div>
                    <Img2 src={Logo} alt="Logomarca Labeninjas" />
                </div>

                <DivButoon >
                    <Botoes href="#servicos" offset='50'>SERVIÇOS</Botoes>
                    <Botoes href="#quem-somos" >QUEM SOMOS</Botoes>
                    <Botoes href="#contato" >CONTATO</Botoes>
                </DivButoon>
            </DivContainer> 
                </HeaderFixed>

                <DivIntro >
                    <div >
                        <Img src={Logomarca} alt="Logomarca Labeninjas" />
                    </div>
                    <DivTB >
                        <DivTextos >
                            <h1 >Conectando quem precisa com quem sabe fazer</h1>
                            <p>A Labeninjas nasceu com o propósito de conectar quem precisa com quem sabe fazer.
                                Somos uma plataforma que conecta clientes e profissionais, com diversos tipos de
                                serviços disponíveis.</p>
                        </DivTextos>

                        <DivBotoes >
                            <Button onClick={this.props.cadastrar}>QUERO SER UM NINJA  ➜</Button>
                            <Button onClick={this.props.contratar}>CONTRATE UM NINJA  ➜</Button>
                        </DivBotoes>
                    </DivTB>
                </DivIntro >

<div id="quem-somos">
                <DivQuemSomos >

                    <DivCarrossel2>
                    <Carrossel/>
                    </DivCarrossel2>

                    <DivTexto2>
                    <TextoQuemSomos>
                    <h1 >O que é o Labeninjas?</h1>
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
                    </TextoQuemSomos>
                    </DivTexto2>

                </DivQuemSomos>
                </div>
                <CardsStyle >
                <TituloCards>
                <H1>DEPOIMENTOS</H1>
                <H4>O QUE DIZEM OS NOSSOS NINJAS:</H4>
                </TituloCards>
                <CardDepoimentos/>
                </CardsStyle>

                <div id="contato">
                <Footer />
                </div>
            </div>
        )
    }
}

export default LandingPage;