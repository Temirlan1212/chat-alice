import styles from "./SpeechRecognation.module.scss";
import { useSpeechRecognition } from "react-speech-recognition";
import React, { useEffect } from "react";
import cn from "classnames";
import AudioRecordAnimation from "../../../ui/audioRecordAnimation/audioRecordAnimation";
import SpeechRecognition from "react-speech-recognition";
import { PlayAssistant, StopAssistant } from "../../../../assets/soundEffects";
import TypingEffect from "../../../ui/typingEffect/TypingEffect";

function SpeechRecognation({
  loading,
  updateList,
  uploadAudioText,
  className,
  ...rest
}) {
  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
    resetTranscript,
  } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      updateList(transcript, "user");
      uploadAudioText(transcript);
      resetTranscript();
    }
  }, [listening]);

  const handleRecordPlay = () => {
    SpeechRecognition.startListening();
    handlePlay(PlayAssistant);
  };

  const handleRecordStop = () => {
    SpeechRecognition.stopListening();
    handlePlay(StopAssistant);
  };

  const handlePlay = (url) => {
    new Audio(url).play();
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Your browser doesn't support Speech o Text</span>;
  }

  return (
    <div className={cn(styles.speechRecognation, className)} {...rest}>
      {!listening ? (
        <AudioRecordAnimation
          width={60}
          height={60}
          className={loading ? "disable" : ""}
          onClick={handleRecordPlay}
          isRecording={listening}
        ></AudioRecordAnimation>
      ) : (
        <AudioRecordAnimation
          width={62}
          height={62}
          className={loading ? "disable" : ""}
          onClick={handleRecordStop}
          isRecording={listening}
        ></AudioRecordAnimation>
      )}

      {transcript ? (
        <div className={styles["text-wrapper"]}>
          <TypingEffect text={transcript} delay={50} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SpeechRecognation;
