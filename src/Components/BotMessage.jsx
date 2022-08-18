import React from "react";

function BotMessage(props) {
    let message = props.message;
    return(
        <div className="incoming">
            <div className="bubble">{message}</div>
        </div>
    );
}

export default BotMessage;