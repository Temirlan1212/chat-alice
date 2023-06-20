import React from "react";
import ChatCard from "./chatCard/ChatCard";
import styles from "./ChatList.module.scss";
import Loader from "../../../ui/loader/Loader";
import TypingEffect from "../../../ui/typingEffect/TypingEffect";

const ChatList = ({ chatList, loading, ...rest }) => {
  return (
    <div {...rest} className={styles.wrapper}>
      {chatList.map((message) => {
        return message?.message ? (
          <ChatCard key={message.id} className={message?.type ?? ""}>
            <TypingEffect text={message.message} duration={2} />
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
