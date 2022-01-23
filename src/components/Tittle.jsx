import React from "react";
import { Button, Navbar, BDiv, Nav, Collapse} from "bootstrap-4-react";


const Tittle =()=> {
    return (
        <BDiv>
            <BDiv>
                <h1><a href="/" className="logo">Zakład Fryzjerski Bożena</a></h1>
            </BDiv>
            <BDiv>
                <Navbar light expand="lg">
                <Button success>Zadzwoń <i className="fas fa-phone"></i>
                    </Button>
                    <Navbar.Toggler target="#navbarSupportedContent" />
                    <Collapse navbar id="navbarSupportedContent" text="center">
                        <Navbar.Nav mx="auto">
                            <Nav.ItemLink href="/Main/#price-div">Cennik</Nav.ItemLink>
                            <Nav.ItemLink href="/Main/#contact">Kontakt</Nav.ItemLink>
                            <Nav.ItemLink href="/Gallery">Galeria</Nav.ItemLink>
                        </Navbar.Nav>
                    </Collapse>
                </Navbar>
            </BDiv>
        </BDiv>
    )
};

export default Tittle;