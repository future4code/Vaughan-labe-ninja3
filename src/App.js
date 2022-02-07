import React from 'react'
import Formulario from './Pages/Formulario/Formulario';
import CardJobs from './Pages/CardJobs/CardJobs';
import Carrinho from './Pages/Carrinho/Carrinho';
import LandingPage from './Pages/LandingPage'
import Global from './AppStyled'

class App extends React.Component {
	state = {
		page: "Carrinho",
		cart: [],
		priceAll: 0,

	}

	componentDidMount() {
		this.seizeJobs()
	}
<<<<<<< HEAD
<<<<<<< HEAD
	addInCart = (cards) =>{
		if(cards.quantidade !== 1){
		cards.quantidade = 1
		const newCart = [...this.state.cart, cards]
		this.setState({cart: newCart})
		localStorage.setItem("jobs", JSON.stringify(newCart))
		this.valueAll(cards.price)
		localStorage.setItem("value", JSON.stringify(this.state.priceAll + cards.price))
=======
	addInCart = (cards) => {
		const cartJobs = this.state.cart.find(jobs => cards.id === jobs.id)
		if (cartJobs) {
			alert(`O serviço ${cards.title} já foi adicionado`)
		} else {
			const addJobCart = window.confirm(`Quer adicionar ${cards.title} ao carrinho?`)
			if (addJobCart) {
				if (cards.quantidade !== 1) {
					cards.quantidade = 1
					const newCart = [cards, ...this.state.cart]
					this.setState({ cart: newCart })
					localStorage.setItem("jobs", JSON.stringify(newCart))
					this.valueAll(cards.price)
					localStorage.setItem("total", this.state.priceAll + cards.price)
				}
			}
>>>>>>> c6592e6e82148706e9bd835809a6544754c85d5f
		}
	}
	seizeJobs = () => {
		const jobs = JSON.parse(localStorage.getItem("jobs"))
		this.setState({ cart: jobs })

		const newValue = Number(localStorage.getItem("total"))
		this.setState({ priceAll: newValue })
	}
	valueAll = (price) => {
		this.setState({ priceAll: this.state.priceAll + price })
	}
	deleteCards = (removeItem) => {
		const deleteJobCart = window.confirm("tem certeza que deseja tirar o item do carrinho?")
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
	ChangeScreen = () => {
		switch (this.state.page) {
			case "Home":
				return <LandingPage contratar={this.goToContratacao} cadastrar={this.goToCadastro} />
			case "Contratacao":
				return <CardJobs onClick={this.addInCart} goCarrinho={this.goToCarrinho} Home={this.goToHome} />
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
<<<<<<< HEAD
=======
>>>>>>> 4a55dbc0f4497179f019af81a67179407d7a29c0
=======
>>>>>>> c6592e6e82148706e9bd835809a6544754c85d5f


		return (
			<>

				<Global />
				{this.ChangeScreen()}
			</>
		)
	}

}
export default App;