import React from "react";


function Gaschapchap({ gaschapchapdisplay }) {
    const { gas_id, weight, type_of_gas, price, image_url} =gaschapchapdisplay;

    return (
        <span>
        <div className = "gcc-body">
            <p>{gas_id}</p>
            <p>{weight}</p>
            <p>{type_of_gas}</p>
            <p>{price}</p>
            <p>{image_url}</p>
        </div>
        </span>
    );
}

export default Gaschapchap;