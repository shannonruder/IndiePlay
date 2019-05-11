import React from "react";
import "../../styles/app.css";
import FavoriteResult from "../FavoriteResult";


function FavCard(props) {
  return (
     <div className="card">
<FavoriteResult />
       <p>hi these are your favorited upcoming shows</p>
      </div>
      
    
   
  );
}

export default FavCard;
