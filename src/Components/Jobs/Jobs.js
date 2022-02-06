import React from "react";
import { ButtonJobs, CartJobs, ContainerJobs } from "./styles";
import lixeira from "../../assets/trash.png"

export default class Jobs extends React.Component{
    render(){
        return(
            <ContainerJobs>
                <h3>{this.props.jobName}</h3>
                <CartJobs>
                <h4>R$ {this.props.preco},00</h4>
                <ButtonJobs onClick={this.props.onClick}><img src={lixeira}/></ButtonJobs>
                </CartJobs>
            </ContainerJobs>
        )
    }

} 