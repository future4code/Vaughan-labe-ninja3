import React from "react"
import axios from "axios"
import { BASE_URL, header } from "../Constants/Url"
import Carregando from "../Components/Outros/Carregando"
import { newDate } from "../Components/Outros/Data"


class ServiceDetail extends React.Component {
  state = {
    isLoading: true,
    card: {},
    isOnCart: false
  }

  componentDidMount() {
    this.getJob()
  }


  getJob = () => {
    this.setState({ isLoading: true })

    axios.get(`${BASE_URL}/jobs/${this.props.id}`, header)
      .then((res) => {
        this.setState({ card: res.data })
        this.setState({ isLoading: false })
      })
      .catch((err) => {
        this.setState({ isLoading: false })
        alert(err.response.data.message)
      })
  }

  render() {
    const paymentMethodsComponents = this.state.card.paymentMethods && this.state.card.paymentMethods.map((value) => {
      return <div color="primary" key={value} label={value} />
    })

    return (
      <div>
        {this.state.isLoading ? <Carregando /> : (

          <div>
            <p>{this.state.card.title}</p>

            <div>
              <p>Aceita: </p>
              {paymentMethodsComponents}
            </div>

            <p>
              Até {newDate(this.state.card.dueDate)} por <b>R${this.state.card.price.toFixed(2)}</b>
            </p>

            <div>
              <p>{this.state.job.description}</p>
            </div>

            <div>
              <button
                onClick={() => this.props.addToCart(this.state.card)}
                variant="contained"
                color="primary"
                disabled={this.state.isOnCart}
              >
                Adicionar ao Carrinho
              </button>
              <button
                onClick={() => this.props.changePage("list")}
                variant="outlined"
                color="primary"
              >
                Voltar para Lista
              </button>
            </div>
          </div>
        )}
      </div>

    )
  }
}

export default ServiceDetail