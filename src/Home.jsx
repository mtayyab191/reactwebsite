import React from "react";
import Common from "./Common";
import  web  from "./Images/1.svg";

const Home = () =>{
    return(
        <>
            <section id="Header" className=" d-flex align-items-center">
                <div  className=" container-fluid" >
                    <div className=" row ">
                        <div className=" col-lg-10 mx-auto ">
                            <Common 
                                imgsrc={web} 
                                btn="Started"
                                tolink="/service" 
                                title="Your Ordinary Day has just Become more Enjoyable."
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;