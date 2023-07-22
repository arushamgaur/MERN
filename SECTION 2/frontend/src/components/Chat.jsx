import React, { useState } from 'react'

const Chat = () => {
    const [Chat, setChat] = useState([]);
    const [newChat, setNewChat] = useState("");

    const addchat = (e) => {
            if(newChat.trim() !== ""){
                setChat([...Chat, newChat]);
                setNewChat("");
            }           
    };
  return (
    <div>
        <h1 className='text-center dispay-4 fw-bold my-5'>Chatting App</h1>
        <hr />
        <div className="container">
            <div className="card">
                <div className="card-header">
                    {Chat.map((Chat, index) => (
                    <div key={index} className="message">{Chat}</div>))}
                </div>
                <div className="card-body">
                    <input type="text" className='form-control align-self-end' value={newChat} onChange={(e) => setNewChat(e.target.value)}
          placeholder="Type your message..."/>
                    <button className='btn btn-primary ' onClick={addchat}>Send</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chat