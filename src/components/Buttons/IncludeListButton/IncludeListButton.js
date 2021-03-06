import React from 'react'
import { Button } from 'reactstrap';



const IncludeListButton = (props) => (
    <Button 
        color="primary"
        className="float-right" 
        style={{marginRight: '10px'}}
        onClick={props.clicked}
        > + Criar lista</Button>
);

export default  IncludeListButton;