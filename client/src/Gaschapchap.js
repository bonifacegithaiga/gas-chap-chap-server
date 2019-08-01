import React from "react";
import { Link } from "@reach/router";

function Gaschapchap({ gaschapchapdisplay }) {
    const {  image_url,type_of_gas } = gaschapchapdisplay;

    return (
        <span className="gas-items">
            <div className="steve">
                    <img src={image_url} alt="" height="250px" width="250px"/>
                </div>
            <div className="gcc-body">
                
                <p>{type_of_gas}</p>
                
                <p><Link to="/customer"  >ORDER</Link></p>
               
    </div>
    
        </span> 
       
        
    );
}

export default Gaschapchap;

