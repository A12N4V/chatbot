import React from "react";

function UsrMessage(props) {
    let message = props.message;
    return (
        <div className="outgoing">
            <div className="bubble">{message}</div>
        </div>
    );
}

export default UsrMessage;