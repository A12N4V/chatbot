import React from 'react';

function UsrPad(props) {
    return(
        <div id="UsrPad">
            <div class="chat">
                <input type="text" placeholder="Type a message..." />
                <button type="submit"><i class="fa fa-paper-plane" onClick={props.onClick}></i></button>
            </div>
        </div>
    );
}

export default UsrPad;