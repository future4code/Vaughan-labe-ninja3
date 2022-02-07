import React from "react"
import axios from "axios"
import { BASE_URL, header } from "../../Constants/Url"
import Logo from "../../assets/logo-cabecalho.png"
import { newDate } from "../../Components/Outros/Data"
import Carrinho from "../../assets/car-de-compras2.png"
import { Typography } from "@material-ui/core"
import { DivContainer, Img, ButtonContrat, StyleCard, StyleDetail, BotaoHome, ButtonCard, ButtonDirection, ButtonCard2, ContainerButton, TextoInfo, Info, H5, Container, ChipStyle} from "./style";
import { ThemeProvider } from '@material-ui/core/styles';
import {Theme} from  '../../Components/Outros/Theme'

class ServiceDetail extends React.Component {
  state = {
    isLoading: true,
    listJobs: {},
    isOnCart: false
  }

  componentDidMount() {
    this.getJob()
  }

  getJob = () => {
    axios.get(`${BASE_URL}/jobs/${this.props.id}`, header)
      .then((res) => {
        this.setState({ listJobs: res.data })
      })
      .catch((err) => {
        alert(err, "Ocorreu algum erro!")
      })
  }

  render() {
    const renderedList = this.state.listJobs.paymentMethods && this.state.listJobs.paymentMethods.map((cards) => {
      return <ChipStyle color="primary" key={cards.id} label={cards} />
    })

    return (
      <>
      <ThemeProvider theme={Theme}>
        <DivContainer>
          <div>
            <Img src={Logo} alt="Logomarca Labeninjas" />
          </div>
          <ContainerButton>

          <BotaoHome onClick={this.props.Home}>PÁGINA INICIAL</BotaoHome>
          <ButtonCard2 onClick={this.props.goToCarrinho}><img src={Carrinho} /></ButtonCard2>
          
          </ContainerButton>
        </DivContainer>
        <StyleDetail>
          <StyleCard>
            <div>
              {this.state.listJobs.title && <h1>{this.state.listJobs.title}</h1>}
            </div>

            
            <TextoInfo>
            <Container>
                <Typography align="center" variant="body1"><H5>Aceita:</H5></Typography>
                {renderedList}
            </Container>
            
            <Info>
              {this.state.listJobs.price && <H5>Por: R${this.state.listJobs.price.toFixed(2)}</H5>}
            
              {this.state.listJobs.dueDate && <H5>Até {newDate(this.state.listJobs.dueDate)}</H5>}
            </Info>

              {this.state.listJobs.description && <H5>Descrição: {this.state.listJobs.description}</H5>}
            </TextoInfo>

          </StyleCard>

          <ButtonDirection>
            <ButtonCard onClick={() => this.props.addCart(this.state.listJobs)}> ADICIONAR AO CARRINHO</ButtonCard>
          </ButtonDirection>
          <ButtonContrat onClick={this.props.contratar}> ⬅ VOLTAR PARA LISTA</ButtonContrat>
        </StyleDetail>

      </ThemeProvider>
      </>
    )
  }
}

export default ServiceDetail