import styles from "./SpeechRecognation.module.scss";
import { useSpeechRecognition } from "react-speech-recognition";
import { useEffect, useRef } from "react";
import cn from "classnames";
import AudioRecordAnimation from "../../../ui/audioRecordAnimation/audioRecordAnimation";
import SpeechRecognition from "react-speech-recognition";
import { PlayAssistant, StopAssistant } from "../../../../assets/soundEffects";
import TypingEffect from "../../../ui/typingEffect/TypingEffect";
import { handlePlay } from "../../../../utils/soundEffect";
import { useOutsideClick } from "../../../../hooks/useOutsideClick";

function SpeechRecognation({
  loading,
  updateList,
  uploadAudioText,
  className,
  ...rest
}) {
  const {
    transcript,
    finalTranscript,
    listening,
    browserSupportsSpeechRecognition,
    resetTranscript,
  } = useSpeechRecognition();
  const ref = useRef(null);

  useEffect(() => {
    if (finalTranscript) {
      updateList(transcript, "user");
      uploadAudioText(transcript);
      resetTranscript();
    }
  }, [finalTranscript]);

  const handleRecordPlay = () => {
    SpeechRecognition.startListening();
    handlePlay(PlayAssistant);
  };

  const handleRecordStop = () => {
    SpeechRecognition.stopListening();
    handlePlay(StopAssistant);
  };

  useOutsideClick(ref, () => {
    if (listening) handleRecordStop();
  });

  if (!browserSupportsSpeechRecognition) {
    return <span>Your browser doesn't support Speech o Text</span>;
  }

  return (
    <div className={cn(styles.speechRecognation, className)} {...rest}>
      <div ref={ref}>
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
      </div>

      {transcript ? (
        <div className={styles["text-wrapper"]}>
          <TypingEffect text={transcript} duration={50} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default SpeechRecognation;
