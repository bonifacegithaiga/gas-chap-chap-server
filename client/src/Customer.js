import React from "react";
import { Link } from "@reach/router";
function Customer() {
    return (
        
        <div className="cust">
        <h1>CUSTOMER-PAGE</h1>
        <div className="gcc-Customer-row">
            <div className="gcc-Customer-col">
                <div htmlFor="name"><label>name</label>
                    <br></br>
                    <div className="form-input"><input
                        type="text"
                        name="name"
                    />
                    </div>
                    <label htmlFor="location">form</label><br></br>
                    <div className="form-input"><input
                          type="text"
                          name="location"
                    />      

                    </div>
                    <label htmlFor="phone_no">phone_no</label><br></br>
                    <div className="form-input">
                        <input
                          type="text"
                          name="phone_no"

                          />
                             </div>
                            <button
                              className="form-cancel"
                              type="CANCEL"
                                             >
                                 <Link to="/">CANCEL</Link>

                          </button>
                          <button
                                className="form-next"
                                type="next"

                                >
                                    <Link to="/order" >NEXT</Link>
                                </button>


                          </div>
                </div>
            </div>
            </div>
        
    );
}

export default Customer;