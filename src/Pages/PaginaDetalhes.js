import React from "react"
import styled from "styled-components"
import axios from "axios"
import { BASE_URL, header } from "../Constants/Url"
import Logo from "../assets/logo-cabecalho.png"

const DivContainer = styled.div`
    background-color: #1B0034;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin-bottom: 30px;
`
const Img = styled.img`
    height: 3rem;
`

const StyleCard = styled.div`
  margin: 20px;
  width: 20%;
  height: 20rem;
  background-color: #D1C7DB;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #BBB0C6;
  }
`
const StyleDetail = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
export const BotaoHome = styled.button`
    color: #F8E59B;
    background: transparent;
    border-radius: 15px;
    border: none;
    width: 120px;
    height: 30px;
&:hover {
    cursor: pointer;
    background-color: rgba(255,255,255, 0.25);
}
`
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
    this.setState({ isLoading: true })
    axios.get(`${BASE_URL}/jobs/${this.props.id}`, header)
      .then((res) => {
        this.setState({ listJobs: res.data })
        this.setState({ isLoading: false })
      })
      .catch((err) => {
        this.setState({ isLoading: false })
        alert("ocorreu algum erro")
      })
  }

  render() {
    const renderedList = this.state.listJobs.paymentMethods && this.state.listJobs.paymentMethods.map((cards) => {
      return  <div key={cards.id}>{cards}</div>
    })

    return (
      <>
       <DivContainer>
                <div>
                    <Img src={Logo} alt="Logomarca Labeninjas" />
                </div>
                <BotaoHome onClick={this.props.Home}>PÁGINA INICIAL</BotaoHome>
            </DivContainer>
            <StyleDetail>
      <StyleCard>
          {
                    this.state.listJobs.title && <h1>{this.state.listJobs.title}</h1>
                }
                {
                    this.state.listJobs.price && <p>Preço: R${this.state.listJobs.price.toFixed(2)}</p>
                }
                {
                    this.state.listJobs.dueDate && <p>Prazo: {this.state.listJobs.dueDate}</p>
                }
                {
                    this.state.listJobs.description && <p>{this.state.listJobs.description}</p>
                }
       {renderedList}
      </StyleCard>
      </StyleDetail>
      </>

    )
  }
}

export default ServiceDetail