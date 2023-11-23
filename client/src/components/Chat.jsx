import io from "socket.io-client";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import queryString from 'query-string';
import InfoBar from "./InfoBar";
import Messages from "./Messages/Messages";
import Input from "./Input";

const socket = { current: io("http://localhost:3001") };

const Chat = () => {
    const [currentUser, setCurrentUser] = useState(() => ({
        name: "",
        id: nanoid(),
    }));
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const { name } = queryString.parse(window.location.search);

    useEffect(() => {

        setCurrentUser({ name, id: nanoid() })
    }, [name]);

    useEffect(() => {
        socket.current.on("allMassages", (data) => {
            setMessages(data);
        });
    }, []);

    useEffect(() => {
        socket.current.on("newMessage", (data) => {
            setMessages([...messages, data]);
        });
    }, [messages]);

    const sendMessage = (e) => {
        e.preventDefault();
        socket.current.emit("sendMessage", {
            autor: name,
            text: message,
        });
        setMessages([...messages, { autor: name, text: message }]);
        setMessage("");
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <div className="flex flex-col justify-between bg-white rounded-lg h-[60%] w-35">
                <InfoBar name={name} />
                <Messages messages={messages} name={currentUser.name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
    );
}

export default Chat;
