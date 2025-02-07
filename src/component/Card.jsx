import {Grid2 } from "@mui/material";
import "./card.css";
import React from "react";
import {CDN_URL} from "../utils/constants"

function Card({ cloudinaryImageId, costForTwo, name, avgRating, sla } ) {
  return (
    <>
   
      <Grid2 size={{ lg: 3, md: 4, xs: 12 }} className="card">
        <div className="img-card">
          <img
            src={CDN_URL+cloudinaryImageId}
            alt={cloudinaryImageId}
          />
          <div className="img-card-shadow">
            <span>{costForTwo}</span>
          </div>
        </div>
        <h3>{name}</h3>
        <p><span>⭐</span> {avgRating} : 🛵 <strong>{sla.slaString}</strong></p>
      </Grid2>
      </>
  );
}

export default Card;
