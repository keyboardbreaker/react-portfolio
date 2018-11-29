import React from "react";
import { Link } from "react-router-dom";

class Error extends React.Component{
    render() {
        return (
            <div className="Error">
                <h1>Path Does not Exist</h1>
            </div>
        );
    }
}

export {Error}
