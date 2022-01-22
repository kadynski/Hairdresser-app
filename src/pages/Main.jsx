import React from "react";
import { BDiv} from "bootstrap-4-react";
import Caro from "../components/Caro";
import Price from "./Price";
import Contact from "./Contact";

const Main =()=> {
    return (
        <BDiv>
            <Caro />
            <Price />
            <Contact />
        </BDiv>

    )
};

export default Main;