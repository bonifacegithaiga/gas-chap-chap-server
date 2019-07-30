import React from "react";
import axios from "axios";
import GasChapChap from "./GasChapChap";


class Gaschapchaplistings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gaschapchapdisplay: [],
        };
    }

    componentDidMount() {
        this.fetchgaschapchapdisplay();
    }

    fetchgaschapchapdisplay() {
        this.setState({ loading: true, error: false });

        axios
            .get("/api/gaschapchapdisplay")
            .then(response => {
                this.setState({
                    gaschapchapdisplay: response.data,
                    loading: false,
                    error: false
                });
            })
            .catch(error => {
                this.setState({
                    gaschapchapdisplay: [],
                    loadind: false,
                    error: true
                });
            });
    }
    render() {
        const { gaschapchapdisplay } = this.state;

        console.warn(gaschapchapdisplay)

        return (
            <div className="gcc-container">
                <div className="gcc-gaschapchap-listings">

                {gaschapchapdisplay.map(m => (
                        <GasChapChap key={m.id} gaschapchapdisplay={m} />
                    ))}

                </div>
            </div>
        );
    }

}

export default Gaschapchaplistings;