import React, { useState, useEffect } from "react";
import {BDiv, BImg} from "bootstrap-4-react";
import axios from "axios";
import apiKey from "../apiKey";

// import { createClient } from 'pexels';

// const client = createClient('563492ad6f917000010000016f015287971b430dbb6d5e1e16e9a77a');

// const [photos, setPhoto] = useState(null);



const Gallery =()=>{

    const [photosList, setPhoto] = useState([""]);


const options = {
  method: 'GET',
  url: "https://api.pexels.com/v1/search",
  mode: 'cors',
  params: {query: 'hairdresser', per_page: '4', page: '1'},
  headers: {
    authorization: apiKey
  }
};
useEffect(() => {
axios.request(options).then(function (response) {
	setPhoto(response.data.photos);
}).catch(function (error) {
	console.error(error);
});
}, []);

    return (
        <BDiv>
            <h2>galeria</h2>
            <BDiv>
                {photosList.map((photo)=>{
                    return (
                        <BImg
                        src={photo.url}
                        key={photo.id}
                        id={photo.id}
                        alt={photo.alt}
                        />
                    )
                })}
            </BDiv>

        </BDiv>
    )
};

export default Gallery;