import React from "react";
import './Error.css';

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
