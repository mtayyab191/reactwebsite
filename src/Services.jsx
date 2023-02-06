import React, { useState } from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Services = () =>{

    const [data , setdata] = useState(Sdata)
 
    return(
        <>
        <div className=" container-fluid">
            <div className=" row  ">
                <div className=" col-lg-10 mx-auto ">
                    <div className=" d-flex justify-content-center pt-4 pt-lg-5 mb-4" >
                        <h1>Services</h1>
                    </div>
                    <div className="row gy-4 d-flex justify-content-center align-items-center">
                    {/* <Card/> */}
                    {
                        data.map((val,index) =>{
                            return(
                                <Card
                                key={index}
                                id={index}
                                title={val.Sname}
                                img={val.Imag}
                                pag={val.Tittle}
                                link={val.Link}
                            />
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Services;