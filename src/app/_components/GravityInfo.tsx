/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Text } from "@radix-ui/themes";

const GravityInfo = () => {
  return (
    <div css={styles.infoItem}>
      <video autoPlay muted loop playsInline css={styles.videoBackground}>
        <source src="/blackHole.webm" type="video/webm" />
      </video>

      {/* Оверлей для читаемости текста */}
      <div css={styles.overlay} />

      <div css={styles.container}>
        <Text css={styles.titleText}>Как работает гравитация?</Text>
        <p css={styles.text}>
          Ваш вес на разных планетах меняется из-за различий в гравитационном
          ускорении. <br />
          Гравитация зависит от массы планеты и её радиуса.
        </p>

        <p css={styles.text}>Формула расчета:</p>

        <div css={styles.formulaBox}>
          Вес на планете = (Вес на Земле × Гравитация планеты) / 1g
        </div>
      </div>
    </div>
  );
};

export default GravityInfo;

const styles = {
  infoItem: css({
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
    overflow: "hidden",
  }),
  videoBackground: css({
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    overflow: "hidden",
    zIndex: -1,
  }),
  overlay: css({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.65)",
    zIndex: -1,
  }),
  container: css({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    padding: "30px",
    maxWidth: "800px",
    textAlign: "center",
    zIndex: 1,
  }),
  titleText: css({
    fontSize: "32px",
    color: "#b084f9",
    textShadow: "0 0 8px black",
  }),
  text: css({
    fontSize: "18px",
    color: "white",
    textShadow: "0 0 5px black",
  }),
  formulaBox: css({
    marginTop: "8px",
    marginBottom: "14px",
    padding: "16px",
    backgroundColor: "rgba(18, 18, 18, 0.85)",
    border: "1px solid #b084f9",
    borderRadius: "10px",
    fontSize: "18px",
    color: "#b084f9",
    textAlign: "center",
    fontFamily: "monospace",
    fontWeight: "bold",
  }),
};
