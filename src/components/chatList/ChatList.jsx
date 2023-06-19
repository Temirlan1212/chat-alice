import React from "react";
import ChatCard from "./chatCard/ChatCard";
import styles from "./ChatList.module.scss";
import Loader from "../ui/loader/Loader";

function ChatList({ messages, loading }) {
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

      {loading ? (
        <ChatCard className={"right"}>
          <Loader loading={true} />
        </ChatCard>
      ) : (
        ""
      )}
    </div>
  );
}

export default ChatList;
