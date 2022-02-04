import React from "react";
import { ContainerJobs} from "./styles";


export default class Jobs extends React.Component{
    render(){
        return(
            <ContainerJobs>
                <h4>{this.props.jobName}</h4>
                <p>R$ {this.props.preco},00</p>
                <button onClick={this.props.onClick}>deletar</button>
            </ContainerJobs>
        )
    }

} 