import React from 'react';
import BotMessage from './BotMessage';
import UsrMessage from './UsrMessage';

function MessageBody() {
    return (
        <div id="MessageBody">
            <BotMessage message="hi" />
        </div>
    );
}

export default MessageBody;