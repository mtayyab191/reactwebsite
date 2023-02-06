import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) =>{
    return(
        <div className=" col-12 col-md-6 col-lg-4 ">
            <div className="card">
                <img src={props.img} className="card-img-top img-fluid im" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.pag}</p>
                    <NavLink to={props.link} className="btn btn-outline-primary">Go somewhere</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Card;