import React from "react";
import { Button, Nav, BDiv} from "bootstrap-4-react";

const Tittle =()=> {
    return (
        <BDiv>
            <BDiv>
            <h1>Zakład Fryzjerski Bożena</h1>
            </BDiv>
            <BDiv text="center">
            <BDiv display="inline-flex">
                <Button success>Zadzwoń <i className="fas fa-phone"></i>
                </Button>
            </BDiv>
            <Nav tabs display="inline-flex">
            <Nav.ItemLink href="#price-div">Cennik</Nav.ItemLink>
            <Nav.ItemLink href="#contact">Kontakt</Nav.ItemLink>
            <Nav.ItemLink active href="#">Galeria</Nav.ItemLink>
            </Nav>
            </BDiv>
        </BDiv>
    )
};

export default Tittle;