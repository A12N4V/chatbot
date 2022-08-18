import React from 'react';
import TopBar from './TopBar';
import MessageBody from './MessageBody'
import UsrPad from './UsrPad';

function Chatbox() {
    return (
        <div id="Chatbox">
            <TopBar name="Climate Scientist"/>
            <MessageBody /> 
            <UsrPad />
        </div>
    );
}

export default Chatbox;