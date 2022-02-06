import React from "react";
import { CartJobs, ContainerJobs} from "./styles";

export default class Jobs extends React.Component{
    render(){
        return(
            <ContainerJobs>
                <h4>{this.props.jobName}</h4>
                    
                <CartJobs>
                <div>
                <p>R$ {this.props.preco},00</p>
                </div>
                <button onClick={this.props.onClick}>deletar</button>
                </CartJobs>
            </ContainerJobs>
        )
    }

} 