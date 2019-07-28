import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import classes from './ProdutoForm.module.css';
import IncludeProductListButton from '../../Buttons/IncludeProductListButton/IncludeProductListButton';
import ListTableProduct from '../../ListTableProducts/ListTableProducts';
import SaveListButton from '../../Buttons/SaveListButton/SaveListButton';

class ProdutoForm extends Component {

    state = {
        produtoLista: {
            produto: 'Arroz',
            quantidade: '1'
        },
        lista: {
            id: 0,
            nomeLista: '',
            listaProdutos: []
        }
        
    }

    produtoChangeHandler = (event) => {
        let produto = event.target.value;
        this.setState(prevState => ({
            produtoLista: {
                ...prevState.produtoLista,
                produto: produto
            }
        }));
    }

    qtdChangeHandler = (event) => {
        let quantidade = event.target.value;
        this.setState(prevState => ({
            produtoLista: {
                ...prevState.produtoLista,
                quantidade: quantidade
            }
        }));
    }

    includeProductToListHandler = () => {
       let temp = this.state.lista;
       temp.listaProdutos.push(this.state.produtoLista);
       this.setState({lista: temp})
    }

    render() {
        return (
            <div style={{margin: 0}}>
                <Card className={classes.Card}>
                <CardHeader style={{fontWeight: 'bold', textAlign: 'center'}}>Cadastre um produto</CardHeader> 
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Label for="nomeLista">Nome da lista:</Label>
                                <Input type="text" />
                                <Label for="nomeLista">Produto:</Label>
                                <Input 
                                    type="select" 
                                    name="select" 
                                    id="produto"
                                    onChange={this.produtoChangeHandler}
                                    value={this.state.produtoLista.produto}>
                                    <option value="Arroz">Arroz</option>
                                    <option value="Feijão">Feijão</option>
                                    <option value="Macarrão">Macarrão</option>
                                    <option value="Refrigerante">Refrigerante</option>
                                    <option value="Carne">Carne</option>
                                    <option value="Queijo">Queijo</option>
                                    <option value="Pão">Pão</option>
                                    <option value="Laranja">Laranja</option>
                                    <option value="Maça">Maça</option>
                                    <option value="Sabão em pó">Sabão em pó</option>
                                </Input>
                                <Label for="quantidade">Quantidade:</Label>
                                <Input 
                                    type="select" 
                                    name="select" 
                                    id="quantidade"
                                    value={this.state.produtoLista.quantidade}
                                    onChange={this.qtdChangeHandler}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Input>
                            </FormGroup>
                        </Form>
                        <IncludeProductListButton 
                            clicked={this.includeProductToListHandler}/>
                    </CardBody>
                </Card>
                <ListTableProduct 
                    lista={this.state.lista.listaProdutos}/>
                <SaveListButton clicked={() => this.props.listaAdicionada()}/>           
            </div>            
        )
    }
    
};

export default ProdutoForm;