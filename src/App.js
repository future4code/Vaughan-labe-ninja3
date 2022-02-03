import React from 'react'
import LandingPage from './Pages/LandingPage'
import styled from 'styled-components'
import CardJobs from './Components/CardJobs/CardJobs';
import Carrinho from './Pages/Carrinho/Carrinho';

const ContainerLanding = styled.div`
	background: #F0F0F0;

`

class App extends React.Component {
	state = {
		page: "Carrinho",
		cart: [],
		priceAll: 0
	}

	componentDidMount () {
		this.seizeJobs()
	}
	addInCart = (cards) =>{
		if(cards.quantidade !== 1){
		cards.quantidade = 1
		const newCart = [...this.state.cart, cards]
		this.setState({cart: newCart})
		localStorage.setItem("jobs", JSON.stringify(newCart))
		this.valueAll(cards.price)
		localStorage.setItem("value", JSON.stringify(this.state.priceAll + cards.price))
		}
	}
	seizeJobs = () => {
		const jobs = JSON.parse(localStorage.getItem("jobs"))
		this.setState({cart: jobs})
		const value = JSON.parse(localStorage.getItem("value"))
		this.setState({priceAll: value})
	}
	valueAll = (price) => {
		this.setState({priceAll: this.state.priceAll + price})
	}
	deleteCards = (removeItem) => {
		const newCart = this.state.cart.filter(item =>{
			if(item.id !== removeItem.id){
				return item
			}
		})
		localStorage.setItem("jobs", JSON.stringify(newCart))
		this.setState({cart: newCart})
		this.setState({priceAll: this.state.priceAll - removeItem.price})
		localStorage.setItem("value", JSON.stringify(this.state.priceAll - removeItem.price))
	}
	serviceContrated = () => {
		this.setState({cart: []})
		localStorage.setItem("jobs", JSON.stringify([]))
		localStorage.setItem("value", JSON.stringify([]))
		alert("Agradecemos a preferência, volte sempre!")
		this.setState({priceAll: 0})
	}
	goToCarrinho = () => {
		this.setState({page: "Carrinho"})
	}
	goToContratacao = () => {
		this.setState({page: "Contratacao"})
	}

	ChangeScreen = () => {
		switch (this.state.page) {
			case "Contratacao":
				return <CardJobs onClick={this.addInCart} goCarrinho={this.goToCarrinho}/>
			case "Carrinho":	
				return <Carrinho priceAll={this.state.priceAll} cart={this.state.cart} 
				deleteCards={this.deleteCards} voltar={this.goToContratacao} service={this.serviceContrated}/>
			default:
				return "Home"
		}
	}
	render() {

		return (
			<div>
				<ContainerLanding>
				<LandingPage/>
				</ContainerLanding>
				{this.ChangeScreen()}
			</div>
		)
	}
}

export default App;