import React from "react";


function Gaschapchap({ gaschapchapdisplay }) {
    const {  image_url,type_of_gas, } = gaschapchapdisplay;

    return (
        <span className="gas-items">
            <div className="steve">
                    <img src={image_url} height="90px" width="90px"/>
                </div>
            <div className="gcc-body">
                
                <p>{type_of_gas}</p>
                
                <p>ORDER</p>
            </div>
        </span>
    );
}

export default Gaschapchap;

