import React from "react";

import Gaschapchap from "./Gaschapchap";
function Gaschapchaplistings({gaschapchapdisplay}){
    return(
        <div className="gcc-container">
        <div className="gcc-gaschapchap-listings">
        
        {
            gaschapchapdisplay.map(m=> (
                <Gaschapchap key={m.id} gaschapchapdisplay={m} />
            ))
        }
        </div>
     </div>
    );
}

export default Gaschapchaplistings;