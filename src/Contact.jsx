import React, { useState } from "react";

const Contact = () =>{

    const [sub, setSub] = useState({
        fullname : "",
        number : "",
        email :"",
        mgs :"",

    })

    const inputEvent = (event) =>{

        const {name ,value } = event.target;

        setSub((preval) =>{
            return{
                ...preval,
                [name] : value ,
            }
        });
    }


    const Submit =(e) =>{
        e.preventDefault();
        alert(`${sub.fullname}`)
        sub={
            fullname : "",
            number : "",
            email :"",
            mgs :"",
    
        }
    }


    return(
        <>
        <div className=" container-fluid">
            <div className=" row  ">
                <div className=" col-lg-10 mx-auto ">
                    <div className=" d-flex justify-content-center pt-4 pt-lg-5 mb-4" >
                        <h1>Contact Us</h1>
                    </div>
                    <div className="row gy-4 d-flex justify-content-center align-items-center">
                        <div className=" col-10 mx-auto" >
                            <form onSubmit={Submit}>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="exampleFormControlInput1" 
                                        name="fullname"
                                        value={sub.fullname}
                                        onChange={inputEvent}
                                        placeholder="Your Name"
                                        />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        id="exampleFormControlInput1" 
                                        name="number"
                                        value={sub.number}
                                        onChange={inputEvent}
                                        placeholder="Your Number"
                                        />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        id="exampleFormControlInput1" 
                                        name="email"
                                        value={sub.email}
                                        onChange={inputEvent}
                                        placeholder="name@example.com"
                                        />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Messages</label>
                                    <textarea 
                                    className="form-control" 
                                    id="exampleFormControlTextarea1" 
                                    rows="3"
                                    name="mgs"
                                    value={sub.mgs}
                                    onChange={inputEvent}
                                    ></textarea>
                                </div>
                                <div className="mb-3">
                                    <button type="submit" onClick={Submit}  className="btn btn-outline-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;