import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import React, { useState, useContext, useEffect } from "react";
import { ChatContext } from "../context/ChatContext";
import Message from "./Message";

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages); //console.log(Object.entries(messages));
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  return (
    <div className="messages">
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
}
