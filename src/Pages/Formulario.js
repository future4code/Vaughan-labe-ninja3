import React from "react";
import styled from "styled-components";
import { BASE_URL, header } from "../Constants/Url";
import Logo from "../Components/img/logo-cabecalho.png"
import axios from "axios";
import Checkbox from '@material-ui/core/Checkbox';



const DivBackground = styled.div`
    background: #1B0034;
    height: 100vh;
`

const DivHeader = styled.div`
    background-color: #1B0034;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin-bottom: 30px;
    border-bottom: 1px solid #F0F0F0;
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
 gap: 20px;
 padding: 45px;
 align-items: center
`
const Input = styled.input`
 width: 400px;
 border-radius:10px ;
 border: 0;
 height: 26px;
 padding: 15px;
 font-size: inherit;
`
const Select = styled.select`
 width: 400px;
 border-radius:10px;
 border: 0px;
 height: 26px;
 font-size: inherit;
 
`
const ButtonForm = styled.button`
left: 40px;
width: 180px;
background-color: #1B0034;
color: white;
font-size: inherit;
border: none;
border-radius:20px ;
height: 30px;
 &:hover{
     background-color:black ;
     color:white;
     cursor:pointer
 }
`
const Fieldset = styled.fieldset`


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

    /* inputPagamento = (e) => {
        const formaPagamento = [...this.state.pagamento]
        formaPagamento.push(e.target.value)
        this.setState({ pagamento: formaPagamento });
    }; */
    inputPrazo = (e) => {
        this.setState({ prazo: e.target.value });
    };
    inputPagamento =(e)=>{
        this.setState({pagamento:[...this.state.pagamento, e.target.value]})
        
    }


    cadastrarNinja = () => {
        const body = {
            title: this.state.titulo,
            description: this.state.descricao,
            price: this.state.preco,
            paymentMethods: this.state.pagamento,
            dueDate: this.state.prazo
        }
        console.log(body)
        axios.post(`${BASE_URL}/jobs`, body, header)
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
                        <button onClick={this.props.Home}>PÁGINA INICIAL</button>
                    </DivButoes>

                </DivHeader>

                <ContainerAlinhar>
                    <Container>
                        <h1>Cadastre o seu serviço</h1>
                        <Bloco>
                            <div>
                                <Input
                                    type="text"
                                    value={this.state.titulo}
                                    placeholder="Título*"
                                    onChange={this.inputTitulo}
                                />
                            </div>
                            <div>

                                <Input
                                    value={this.state.descricao}
                                    placeholder="Descrição*"
                                    onChange={this.inputDescricao}
                                />
                            </div>
                            <div>
                                <Input type="number"
                                    value={this.state.preco}
                                    placeholder="Preço*"
                                    onChange={this.inputPreco}
                                />
                            </div>
                            <div>
                               
                                <Fieldset value={this.state.pagamento} onChange={this.inputPagamento} placeholder="Formas de Pagamento" >
                                    <div><label> <label> Formas de Pagamento</label></label></div>
                                    <div><input type="checkbox" id="debito" value="debito" ></input><label> Cartão de Débito</label></div>
                                    <div><input type="checkbox" id="credito" value="credito" ></input><label> Cartão de Crédito</label></div>
                                    <div><input type="checkbox" id="paypal" value="paypal" ></input><label> PayPal</label></div>
                                    <div><input type="checkbox" id="boleto" value="boleto" ></input><label> Boleto</label></div>
                                    <div> <input type="checkbox" id="pix" value="pix" ></input><label> Pix</label></div>
                                </Fieldset>

                            </div>
                            <div>
                                <Input type="date"
                                    value={this.state.prazo}
                                    placeholder="dd/mm/aaaa"
                                    onChange={this.inputPrazo}>
                                </Input>
                            </div>
                            <div>
                                <ButtonForm onClick={this.cadastrarNinja}> Cadastrar </ButtonForm>
                            </div>
                        </Bloco>
                    </Container>
                </ContainerAlinhar>

            </DivBackground>

        )
    }
}
export default Formulario;