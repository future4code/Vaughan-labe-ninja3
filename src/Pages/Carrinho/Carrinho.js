import React from "react";
import Jobs from "../../Components/Jobs/Jobs";
import { ContainerCarrinho, ContainerListCart, Contratar } from "./style";

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
        return(
            <ContainerCarrinho>
                <button onClick={this.props.voltar}>Voltar</button>
                {cardRenderizado}
                <Contratar>
                <p>Total R$ {this.props.priceAll},00</p>
                <button onClick={this.props.service}>Contratar serviços</button>
                </Contratar>
            </ContainerCarrinho>
        )
    }

} 