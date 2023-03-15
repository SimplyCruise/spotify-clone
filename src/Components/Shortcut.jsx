import React from "react";
import img from '../img/musical.png'
import img1 from '../img/download.png'
import img2 from '../img/png-download.png'
import img3 from '../img/guitar.png'
import img4 from '../img/star.png'

const Shortcut = () => {

    return (
        <div className="shortcut">
            <h4>Shortcuts</h4>

            <div className="buttons">
                <button className="s-btn"  >
                    <img src={img2} className="emojis"></img> Chill Hits</button>
                <button className="s-btn">
                    <img src={img} className="emojis"></img>Piano Blues</button>
                <button className="s-btn">
                    <img src={img3} className="emojis"></img>Accoustic</button>
                <button className="s-btn">
                    <img src={img1} className="emojis"></img>Pop</button>
                <button className="s-btn">
                    <img src={img4} className="emojis"></img>Hop</button>
            </div>
        </div>
    )
}

export default Shortcut