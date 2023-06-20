import React from "react";
import ChatCard from "./chatCard/ChatCard";
import styles from "./ChatList.module.scss";
import Loader from "../ui/loader/Loader";
import TypingEffect from "../ui/typingEffect/TypingEffect";

const ChatList = ({ messages, loading, ...rest }) => {
  return (
    <div {...rest} className={styles.wrapper}>
      {messages.map((message) => {
        return message?.message ? (
          <ChatCard key={message.id} className={message?.type ?? ""}>
            <TypingEffect text={message.message} />
          </ChatCard>
        ) : (
          <></>
        );
      })}

      {loading ? (
        <ChatCard className={"assistant"}>
          <Loader loading={true} />
        </ChatCard>
      ) : (
        ""
      )}
    </div>
  );
};

export default ChatList;
