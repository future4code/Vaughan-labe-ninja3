import React from "react"
import { DivBackground, DivHeader, Img, DivButoes, Container, CheckboxStyle, FormContainer, ButtonForm, DivContainer } from "./FormStyle"
import { BASE_URL, header } from "../../Constants/Url";
import Logo from "../../Components/img/logo-cabecalho.png"
import axios from "axios"
import { Checkbox } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { FormGroup } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import TextField from '@material-ui/core/TextField'
import InputAdornment from "@material-ui/core/InputAdornment"
import { InputLabel } from "@material-ui/core";


class Formulario extends React.Component {
    state = {
        titulo: "",
        descricao: "",
        preco: "",
        prazo: "",
        credito: false,
        debito: false,
        boleto: false,
        paypal: false,
        pix: false,
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

    inputPrazo = (e) => {
        this.setState({ prazo: e.target.value });
    };

    inputPagamento = (e) => {
        this.setState({ pagamento: e.target.value })
    }

    inputCredito = (event) => {
        this.setState({ credito: event.target.checked });
    };

    inputDebito = (event) => {
        this.setState({ debito: event.target.checked });
    };

    inputBoleto = (event) => {
        this.setState({ boleto: event.target.checked });
    };

    inputPaypal = (event) => {
        this.setState({ paypal: event.target.checked });
    };

    inputPix = (event) => {
        this.setState({ pix: event.target.checked });
    };

    formasDePagamento = () => {
        const arrayDePagamentos = [];

        if (this.state.credito) {
            arrayDePagamentos.push("Cartão de Crédito");
        }

        if (this.state.debito) {
            arrayDePagamentos.push("Cartão de Débito");
        }

        if (this.state.boleto) {
            arrayDePagamentos.push("Boleto");
        }

        if (this.state.paypal) {
            arrayDePagamentos.push("Paypal");
        }

        if (this.state.pix) {
            arrayDePagamentos.push("Pix");
        }

        return arrayDePagamentos;
    };

    cadastrarNinja = () => {
        const body = {
            title: this.state.titulo,
            description: this.state.descricao,
            price: this.state.preco,
            paymentMethods: this.formasDePagamento(),
            dueDate: this.state.prazo
        }

        axios.post(`${BASE_URL}/jobs`, body, header)
            .then((response) => {
                alert("Ninja cadastrado com sucesso!")
                this.setState({ preco: "", titulo: "", descricao: "", prazo: "", credito: false, debito: false, boleto: false, paypal: false, pix: false })
            })
            .catch((error) => {
                alert(`Erro ao cadastrar Ninja, tente novamente! 
${error.response.data.message}`)
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

                <DivContainer>
                    <Container>
                        <h1>Cadastre seu serviço</h1>

                        <FormContainer>
                            <TextField
                                value={this.state.titulo}
                                onChange={this.inputTitulo}
                                required
                                label="Título"
                                variant="outlined"
                                size="small"
                                margin="normal"
                            />
                            <TextField
                                value={this.state.descricao}
                                onChange={this.inputDescricao}
                                required
                                label="Descrição"
                                variant="outlined"
                                size="small"
                                margin="normal"
                            />
                            <TextField
                                value={this.state.preco}
                                onChange={this.inputPreco}
                                required
                                label="Preço"
                                variant="outlined"
                                size="small"
                                margin="normal"
                                type="number"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                                }}
                            />

                            <CheckboxStyle>
                                <Typography>Formas de Pagamento</Typography>
                                <FormGroup color ="secondary">
                                    <FormControlLabel
                                        control={<Checkbox defaultChecked />}
                                        onChange={this.inputCredito}
                                        checked={this.state.credito}
                                        label="Cartão de Crédito" />
                                    <FormControlLabel
                                        control={<Checkbox defaultChecked />}
                                        onChange={this.inputDebito}
                                        checked={this.state.debito}
                                        label="Cartão de Débito" />
                                    <FormControlLabel
                                        control={<Checkbox defaultChecked />}
                                        onChange={this.inputBoleto}
                                        checked={this.state.boleto}
                                        label="Boleto" />
                                    <FormControlLabel
                                        control={<Checkbox defaultChecked />}
                                        onChange={this.inputPaypal}
                                        checked={this.state.paypal}
                                        label="Paypal" />
                                    <FormControlLabel
                                        control={<Checkbox defaultChecked />}
                                        onChange={this.inputPix}
                                        checked={this.state.pix}
                                        label="Pix" />
                                </FormGroup>
                            </CheckboxStyle>

                            <TextField
                                value={this.state.prazo}
                                onChange={this.inputPrazo}
                                required
                                label="Prazo"
                                variant="outlined"
                                size="small"
                                margin="normal"
                                type="date"

                                InputLabelProps={{ shrink: true }}
                            />

                        </FormContainer>

                            <div>
                                <ButtonForm onClick={this.cadastrarNinja}> Cadastrar </ButtonForm>
                            </div>

                    </Container>
                </DivContainer>

            </DivBackground>
        )
    }
}
export default Formulario;