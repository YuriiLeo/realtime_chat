import React from 'react';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, autor }, name }) => {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if (autor.trim().toLowerCase() === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        isSentByCurrentUser
            ? (
                <div className="flex justify-end p-0 sm:p-5 mt-3">
                    <p className="pr-10 flex items-center font-helvetica text-gray-600 tracking-wider">{trimmedName}</p>
                    <div className=" rounded-lg px-5 py-5 text-white inline-block max-w-80 bg-blue-500">
                        <p className="w-full leading-tight text-left text-white text-base">{ReactEmoji.emojify(text)}</p>
                    </div>
                </div>
            ) : (
                <div className="flex justify-start p-0 sm:p-5 mt-3">
                    <div className=" rounded-lg px-5 py-5 text-white inline-block max-w-80 bg-gray-200 ">
                        <p className="w-full leading-tight text-left text-base text-gray-700">{ReactEmoji.emojify(text)}</p>
                    </div>
                    <p className="pl-10 flex items-center font-helvetica text-gray-500 tracking-wider">{autor}</p>
                </div>
            )
    );
}

export default Message;