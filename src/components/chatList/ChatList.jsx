import React from "react";
import ChatCard from "./chatCard/ChatCard";
import styles from "./ChatList.module.scss";

function ChatList({ messages }) {
  console.log(messages);
  return (
    <div className={styles.wrapper}>
      {messages.map((message) => {
        return message?.message ? (
          <ChatCard
            key={message.id}
            className={message?.isAssistance ? "right" : "left"}
          >
            {message.message}
          </ChatCard>
        ) : (
          <></>
        );
      })}
    </div>
  );
}

export default ChatList;
