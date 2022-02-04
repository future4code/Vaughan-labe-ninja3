import React from "react";
import styled from "styled-components";
import Logo from "../../assets/logo-cabecalho.png"
import Face from "../../assets/face.png"
import Insta from "../../assets/insta.png"
import Twitter from "../../assets/twitter.png"
import Baixar1 from "../../assets/8.png"
import Baixar2 from "../../assets/9.png"

const DivContainer = styled.div`
    background-color: #1B0034;
    color: white;
`

const DivContato = styled.div`
    display: flex;
    justify-items: center;
    justify-content: space-between;
    align-items: start;
    margin: 50px;
    padding: 20px;
`

const DivRedesSociais = styled.div`
    display: flex;
    gap: 10px;
`

const DivImgDownload = styled.div`
    display: grid;
    flex-direction: columns;
`
const DivOutros = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 30px;
`
const DivTextoOutros = styled.div`
    display: flex;
    gap: 40px;
    align-items: center;
    justify-content: space-evenly;
`
const Divtexto = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
`

const Img = styled.img`
    height: 2.5rem;
`
const ImgLogo = styled.img`
    height: 3rem;
`
const Lista = styled.li`
    color: white;
    list-style: none;
    align-items: end;
    display: grid;
    grid-template-columns: 200px 200px;
`

const Separar = styled.div`
    gap: 15px;
    display: grid;
`

class Footer extends React.Component {

    render() {
        return (
            <DivContainer>

                <DivContato>

                    <Separar>
                        <h4>SERVIÇOS</h4>
                        <Lista>
                            <li>Assistência Técnica</li>
                            <li>Saúde</li>
                            <li>Cuidador de Pessoas</li>
                            <li>Reformas</li>
                            <li>Design e Tecnologia</li>
                            <li>Aulas</li>
                            <li>Marketing</li>
                            <li>Moda e Beleza</li>
                            <li>Eventos</li>
                            <li>Serviços Domésticos</li>
                        </Lista>
                    </Separar>

                    <Separar>
                        <h4>REDES SOCIAIS</h4>
                        <DivRedesSociais>
                            <a target="_blank" href="https://pt-br.facebook.com/"><Img src={Face} alt="Ícone Facebook" /></a>
                            <a target="_blank" href="https://www.instagram.com/"><Img src={Insta} alt="Ícone Instagram" /></a>
                            <a target="_blank" href="https://twitter.com/"><Img src={Twitter} alt="Ícone Twitter" /></a>
                        </DivRedesSociais>
                    </Separar>

                    <Separar>
                        <h4>DOWNLOADS</h4>
                        <DivImgDownload>
                            <a target="_blank" href="https://play.google.com/store?hl=pt_BR&gl=US"><Img src={Baixar1} alt="Ícone Play Store" /></a>
                            <a target="_blank" href="https://www.apple.com/br/store"><Img src={Baixar2} alt="Ícone Apple Store" /></a>
                        </DivImgDownload>
                    </Separar>

                </DivContato>

                <DivOutros>
                    <ImgLogo src={Logo} alt="Logomarca Labeninjas" />
                    <DivTextoOutros>
                        <p>Imprensa</p>
                        <p>Trabalhe Conosco</p>
                    </DivTextoOutros>
                </DivOutros>

                <Divtexto>
                    <p>©2005 - 2022, Labeninjas Serviços de Internet. CNPJ xx.xxx.xxx/xxxx-xx - Avenida das Ribeiras, 157 - Gramado/RS - Brasil</p>
                </Divtexto>

            </DivContainer>
        )
    }
}

export default Footer;