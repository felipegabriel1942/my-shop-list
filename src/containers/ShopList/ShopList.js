import React, {Component} from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import ListTable from '../../components/ListTable/ListTable';
import {Row, Col } from 'reactstrap';
import IncludeListButton from '../../components/Buttons/IncludeListButton/IncludeListButton';


class ShopList extends Component {

    state = {
        listas: [
            {
                id: 1,
                nome: 'Lista 1 cadastrada'
            },
            {
                id: 2,
                nome: 'Lista 2 cadastrada'
            },
            {
                id: 3,
                nome: 'Lista 3 cadastrada'
            },

        ]
    }

    render() {
        return(
            <div>
                <Row>
                    <Col 
                        md="12" 
                        style={{paddingRight: 0}}>
                        <Toolbar />
                    </Col>                    
                </Row>

                <Row>
                    <Col 
                        md="12" 
                        style={{paddingRight: 0, marginTop: '5%', marginBottom: '2%'}}
                        className="clearfix">
                        <IncludeListButton></IncludeListButton>
                    </Col>
                </Row>

                <Row>
                    <Col 
                        md="12" 
                        style={{paddingRight: 0}}>
                        <ListTable 
                            lista={this.state.listas}/>
                    </Col>
                </Row>
            </div>
        );
    }

}


export default ShopList;