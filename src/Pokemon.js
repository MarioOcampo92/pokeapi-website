import React from "react";
import "./style.css"
import closeBtn from "./btn-cl.png"

const Pokemon = ({poke = [], pokeName= [], closeModal}) => {
    return(
        <div className="card position-relative poke-card d-flex flex-column align-items-center">
            <div className="position-absolute" onClick={() => closeModal(false)} style={{top:0,left:0}}>
                <img className="btn-close" src={closeBtn}/>
            </div>
            <img src={poke} className="poke-img"/>
            <div className="card-body text-center">
                <hr />
                <h5 className="card-title">
                    Your random Pokemon is... <br />
                    <span className=" text-capitalize text-success">¡{pokeName}!</span>
                </h5>
            </div>
        </div>
    )
}

export default Pokemon