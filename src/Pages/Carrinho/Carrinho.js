import React from "react";
import Jobs from "../../Components/Jobs/Jobs";
import { ContainerCarrinho, ContainerListCart, Contratar, DivContainer, DivButoes, Img} from "./style";
import Logo from "../../assets/logo-cabecalho.png"
export default class Carrinho extends React.Component{
    
    render(){
        const cardRenderizado = this.props.cart.map((prod)=>{
            return(
                <ContainerListCart key={prod.id}>
                <Jobs
                jobName={prod.title}
                preco={prod.price}
                onClick={()=> this.props.deleteCards(prod)}
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
                        <button onClick={this.props.Home}>PÁGINA INICIAL</button>
                        {/* <button onClick={this.props.voltar}><img src={AddCartImg}/></button> */}
                    </DivButoes>
                    

                </DivContainer>
                <ContainerCarrinho>
                    {this.props.cart.length <= 0? <div>Carrinho está vazio</div> : 
                    <> {cardRenderizado}
                    <Contratar>
                        <h1>TOTAL: R$ {this.props.priceAll},00</h1>
                        <button onClick={this.props.service}>CONTRATAR SERVIÇOS</button>
                    </Contratar>
                    </>}
                </ContainerCarrinho>
            </>
        )
    }

} 