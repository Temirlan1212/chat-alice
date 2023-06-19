import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import ChatList from "../../chatList/ChatList";
import cn from "classnames";
import { useSpeechRecognition } from "react-speech-recognition";
import SpeechRecognation from "../../ui/speechRecognation/speechRecognation";
import nextId from "react-id-generator";

function Home() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
    resetTranscript,
  } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      updateList(transcript, false);
      uploadAudioText(transcript);
      resetTranscript();
    }
  }, [listening]);

  const updateList = (data, isAssistance) => {
    const newItem = { isAssistance, message: data, id: nextId() };
    setMessages((prevMessages) => [...prevMessages, newItem]);
  };

  async function uploadAudioText(data) {
    const formData = new FormData();
    formData.set("text", data);
    try {
      setLoading(true);
      const data = await fetch(`http://10.118.210.109:5000/api`, {
        method: "POST",
        body: formData,
      });
      const { response } = await data.json();
      updateList(response, true);
    } catch (error) {
      console.error("Ошибка:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className={cn(styles.wrapper, "container")}>
        <ChatList messages={messages} loading={loading} />
      </div>
      <div className={cn(styles.speechRecognation, "container")}>
        <SpeechRecognation
          listening={listening}
          loading={loading}
          browserSupportsSpeechRecognition={browserSupportsSpeechRecognition}
        />

        {transcript ? (
          <div className={styles["text-wrapper"]}>
            <p>
              {transcript} {listening ? "..." : ""}
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Home;
