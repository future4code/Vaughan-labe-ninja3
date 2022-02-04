import React from 'react'
import Formulario from './Pages/Formulario';
import CardJobs from './Components/CardJobs/CardJobs';
import Carrinho from './Pages/Carrinho/Carrinho';
import LandingPage from './Pages/LandingPage'
import Global from './AppStyled'

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
	goToHome = () => {
		this.setState({page: "Home"})
	}
	goToContratacao = () => {
		this.setState({page: "Contratacao"})
	}
	goToCadastro = () => {
		this.setState({page: "Cadastro"})
	}
	goToCarrinho = () => {
		this.setState({page: "Carrinho"})
	}
	ChangeScreen = () => {
		switch (this.state.page) {
			case "Home":
				return <LandingPage contratar={this.goToContratacao} cadastrar={this.goToCadastro}/>
			case "Contratacao":
				return <CardJobs onClick={this.addInCart} goCarrinho={this.goToCarrinho}/>
			case "Cadastro":
				return <Formulario Home={this.goToHome}/>
			case "Carrinho":	
				return <Carrinho priceAll={this.state.priceAll} cart={this.state.cart} Home={this.goToHome}
				deleteCards={this.deleteCards} voltar={this.goToContratacao} service={this.serviceContrated}/>
			default:
				return "Home"
		}
	}
	render() {

		return (
			<>
			    <Global />
				{this.ChangeScreen()}
			</>
		)
	}
}

export default App;