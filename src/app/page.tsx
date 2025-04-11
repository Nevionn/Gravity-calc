/** @jsxImportSource @emotion/react */
"use client";
import "./globals.css";
import { css } from "@emotion/react";
import { useState } from "react";
import { Box, Flex, Text } from "@radix-ui/themes";
import { planets } from "./_lib/planets";
import Navbar from "./_components/Navbar";
import InputWeight from "./_components/InputWeight";

export default function Home() {
  const [weight, setWeight] = useState(0);
  const [planetWeights, setPlanetWeights] = useState<{ [key: string]: number }>(
    {}
  );

  return (
    <>
      <Navbar />
      <main>
        <div css={styles.bgItem}>
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
        <div css={styles.planetsItem}>
          <Flex css={styles.planetsFlex}>
            <Text css={styles.textYourWeight}>Ваш вес на других объектах</Text>
            <div css={styles.gridContainer}>
              {planets.map((planet) => (
                <Box key={planet.name} css={styles.card}>
                  <Flex align="center" gap="3" mb="3">
                    <div css={[styles.icon, { backgroundColor: planet.color }]}>
                      {planet.icon}
                    </div>
                    <Text weight="bold" size="4">
                      {planet.name}
                    </Text>
                  </Flex>
                  <Text size="2" color="gray">
                    Гравитация: {planet.gravity} g
                  </Text>
                  <Text weight="bold" size="5" css={styles.weightText}>
                    {planetWeights[planet.name] || 0} кг
                  </Text>
                  <Text size="2" color="gray">
                    {planet.description}
                  </Text>
                </Box>
              ))}
            </div>
          </Flex>
        </div>
      </main>
    </>
  );
}

const styles = {
  bgItem: css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "600px",
    width: "100%",
    marginTop: 20,
    backgroundImage: `url('/backgrounds/sky.webp')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }),
  titleFlex: css({
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  }),
  planetsItem: css({
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    height: "auto",
    width: "100%",
    background: "rgb(15, 15, 15)",
  }),
  planetsFlex: css({
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
  }),
  gridContainer: css({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "24px",
    padding: "40px 0",
    width: "100%",
    maxWidth: "1200px",
  }),
  card: css({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "20px",
    borderRadius: "16px",
    color: "white",
    backgroundColor: "#1e1e1e",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    transition: "transform 0.2s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "scale(1.03)",
      boxShadow:
        "0 0 20px 5px rgba(138, 43, 226, 0.4), 0 4px 12px rgba(0,0,0,0.3)",
    },
  }),
  icon: css({
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    color: "white",
    flexShrink: 0,
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
  textYourWeight: css`
    text-align: center;
    font-size: 30px;
    font-weight: 500;
    margin-top: 30px;
    background-image: linear-gradient(
      to right,
      rgb(210, 49, 210),
      rgb(114, 14, 186)
    );
    -webkit-background-clip: text;
    color: transparent;

    @media (max-width: 450px) {
      font-size: 18px;
    }
  `,
  weightText: css({
    fontSize: "24px",
    color: "#b084f9",
    margin: "8px 0",
  }),
};
