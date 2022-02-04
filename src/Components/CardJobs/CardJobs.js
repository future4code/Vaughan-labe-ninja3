import axios from "axios";
import React from "react";
import { BASE_URL, header } from "../../Constants/Url";
import { ButtonCard, ContainerButton, ContainerJobs, ContainerRender } from "./style";
import AddCartImg from "../../assets/carrinho-de-compras.png"

export default class CardJobs extends React.Component{
    state = {
        listJobs: []
    }
    componentDidMount () {
        this.getAllJobss()
    }
    getAllJobss = () =>{
        axios.get(`${BASE_URL}/jobs`, header )
        .then((res)=>{
            this.setState({listJobs: res.data.jobs})
        })
        .catch((error)=>{
            alert(`Ocorreu um erro, tente novamente`)
        })
    }
    render(){
        const cardRenderizado = this.state.listJobs.map((cards)=>{
            return(
                <ContainerRender key={cards.id}>
                  <h3>{cards.title}</h3>
                  <p> {cards.dueDate} Preço: R${cards.price}</p>
                  <ContainerButton>
                  <button>Ver Detalhes</button>
                  <ButtonCard onClick={()=> this.props.onClick(cards)}><img src={AddCartImg}/></ButtonCard> 
                  </ContainerButton>
                </ContainerRender>
            )
        })
        return(
            <ContainerJobs>
                <div>
                <button onClick={this.props.goCarrinho}>Carrinho</button>
                </div>
                {cardRenderizado}
            </ContainerJobs>
        )
    }

} 