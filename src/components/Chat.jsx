import React, { useContext } from "react";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { IoMdPersonAdd, IoIosMore } from "react-icons/io";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

export default function Chat() {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <BsFillCameraVideoFill className="icon" />
          <IoMdPersonAdd className="icon" />
          <IoIosMore className="icon" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}
