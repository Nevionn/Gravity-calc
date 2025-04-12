/** @jsxImportSource @emotion/react */
"use client";
import "./globals.css";
import { css } from "@emotion/react";
import { useState } from "react";
import { Box, Flex, Text } from "@radix-ui/themes";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import InputWeight from "./_components/InputWeight";
import FallingStars from "./_components/FallingStars";
import PlanetsGrid from "./_components/PlanetsGrid";
import GravityInfo from "./_components/GravityInfo";

export default function Home() {
  const [weight, setWeight] = useState(0);
  const [planetWeights, setPlanetWeights] = useState<{ [key: string]: number }>(
    {}
  );

  return (
    <>
      <main role="main">
        <Navbar />
        <div css={styles.bgItem}>
          <FallingStars />
          <Flex css={styles.titleFlex}>
            <h1 css={styles.title}>Узнай свой вес во Вселенной</h1>
            <p css={styles.subtitle}>
              Введите свой вес на Земле и узнайте, сколько бы вы весели на
              других космических объектах Солнечной системы.
              <br />
              Гравитация — удивительная сила!
            </p>
            <Box css={styles.spacingBox} />
            <InputWeight
              weight={weight}
              setWeight={setWeight}
              setPlanetWeights={setPlanetWeights}
            />
          </Flex>
        </div>
        <PlanetsGrid planetWeights={planetWeights} />
        <GravityInfo />
        <Footer />
      </main>
    </>
  );
}

const styles = {
  bgItem: css({
    position: "relative",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "600px",
    width: "100%",
    marginTop: 20,
  }),
  titleFlex: css({
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  }),
  spacingBox: css({
    height: "20px",
  }),
  textLabelWrapper: css({
    alignSelf: "flex-start",
    marginBottom: "10px",
  }),
  title: css`
    font-size: 57px;
    background-image: linear-gradient(
      to right,
      rgb(210, 49, 210),
      rgb(114, 14, 186)
    );
    -webkit-background-clip: text;
    color: transparent;

    @media (max-width: 900px) {
      font-size: 36px;
    }

    @media (max-width: 840px) {
      font-size: 32px;
    }

    @media (max-width: 470px) {
      font-size: 22px;
    }
  `,
  subtitle: css`
    white-space: pre-line;
    text-align: center;
    font-size: 20px;
    font-weight: 500;

    @media (max-width: 450px) {
      font-size: 18px;
    }

    @media (max-width: 430px) {
      font-size: 16px;
    }
  `,
};
