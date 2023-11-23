import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message/Message';


const Messages = ({ messages, name }) => (

    <ScrollToBottom className="overflow-auto p-[5% 0] flex-auto">
        {messages.map((message, i) => (
            <div key={i}>
                <Message message={message} name={name} />
            </div>
        ))}
    </ScrollToBottom>

);

export default Messages;