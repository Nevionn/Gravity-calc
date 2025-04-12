/** @jsxImportSource @emotion/react */
"use client";
import { css } from "@emotion/react";
import { useState } from "react";
import { Box, Flex, Text, Button, Slider, Checkbox } from "@radix-ui/themes";
import { planets } from "../_lib/planets";

export default function InputWeight({
  weight,
  setWeight,
  setPlanetWeights,
}: {
  weight: number;
  setWeight: React.Dispatch<React.SetStateAction<number>>;
  setPlanetWeights: React.Dispatch<
    React.SetStateAction<{ [key: string]: number }>
  >;
}) {
  const [isHuman, setIsHuman] = useState(true);

  const calculateWeights = () => {
    const newPlanetWeights = planets.reduce((acc, planet) => {
      acc[planet.name] = parseFloat((weight * planet.gravity).toFixed(2));
      return acc;
    }, {} as { [key: string]: number });

    setPlanetWeights(newPlanetWeights);
  };

  return (
    <Box css={styles.panel}>
      <Box css={styles.textLabelWrapper}>
        <Text weight="light" css={styles.textInputWeight}>
          Ваш вес на Земле (кг)
        </Text>
      </Box>
      <Flex
        justify="center"
        align="center"
        direction="column"
        gap="20px"
        width="100%"
      >
        <Slider
          aria-label="Вес на Земле в килограммах"
          value={[weight]}
          min={1}
          max={isHuman ? 150 : 10000}
          step={1}
          onValueChange={(val) => setWeight(val[0])}
          defaultValue={[25]}
          size="3"
          variant="soft"
          color="indigo"
          highContrast
          css={styles.slider}
        />
        <div css={styles.sliderLabelRow}>
          <Text size="1" color="gray">
            0
          </Text>
          <Text size="1" color="gray">
            {isHuman ? 150 : 10000}
          </Text>
        </div>
        <Flex
          justify="between"
          align="center"
          direction="row"
          gap="20px"
          width="100%"
          css={styles.bottomFlex}
        >
          <Box css={styles.indicatorWrapper}>
            <div css={styles.inputIndicator}>
              <Text size="3" weight="bold">
                {weight}
              </Text>
              <div css={styles.arrowsItem}>
                <button
                  aria-label="Увеличить вес"
                  css={styles.arrows}
                  onClick={() =>
                    setWeight((prev) =>
                      Math.min(prev + 1, isHuman ? 150 : 10000)
                    )
                  }
                >
                  ▲
                </button>
                <button
                  aria-label="Уменьшить вес"
                  css={styles.arrows}
                  onClick={() => setWeight((prev) => Math.max(prev - 1, 1))}
                >
                  ▼
                </button>
              </div>
            </div>
          </Box>
          <Flex align="center" gap="2" css={styles.checkboxWrapper}>
            <Checkbox
              checked={isHuman}
              onCheckedChange={(val) => {
                setIsHuman(!!val), setWeight(0);
              }}
              size="2"
              color="indigo"
              aria-label="для человека"
            />
            <Text size="1" color="gray">
              для человека
            </Text>
          </Flex>
          <Box css={styles.buttonWrapper}>
            <Button
              css={styles.button}
              onClick={calculateWeights}
              aria-label="Рассчитать значения"
            >
              Рассчитать
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

const styles = {
  textLabelWrapper: css({
    alignSelf: "flex-start",
    marginBottom: "10px",
  }),
  panel: css({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    background: "rgb(24, 23, 23)",
    padding: "20px",
    borderRadius: "12px",
    height: "200px",
    width: 420,
    minWidth: 300,
    maxWidth: 500,

    "@media (max-width: 430px)": {
      width: 300,
    },
  }),
  slider: css({
    width: "100%",
  }),
  sliderLabelRow: css({
    marginBottom: "-18px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  }),
  bottomFlex: css({
    marginTop: "20px",
  }),
  indicatorWrapper: css({
    alignSelf: "flex-start",
  }),
  inputIndicator: css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    padding: "10px 40px",
    width: "10px",
    backgroundColor: "rgb(46, 45, 45)",
    borderRadius: "6px",
    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.2)",
    color: "white",

    "@media (max-width: 430px)": {
      padding: "10px 30px",
    },
  }),
  arrowsItem: css({
    position: "absolute",
    right: -29,
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  }),
  arrows: css({
    background: "none",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    padding: "6px",
    lineHeight: "1",
    transition: "color 0.2s",

    ":hover": {
      color: "#8b00ff",
    },
  }),
  checkboxWrapper: css({
    marginTop: "8px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  }),
  buttonWrapper: css({
    alignSelf: "flex-end",
  }),
  button: css({
    padding: "20px 20px",
    backgroundColor: "#8b00ff",
    backgroundImage:
      "linear-gradient(to right, rgb(210, 49, 210), rgb(114, 14, 186))",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#5c00b1",
    },

    "@media (max-width: 430px)": {
      padding: "10px 10px",
    },
  }),
  textInputWeight: css({
    color: "#C687EC",
    fontSize: 20,
  }),
};
