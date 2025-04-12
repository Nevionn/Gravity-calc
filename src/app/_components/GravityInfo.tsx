/** @jsxImportSource @emotion/react */
"use client";
import { css } from "@emotion/react";
import { Text } from "@radix-ui/themes";

const GravityInfo = () => {
  return (
    <div css={styles.infoItem}>
      <div css={styles.container}>
        <Text style={{ fontSize: "32px", color: "#b084f9" }}>
          Как работает гравитация?
        </Text>

        <p style={{ fontSize: "18px", color: "white" }}>
          Ваш вес на разных планетах меняется из-за различий в гравитационном
          ускорении. <br />
          Гравитация зависит от массы планеты и её радиуса.
        </p>

        <p style={{ fontSize: "18px", color: "white" }}>Формула расчета:</p>

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
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    width: "100%",
    backgroundColor: "#1e1e1e",
  }),
  container: css({
    display: "flex",
    flexDirection: "column",
    padding: "30px",
    backgroundColor: "transparent",
  }),
  formulaBox: css({
    marginTop: "8px",
    marginBottom: "14px",
    padding: "16px",
    backgroundColor: "#121212",
    border: "1px solid #b084f9",
    borderRadius: "10px",
    fontSize: "18px",
    color: "#b084f9",
    textAlign: "center",
    fontFamily: "monospace",
    fontWeight: "bold",
  }),
};
