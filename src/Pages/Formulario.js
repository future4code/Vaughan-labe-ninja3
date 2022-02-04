import React from "react";
import styled from "styled-components";
import { BASE_URL, Header } from "../Constants/urls";
import Logo from "../assets/logo-cabecalho.png"
import axios from "axios";

const DivBackground = styled.div`
    background: #1B0034;
`

const DivHeader = styled.div`
    background-color: #1B0034;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin-bottom: 30px;
    border-left: 1px solid white;
`
const Img = styled.img`
    height: 3rem;
`

const DivButoes = styled.div`
    display: flex;
    gap: 10px;
`

const Container = styled.div`

  width: 600px;
  height: 500px;
  background-color: #F0F0F0;
  padding: 40px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #1B0034 ;
  
  /* &:hover {
    background-color: #D1C7DB; */
`

const ContainerAlinhar = styled.div`
  margin-top: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Bloco = styled.div`
 display: flex;
 flex-direction: column;
 
 
`
const Input1 =styled.div`
margin-left: 60px;


`
const Input2 =styled.div`
margin-left: 60px;

`
const Input3 =styled.div`
margin-left: 60px;


`
const Input4 =styled.div`
margin-left: 60px;


`
const Input5 =styled.div`
margin-left: 60px;


`

class Formulario extends React.Component {
    state = {
        titulo: "",
        descricao: "",
        preco: "",
        pagamento: [],
        prazo: ""
    };
    inputTitulo = (e) => {
        this.setState({ titulo: e.target.value });
    };

    inputDescricao = (e) => {
        this.setState({ descricao: e.target.value });
    };

    inputPreco = (e) => {
        this.setState({ preco: e.target.valueAsNumber });
    };

    inputPagamento = (e) => {
        const formaPagamento = [...this.state.pagamento]
        formaPagamento.push(e.target.value)
        this.setState({ pagamento: formaPagamento });
    };
    inputPrazo = (e) => {
        this.setState({ prazo: e.target.value });
    };

    /* componentDidMount() {
        this.cadastrarNinja()
    } */

    cadastrarNinja = () => {
        const body = {
            title: this.state.titulo,
            description: this.state.descricao,
            price: this.state.preco,
            paymentMethods: this.state.pagamento,
            dueDate: this.state.prazo
        }
        console.log(body)
        axios.post(`${BASE_URL}/jobs`, body, Header)
            .then((response) => {
                alert("Ninja cadastrado com sucesso!")
                this.setState({ preco: "", titulo: "", descricao: "", pagamento: "", prazo: "" })
                console.log(response.data.jobs)
            })
            .catch((error) => {
                alert(`Erro ao cadastrar Ninja, tente novamente! 
                      ${error.data}`)
                console.log(error.data)

            })
    }

    render() {
        return (
            <DivBackground>

            <DivHeader>

                <div>
                    <Img src={Logo} alt="Logomarca Labeninjas" />
                </div>

                <DivButoes>
                    <button >PÁGINA INICIAL</button>
                </DivButoes>

            </DivHeader>
         
            <ContainerAlinhar>
            <Container>
                <h1>Cadastre o seu serviço</h1>
                <Bloco>
                    <Input1>
                        <input
                            value={this.state.titulo}
                            placeholder="Título*"
                            onChange={this.inputTitulo}
                        />
                    </Input1>
                    <Input2>
                        <input
                            value={this.state.descricao}
                            placeholder="Descrição*"
                            onChange={this.inputDescricao}
                        />
                    </Input2>
                    <input type="number"
                        value={this.state.preco}
                        placeholder="Preço*"
                        onChange={this.inputPreco}
                    />
                    <Input3>
                        <select value={this.state.pagamento}
                            onChange={this.inputPagamento}>
                            <option value="" disabled selected>Formas de pagamento*</option>
                            <option value="texto1">Cartão de crédito</option>
                            <option value="texto2">Cartão de Débito</option>
                            <option value="texto3">Pix</option>
                            <option value="texto4">PayPal</option>
                            <option value="texto5">Boleto</option>
                        </select>
                    </Input3>
                    <Input4>
                        <input type="date"
                            value={this.state.prazo}
                            placeholder="dd/mm/aaaa"
                            onChange={this.inputPrazo}>
                        </input>
                    </Input4>
                    <Input5>
                        <button onClick={this.cadastrarNinja}> Cadastrar </button>
                    </Input5>
                </Bloco>
            </Container>
            </ContainerAlinhar>

            </DivBackground>
            
        )  
    }
}
export default Formulario;