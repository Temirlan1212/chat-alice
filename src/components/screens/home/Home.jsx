import { useRef, useState } from "react";
import styles from "./Home.module.scss";
import nextId from "react-id-generator";
import ChatList from "./chatList/ChatList";
import SpeechRecognation from "./speechRecognation/SpeechRecognation";

function Home() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);

  const updateList = (data, type) => {
    const newItem = { type, message: data, id: nextId() };
    setMessages((prevMessages) => [...prevMessages, newItem]);
  };

  async function uploadAudioText(data) {
    const formData = new FormData();
    formData.set("text", data);
    if (containerRef != null) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
    try {
      setLoading(true);
      const data = await fetch(`http://10.118.210.109:5000/api`, {
        method: "POST",
        body: formData,
      });
      const { response } = await data.json();
      updateList(response, "assistant");
    } catch (error) {
      updateList("Ошибка, можете повторить", "error");
    } finally {
      setLoading(false);

      if (containerRef != null) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }
    }
  }

  return (
    <div className={styles.wrapper} ref={containerRef}>
      <div className={"container"}>
        {messages.length > 0 && (
          <ChatList messages={messages} loading={loading} />
        )}
      </div>

      <SpeechRecognation
        className="container"
        uploadAudioText={uploadAudioText}
        updateList={updateList}
        loading={loading}
      />
    </div>
  );
}

export default Home;
