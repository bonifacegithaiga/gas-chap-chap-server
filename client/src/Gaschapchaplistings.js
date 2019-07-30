import React from "react";
import axios from "axios";
import GasChapChapDisplay from "./GasChapChapDisplay";


  class Gaschapchaplistings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           gaschapchapDispaly: [],
        };
    }
    
    componentDidMount() {
        this.fetchgaschapchapdisplay();
    }

    fetchgaschapchapdisplay(){
        this.setState({ loading: true, error: false });

        axios
        .get("http://localhost:9000/api/gaschapchapdisplay")
        .then(Response => {
            this.setState({
                gaschapchapDisplay:Response.data,
                loading: false,
                error: false
            });
        })
        .catch(error => {
            this.setState({
                gaschapchapDisplay: [],
                loadind:false,
                error: true
            });
        });
    }
    render() {
        const { gaschapchapdisplay } = this.setState;

    return(
        <div className="gcc-container">
        <div className="gcc-gaschapchap-listings">
        
        
           { gaschapchapdisplay.map(m=> (
                <GashapchapDisplay key={m.id} gaschapchapdisplay={m} />
            ))}
        
        </div>
     </div>
    );
}

}

export default Gaschapchaplistings;