import React, { useState, useEffect } from "react";
import { BDiv, BImg, Row, Col } from "bootstrap-4-react";
import axios from "axios";
import apiKey from "../apiKey";

const Gallery = () => {
  const [photosList, setPhoto] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: "https://api.pexels.com/v1/search",
    mode: "cors",
    params: { query: "hairdresser", per_page: "6", page: "1" },
    headers: {
      authorization: apiKey,
    },
  };

  useEffect(() => {
    setLoading(true);
    axios
      .request(options)
      .then(function (response) {
        setPhoto(response.data.photos);
      })
      .catch(function (error) {
        console.error(error);
        setError(error.message);
      });
    setLoading(false);
  }, []);

  if (loading) {
    return <h2>Loading photos...</h2>;
  }

  if (error) {
    return (
      <BDiv text="center">
        <h2>We couldn't fetch the images</h2>
        <p>{error}</p>
      </BDiv>
    );
  }

  return (
    <BDiv>
      <BDiv text="center">
        <h2>galeria</h2>
      </BDiv>
      <Row className="gall-div" text="center">
        {photosList.map((photo) => {
          return (
              <Col col="6">
            <BImg  className="img-gall"
              src={photo.src.medium}
              key={photo.id}
              id={photo.id}
              alt={photo.alt}
            />
            </Col>
          );
        })}
      </Row>
    </BDiv>
  );
};

export default Gallery;
