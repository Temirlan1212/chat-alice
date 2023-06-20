import { useRef, useState } from "react";
import styles from "./Home.module.scss";
import nextId from "react-id-generator";
import ChatList from "./chatList/ChatList";
import SpeechRecognation from "./speechRecognation/SpeechRecognation";
import chatApi from "../../../shared/api/chat";
import { handlePlay } from "../../../utils/soundEffect";
import { API_URL } from "../../../shared/api/api.config";
import InactivityTracker from "../../ui/inactivityTracker/InactivityTracker";

const { getAssistantResponse } = chatApi;

const initChatList = [
  { message: "Привет, чем могу помочь?", type: "assistant" },
];

function Home() {
  const [chatList, setChatList] = useState(initChatList);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);

  const updateList = (data, type) => {
    const newItem = { type, message: data, id: nextId() };
    setChatList((prevMessages) => [...prevMessages, newItem]);
  };

  async function uploadAudioText(data) {
    const formData = new FormData();
    formData.set("text", data);
    if (containerRef != null) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }

    try {
      setLoading(true);
      const { response, audio } = await getAssistantResponse(formData);
      handlePlay(`${API_URL}${audio}`);
      updateList(response, "assistant");
    } catch {
      updateList("Ошибка, можете повторить", "error");
    } finally {
      setLoading(false);
      if (containerRef != null) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }
    }
  }

  const handleInactive = () => {
    console.log("User is inactive for 3 minutes");
  };

  return (
    <div className={styles.wrapper} ref={containerRef}>
      <div className={"container"}>
        {chatList.length > 0 && (
          <ChatList chatList={chatList} loading={loading} />
        )}
      </div>

      <SpeechRecognation
        className="container"
        uploadAudioText={uploadAudioText}
        updateList={updateList}
        loading={loading}
      />

      <InactivityTracker
        onInactive={handleInactive}
        timeoutDuration={3 * 60 * 1000}
      />
    </div>
  );
}

export default Home;
