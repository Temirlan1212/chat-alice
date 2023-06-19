import AudioRecordAnimation from "../audioRecordAnimation/audioRecordAnimation";
import styles from "./speechRecognation.module.scss";
import SpeechRecognition from "react-speech-recognition";

function SpeechRecognation({
  listening,
  browserSupportsSpeechRecognition,
  loading,
}) {
  if (!browserSupportsSpeechRecognition) {
    return <span>Your browser doesn't support Speech o Text</span>;
  }

  return (
    <>
      {!listening ? (
        <AudioRecordAnimation
          className={loading ? "disable" : ""}
          onClick={SpeechRecognition.startListening}
          isRecording={listening}
        >
          старт
        </AudioRecordAnimation>
      ) : (
        <AudioRecordAnimation
          className={loading ? "disable" : ""}
          onClick={SpeechRecognition.stopListening}
          isRecording={listening}
        >
          стоп
        </AudioRecordAnimation>
      )}
    </>
  );
}

export default SpeechRecognation;
