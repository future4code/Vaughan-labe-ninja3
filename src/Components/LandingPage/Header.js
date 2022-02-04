import React from "react";
import styled from "styled-components";
import Logo from "../../assets/logo-cabecalho.png"

const Botoes = styled.button`
    color: white;
    background: transparent;
    border-radius: 15px;
    border: none;
`

const DivContainer = styled.div`
    background-color: #1B0034;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin-bottom: 30px;
`
const Img = styled.img`
    height: 3rem;
`

const DivButoes = styled.div`
    display: flex;
    gap: 30px;
`

class Header extends React.Component {

    render() {
        return (
            <DivContainer>   

                <div>
                    <Img src={Logo} alt="Logomarca Labeninjas" />
                </div>

                <DivButoes>
                    <a href="#"><Botoes >QUEM SOMOS</Botoes></a>
                    <a href="#"><Botoes >SERVIÇOS</Botoes></a>
                    <a href="#"><Botoes >CONTATO</Botoes></a>
                </DivButoes>

            </DivContainer>
        )
    }
}

export default Header;