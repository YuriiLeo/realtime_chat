import React, { useState } from "react";
import { Link } from "react-router-dom";

const Join = () => {
    const [name, setName] = useState("");

    return (
        <div className="flex justify-center items-center text-center h-screen bg-gray-900">
            <div className="w-1/5">
                <h1 className="text-white my-5 text-2.5xl pb-4 border-b-2 border-white">Join</h1>
                <div>
                    <input className="border-0 rounded-0 p-4 w-full" placeholder="Name" type="text" onChange={(event) => setName(event.target.value)} />
                </div>
                <Link onClick={event => (!name) ? event.preventDefault() : null} to={`/chat?name=${name}`}>
                    <button className="bg-blue-500 text-white uppercase py-4 rounded mt-5 w-full" type="submit">Sign In</button>
                </Link>
            </div>
        </div>
    )
}

export default Join;
