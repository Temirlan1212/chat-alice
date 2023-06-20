import styles from "./ChatCard.module.scss";
import cn from "classnames";

function ChatCard({ className, children, ...rest }) {
  return (
    <div className={cn(styles[className], styles.wrapper)} {...rest}>
      {children}
    </div>
  );
}

export default ChatCard;
