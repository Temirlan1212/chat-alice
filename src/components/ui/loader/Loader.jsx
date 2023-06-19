import styles from "./Loader.module.scss";

function Loader(loading) {
  return (
    <>
      {loading ? (
        <section class={styles["dots-container"]}>
          <div class={styles.dot}></div>
          <div class={styles.dot}></div>
          <div class={styles.dot}></div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default Loader;
