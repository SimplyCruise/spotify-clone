import React from "react";
import img from '../img/davido.jpeg'
import img1 from '../img/davido1.jpeg'
import img2 from '../img/burna.jpeg'

const FavouriteArtist = () => {

    return(
        <div className="fav-artist">
            <h4>Fav Artist</h4>
            <div className="artists">
              <div className="details">
                    <img src={img1} className="p-img" alt="" />
                    <div className="texts">
                        <h5>Davido</h5>
                        <h6>120 songs in library</h6>
                    </div>
              </div>

               <div className="details">
                    <img src={img2} className="p-img" alt="" />
                    <div className="texts">
                        <h5>BurnaBoy</h5>
                        <h6>130 songs in library</h6>
                    </div>
              </div>

               <div className="details">
                    <img src={img1} className="p-img" alt="" />
                    <div className="texts">
                        <h5>Davido</h5>
                        <h6>120 songs in library</h6>
                    </div>
              </div>

               <div className="details">
                    <img src={img2} className="p-img" alt="" />
                    <div className="texts">
                        <h5>BurnaBoy</h5>
                        <h6>130 songs in library</h6>
                    </div>
              </div>
            </div>
            <div className="card">
            <img src={img} className="d-img" alt="" />
            <h1 className="singer">Davido</h1>
            <h1 className="album">far from home</h1>
            </div>
        </div>
    )
}

export default FavouriteArtist