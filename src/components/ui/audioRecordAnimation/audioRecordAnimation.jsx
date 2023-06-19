import styles from "./audioRecordAnimation.module.scss";
import cn from "classnames";

function AudioRecordAnimation({ className, children, isRecording, ...rest }) {
  return (
    <div
      {...rest}
      className={cn(
        styles[className],
        styles["audio-record-container"],
        isRecording ? styles["recording"] : ""
      )}
    >
      <div className={styles["audio-record-circle"]} />

      <div className={styles["content"]}>{children}</div>
    </div>
  );
}

export default AudioRecordAnimation;
