import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) =>{
    return(
        <>
            <div className="row">
                <div className="col-md-6 mb-2  mt-md-5 mb-md-0  mt-5 order-1 order-lg-2 d-flex justify-content-center align-items-center">
                    <div>
                        <h2 className=" pb-2  text-primary ">{props.title}</h2>
                        <p className=" fs-5 pb-3">Your favorite meals and food brands are now within easier reach than ever before.</p>
                        <NavLink to={props.tolink}>
                            <button className="btn btn-outline-primary">{props.btn}</button>
                        </NavLink>
                    </div>
                </div>
                <div className="col-md-6 mb-2 mb-md-0 mt-md-5 mt-3 order-1 order-lg-2">
                    <img src={props.imgsrc} className="img-fluid animacted" alt="home images"></img>
                </div>
            </div>
        </>
    )
}

export default Common;