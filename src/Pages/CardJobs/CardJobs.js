import axios from "axios";
import React from "react";
import { BASE_URL, header } from "../../Constants/Url";
import { ButtonCard, ContainerButton, ContainerJobs, ContainerRender, DivContainer, Img, DivButoes } from "./style";
import Logo from "../../Components/img/logo-cabecalho.png"
import AddCartImg from "../../assets/carrinho-de-compras.png"
import Carrinho from "../Carrinho/Carrinho";
import { ContainerListCart } from "../Carrinho/style";

export default class CardJobs extends React.Component {
    state = {
        listJobs: [],
        ordenacao: "title",
        pesquisa: "",
        precoMin: "",
        precoMax: "",
        ordenar:1,
        
        
    }

    componentDidMount() {
        this.getAllJobss()
    }

    upDateSearch = (ev) => {
        this.setState({
            pesquisa: ev.target.value
        })

    }
    filterMin = (ev) => {
        this.setState({
            precoMin: ev.target.value
        })
    }
    filterMax = (ev) => {
        this.setState({
            precoMax: ev.target.value
        })
    }
    functionOrder = (ev) => {
        this.setState({
            ordenacao: ev.target.value
        })
    }
    functionOrder2 = (ev) => {
        this.setState({
            ordenar: ev.target.value
        })
    }
    getAllJobss = () => {
        axios.get(`${BASE_URL}/jobs`, header)
            .then((res) => {
                this.setState({ listJobs: res.data.jobs })

            })
            .catch((error) => {
                alert(`Ocorreu um erro, tente novamente`)
            })
    }
    render() {


        const cardRenderizado = this.state.listJobs

            .filter(cards => {
                return cards.title.toLowerCase().includes(this.state.pesquisa.toLowerCase())
            })
            .filter(cards => {
                return this.state.precoMin === "" || cards.price >= this.state.precoMin
              })
            .filter(cards => {
                return this.state.precoMax === "" || cards.price <= this.state.precoMax
              })
            .sort((cards, proxCards) => {
                switch (this.state.ordenacao) {
                    case "title":
                        return this.state.ordenar * cards.title.localeCompare(proxCards.title)
                    case "dueDate":
                        return this.state.ordenar * (new Date(cards.dueDate).getTime() - new Date (proxCards.dueDate))
                    
                    default:
                        return this.state.ordenar * (cards.valor - proxCards.valor)
                }
            })

            .map((cards) => {
                return (

                    <ContainerRender key={cards.id}>
                        <h3>{cards.title}</h3>
                        <p> {cards.dueDate} Preço: {cards.price}</p>
                        <ContainerButton>
                            <button>Ver Detalhes</button>
                            <ButtonCard onClick={() => this.props.onClick(cards)}><img src={AddCartImg} /></ButtonCard>
                        </ContainerButton>
                    </ContainerRender>
                )
            })

        return (
            <div>
                <DivContainer>

                    <div>
                        <Img src={Logo} alt="Logomarca Labeninjas" />
                    </div>



                    <div>
                        <input
                            placeholder="Search"
                            value={this.state.pesquisa}
                            onChange={this.upDateSearch}
                        />

                    </div>


                    <DivButoes>

                        <button onClick={this.props.Home}>PÁGINA INICIAL</button>
                        <div>
                            <button onClick={this.props.goCarrinho}>Carrinho</button>
                        </div>
                    </DivButoes>

                </DivContainer>
                <div>
                    <input
                        type="number"
                        placeholder="Valor Minimo"
                        value={this.state.precoMin}
                        onChange={this.filterMin}
                    />


                </div>
                <div>
                    <input
                        type="number"
                        placeholder="Valor Maximo"
                        value={this.state.precoMax}
                        onChange={this.filterMax}
                    />

                </div>
                <div>
                    <span>
                    <label form="sort">Ordenação </label>
                    <select name="sort"
                     value={this.state.ordenacao} 
                     onChange={this.functionOrder} >
                     
                        <option value="price">Preço </option>
                        <option value="title"> Título</option>
                        <option value="dueDate"> Prazo</option>
                    </select>
                    </span>
                    <div>
                    <select name="order"
                     value={this.state.ordenar} 
                     onChange={this.functionOrder2} >
                     
                        <option value={1}> Crescente </option>
                        <option value={-1}> Decrescente</option>
                        
                    </select>
                    
                    </div>
                </div>
                <ContainerJobs>
                    {cardRenderizado}
                </ContainerJobs>

            </div>
        )
    }

} 