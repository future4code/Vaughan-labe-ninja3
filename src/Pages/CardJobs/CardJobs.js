import axios from "axios";
import React from "react";
import {newDate} from "../../Components/Outros/Data"
import { BASE_URL, header } from "../../Constants/Url";
import { ButtonCard, ButtonCard2, ContainerButton, ContainerJobs, BotaoHome, BuscaContainer, InputPreco, ContainerRender, DivContainer, Img, DivButoes, PosicaoSelect, PosicaoInput, Geral, Container, StyleSelect} from "./style";
import Logo from "../../assets/logo-cabecalho.png"
import AddCartImg from "../../assets/carrinho-de-compras.png"
import Carrinho from "../../assets/car-de-compras2.png"
import InputBase from '@material-ui/core/InputBase'
import { InputAdornment } from "@material-ui/core"
import { ThemeProvider } from '@material-ui/core/styles';
import {Theme} from  '../../Components/Outros/Theme';
import Loading from "../../Components/Outros/Loading/Loading";

export default class CardJobs extends React.Component {
    state = {
        listJobs: [],
        ordenacao: "title",
        pesquisa: "",
        precoMin: "",
        precoMax: "",
        ordenar: 1,
        loading: false
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
        this.setState({loading: true})
        axios.get(`${BASE_URL}/jobs`, header)
            .then((res) => {
                this.setState({ listJobs: res.data.jobs })
                this.setState({loading: false})
            })
            .catch((error) => {
                alert(`Ocorreu um erro, tente novamente!`)
                this.setState({loading: false})
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
                        return this.state.ordenar * (new Date(cards.dueDate).getTime() - new Date(proxCards.dueDate))
                    default:
                        return this.state.ordenar * (cards.price - proxCards.price)
                }
            })

            .map((cards) => {
                return (
                    <ContainerRender key={cards.id}>
                        <h3>{cards.title}</h3>
                        <p> Até {newDate (cards.dueDate)} por R${cards.price}</p>
                        <ContainerButton>
                            <BotaoHome onClick={() => this.props.goToDetails(cards.id)}>VER DETALHES</BotaoHome>
                            <ButtonCard onClick={() => this.props.addInCart(cards)}><img src={AddCartImg}/></ButtonCard>
                        </ContainerButton>
                    </ContainerRender>
                )
            })

        return (
            <Container>
                <ThemeProvider theme={Theme}>
                <DivContainer>
                    <div>
                        <Img src={Logo} alt="Logomarca Labeninjas" />
                    </div>

                    <BuscaContainer>
                        <InputBase
                            inputProps={{ style: { color: 'white', width: '350px' } }}
                            placeholder="Search"
                            value={this.state.pesquisa}
                            onChange={this.upDateSearch}
                        />
                    </BuscaContainer>

                    <DivButoes>
                        <BotaoHome onClick={this.props.Home}>PÁGINA INICIAL</BotaoHome>
                        <div>
                            <ButtonCard2 onClick={this.props.goCarrinho}><img src={Carrinho}/></ButtonCard2>
                        </div>
                    </DivButoes>
                </DivContainer>

                <Geral>
                <PosicaoSelect>
                <div>
                    <label form="sort">Ordenar por: </label>
                    <StyleSelect 
                        name="sort"
                        value={this.state.ordenacao}
                        onChange={this.functionOrder}>

                        <option value="title">Título</option>
                        <option value="price">Preço</option>
                        <option value="dueDate">Prazo</option>
                    </StyleSelect>
                </div>

                <div>
                    <StyleSelect 
                        name="order"
                        value={this.state.ordenar}
                        onChange={this.functionOrder2} >

                        <option value={1}> Crescente </option>
                        <option value={-1}> Decrescente</option>

                    </StyleSelect>
                </div>
                </PosicaoSelect>
                
                <PosicaoInput>

                <InputPreco
                value={this.state.precoMin}
                onChange={this.filterMin}
                variant="outlined"
                size="small"
                label="Valor Mínimo"
                type="number"
                InputProps={{
                    startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                }}
                />

            <InputPreco
                value={this.state.precoMax}
                onChange={this.filterMax}
                variant="outlined"
                size="small"
                label="Valor Máximo"
                type="number"
                InputProps={{
                    startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                }}
            />

                </PosicaoInput>
                </Geral>

                <ContainerJobs>
                    {this.state.loading? <Loading />: cardRenderizado}
                </ContainerJobs>
                </ThemeProvider>
            </Container>
        )
    }

} 