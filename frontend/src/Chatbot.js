import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const sendMessage = async () => {
        const res = await axios.post('http://127.0.0.1:5000/chatbot', { message });
        setResponse(res.data.response);
    };

    return (
        <div>
            <h2>AI Road Trip Chatbot</h2>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button onClick={sendMessage}>Ask</button>
            <p>Response: {response}</p>
        </div>
    );
};

export default Chatbot;
