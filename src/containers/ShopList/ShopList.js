import React, {Component} from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import ListTable from '../../components/ListTable/ListTable';
import {Row, Col } from 'reactstrap';
import IncludeListButton from '../../components/Buttons/IncludeListButton/IncludeListButton';
import BackButton from '../../components/Buttons/BackButton/BackButton';
import ProdutoForm from '../../components/Forms/ProdutoForm/ProdutoForm';
import axios from 'axios';


class ShopList extends Component {

    state = {
        lista: {
            id: 0,
            nomeLista: '',
            listaProdutos: []
        },
        listas: [],
        modoCriacaoLista: false
    }

    addListaHandler = () => {
        this.getListaHandler();
        this.setState({modoCriacaoLista: !this.state.modoCriacaoLista});
    }

    criacaoListaHandler = () => {
        this.setState({modoCriacaoLista: !this.state.modoCriacaoLista});   
    }

    getListaHandler = () => {
        axios.get('https://my-shop-list-e15f8.firebaseio.com/listas.json')
        .then(response => {
            let lista = [];
            Object.keys(response.data).map(
                chave => {
                    lista.push(response.data[chave]);
                }
            )
            this.setState({listas: lista});
        })
        .catch(error => {
            
        });
    }

    componentDidMount () {
       this.getListaHandler();
    }

    render() {

        let content = null;
        let navigationButton = null;

        if(this.state.modoCriacaoLista) {
            content = <ProdutoForm
                listaAdicionada={this.addListaHandler}></ProdutoForm>;
            navigationButton = <BackButton
            clicked={this.criacaoListaHandler}></BackButton>
        } else {
            navigationButton = <IncludeListButton 
                clicked={this.criacaoListaHandler}></IncludeListButton>
            content = <ListTable 
            lista={this.state.listas}/>
        }

        return(
            <div>
                <Toolbar />
                <Row style={{marginLeft: 0, marginRight: 0}}>
                    <Col 
                        md="12" 
                        style={{paddingLeft: 0, paddingRight: 0, marginTop: '5%', marginBottom: '2%'}}
                        className="clearfix">
                        {navigationButton}
                    </Col>
                </Row>

                <Row style={{marginLeft: 0, marginRight: 0}}>
                    <Col 
                        md="12" 
                        style={{paddingLeft: 0, paddingRight: 0}}>
                           {content}                  
                    </Col>
                </Row>
            </div>
        );
    }

}


export default ShopList;