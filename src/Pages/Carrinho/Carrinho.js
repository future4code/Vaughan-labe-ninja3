import React from "react";
import Jobs from "../../Components/Jobs/Jobs";
import { ContainerCarrinho, ContainerListCart, Contratar, DivContainer, Img, DivButoes, ButtonService,ButtonContrat, PStyle } from "./style";
import Logo from "../../assets/logo-cabecalho.png"
import AddCartImg from "../../assets/carrinho-de-compras.png"

export default class Carrinho extends React.Component {

    render() {
        const cardRenderizado = this.props.cart.map((prod) => {
            return (
                <ContainerListCart key={prod.id}>
                    <Jobs
                        jobName={prod.title}
                        preco={prod.price}
                        onClick={() => this.props.deleteCards(prod)}
                    />
                </ContainerListCart>
            )
        })
        return (
            <>
                <DivContainer>

                    <div>
                        <Img src={Logo} alt="Logomarca Labeninjas" />
                    </div>

                    <DivButoes>
                        <ButtonService onClick={this.props.Home}>PÁGINA INICIAL</ButtonService>
                        <ButtonService onClick={this.props.voltar}><img src={AddCartImg}/></ButtonService>
                    </DivButoes>
                    

                </DivContainer>
                <ContainerCarrinho>
                    {this.props.cart.length <= 0? <h1>Seu carrinho está vazio!</h1> : 
                    <> {cardRenderizado}
                    <Contratar>
                        <PStyle>TOTAL: R$ {this.props.priceAll},00</PStyle>
                        <ButtonContrat onClick={this.props.service}>CONTRATAR SERVIÇOS</ButtonContrat>
                    </Contratar>
                    </>}
                </ContainerCarrinho>
            </>
        )
    }

} 