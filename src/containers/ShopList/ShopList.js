import React, {Component} from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import ListTable from '../../components/ListTable/ListTable';
import { Container, Row, Col } from 'reactstrap';
import IncludeListButton from '../../components/Buttons/IncludeListButton/IncludeListButton';


class ShopList extends Component {

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
                        <ListTable/>
                    </Col>
                </Row>
            </div>
        );
    }

}


export default ShopList;