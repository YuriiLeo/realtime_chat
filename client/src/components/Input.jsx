import React from 'react';

const Input = ({ setMessage, sendMessage, message }) => (
    <form className="flex border-t border-gray-300 ">
        <input
            className="border-none border-0 border-b-2 border-gray-300 focus:outline-none px-4 w-80 text-lg"
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
            onKeyPress={(event) => (event.key === 'Enter' ? sendMessage(event) : null)}
        />
        <button className="text-white uppercase bg-blue-500 py-5 px-8 ml-2" onClick={(e) => sendMessage(e)}>
            Send
        </button>
    </form>

)

export default Input;