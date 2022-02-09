import React from 'react'
import Formulario from './Pages/Formulario/Formulario';
import CardJobs from './Pages/CardJobs/CardJobs';
import Carrinho from './Pages/Carrinho/Carrinho';
import LandingPage from './Pages/Home/LandingPage'
import Global from './AppStyled'
import PaginaDetalhes from './Pages/Detalhes/PaginaDetalhes';


class App extends React.Component {
	state = {
		page: "Home",
		cart: [],
		priceAll: 0,
		detailId: ""
	}

	componentDidMount() {
		this.seizeJobs()
	}

	addInCart = (cards) => {
		const cartJobs = this.state.cart.find(jobs => cards.id === jobs.id)
		if (cartJobs) {
			alert(`O serviço ${cards.title} já foi adicionado!`)
		} else {
			const addJobCart = window.confirm(`Quer adicionar ${cards.title} ao carrinho?`)
			if (addJobCart) {
			
					const newCart = [cards, ...this.state.cart]
					this.setState({ cart: newCart })
					localStorage.setItem("jobs", JSON.stringify(newCart))
					this.valueAll(cards.price)
					localStorage.setItem("total", this.state.priceAll + cards.price)
			}
		}
	}

seizeJobs = () => {
	const jobs = JSON.parse(localStorage.getItem("jobs"))
	if(jobs){
	this.setState({ cart: jobs })
	}
	const newValue = Number(localStorage.getItem("total"))
	if(newValue){
	this.setState({ priceAll: newValue })
	}
}
valueAll = (price) => {
	this.setState({ priceAll: this.state.priceAll + price })
}
deleteCards = (removeItem) => {
	const deleteJobCart = window.confirm("Tem certeza que deseja tirar o item do carrinho?")
	if (deleteJobCart) {
		const newCart = this.state.cart.filter(item => {
			if (item.id !== removeItem.id) {
				return item
			}
		})
		localStorage.setItem("jobs", JSON.stringify(newCart))
		this.setState({ cart: newCart })
		this.setState({ priceAll: this.state.priceAll - removeItem.price })
		localStorage.setItem("total", this.state.priceAll - removeItem.price)
	}
}
serviceContrated = () => {
	this.setState({ cart: [] })
	localStorage.setItem("jobs", JSON.stringify([]))
	localStorage.setItem("total", [])
	alert("Agradecemos a preferência, volte sempre!")
	this.setState({ priceAll: 0 })
}
goToHome = () => {
	this.setState({ page: "Home" })
}
goToContratacao = () => {
	this.setState({ page: "Contratacao" })
}
goToCadastro = () => {
	this.setState({ page: "Cadastro" })
}
goToCarrinho = () => {
	this.setState({ page: "Carrinho" })
}
goToDetails = (id) => {
	this.setState({ page: "Detalhes", detailId: id })
}

ChangeScreen = () => {
	switch (this.state.page) {
		case "Home":
			return <LandingPage contratar={this.goToContratacao} cadastrar={this.goToCadastro} />
		case "Contratacao":
			return <CardJobs addInCart={this.addInCart} goCarrinho={this.goToCarrinho} goToDetails={this.goToDetails} Home={this.goToHome} />
		case "Cadastro":
			return <Formulario Home={this.goToHome} />
		case "Carrinho":
			return <Carrinho priceAll={this.state.priceAll} cart={this.state.cart} Home={this.goToHome}
				deleteCards={this.deleteCards} voltar={this.goToContratacao} service={this.serviceContrated} />
		case "Detalhes":
			return <PaginaDetalhes id={this.state.detailId} contratar={this.goToContratacao} addCart={this.addInCart}
			 Home={this.goToHome} goToCarrinho={this.goToCarrinho}/>
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