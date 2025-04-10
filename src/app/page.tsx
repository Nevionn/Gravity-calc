/** @jsxImportSource @emotion/react */
"use client";
import "./globals.css";
import { css } from "@emotion/react";
import { Box, Flex, Text } from "@radix-ui/themes";
import Navbar from "./_components/Navbar";
import InputWeight from "./_components/InputWeight";

export default function Home() {
  return (
    <>
      <Navbar />
      <main css={styles.bgItem}>
        <Flex justify="center" align="center" direction="column">
          <Text size="9" weight="bold" css={styles.title}>
            Узнай свой вес во Вселенной
          </Text>
          <Text size="6" weight="bold" css={styles.text}>
            Введите свой вес на Земле и узнайте, сколько бы вы весели на других
            космических объектах Солнечной системы.
            <br />
            Гравитация — удивительная сила!
          </Text>
          <Box css={styles.spacingBox} />
          <InputWeight />
        </Flex>
      </main>
    </>
  );
}

const styles = {
  bgItem: css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "500px",
    width: "100%",
    backgroundImage: `url('/backgrounds/sky.webp')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }),
  testFlexItem: css({
    backgroundColor: "grey",
  }),
  spacingBox: css({
    height: "20px",
  }),
  textLabelWrapper: css({
    alignSelf: "flex-start",
    marginBottom: "10px",
  }),
  title: css`
    background-image: linear-gradient(
      to right,
      rgb(210, 49, 210),
      rgb(114, 14, 186)
    );
    -webkit-background-clip: text;
    color: transparent;
    margin-bottom: 30px;

    @media (max-width: 430px) {
      font-size: 22px;
    }
  `,
  text: css`
    white-space: pre-line;
    text-align: center;
    font-size: 20px;

    @media (max-width: 430px) {
      font-size: 16px;
    }
  `,
};
