import React from "react";
import styled from "styled-components";
import Logo from "../../assets/logo-cabecalho.png"

const Botoes = styled.button`
    color: white;
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
    gap: 10px;
`

class Header extends React.Component {

    render(props) {
        return (
            <DivContainer>
                <div>
                    <Img src={Logo} alt="Logomarca Labeninjas" />
                </div>

                <DivButoes>
                    <a href="#quem-somos"><Botoes >QUEM SOMOS</Botoes></a>
                    <a href="#servicos"><Botoes >SERVIÇOS</Botoes></a>
                    <a href="#contato"><Botoes >CONTATO</Botoes></a>
                </DivButoes>
            </DivContainer>
        )
    }
}

export default Header;