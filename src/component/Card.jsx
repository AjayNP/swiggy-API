import {Grid2 } from "@mui/material";
import "./card.css";
import React from "react";
// import {CDN_URL} from "../utils/constants"

function Card({ title, price, image, rating } ) {
  
  return (
    <>
   
      <Grid2 size={{ lg: 3, md: 4, xs: 12 }} className="card">
        <div className="img-card">
          <img
            src={image}
            alt={image}
          />
          <div className="img-card-shadow">
            <span>{price}</span>
          </div>
        </div>
        <h3>{title}</h3>
        <p><span>⭐</span> {rating} </p>
      </Grid2>
      </>
  );
}

export default Card;
