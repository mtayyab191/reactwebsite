import React from "react";
import Common from "./Common";
import about from "./Images/3.svg"

const About = () =>{
    return(
        <>
           <section id="Header" className=" d-flex align-items-center">
                <div  className=" container-fluid" >
                    <div className=" row ">
                        <div className=" col-lg-10 mx-auto ">
                            <Common 
                                imgsrc={about} 
                                btn="Contact Us"
                                tolink="/contact"
                                title="About US"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;