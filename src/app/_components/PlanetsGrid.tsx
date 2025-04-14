/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box, Flex, Text } from "@radix-ui/themes";
import { planets } from "../_lib/planets";
import Image from "next/image";

interface PlanetsProps {
  planetWeights: { [key: string]: number };
}

export default function PlanetsGrid({ planetWeights }: PlanetsProps) {
  return (
    <div id="planetsSection" css={styles.planetsItem}>
      <Flex css={styles.planetsFlex}>
        <Text css={styles.textYourWeight}>Ваш вес на других объектах</Text>
        <div css={styles.gridContainer}>
          {planets.map((planet) => (
            <Box
              key={planet.name}
              css={[
                styles.card,
                css({
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: `0 0 20px 5px ${planet.color}88, 0 4px 12px rgba(0,0,0,0.3)`,
                    transition: "transform 0.2s ease, box-shadow 0s",
                  },
                }),
              ]}
            >
              <Flex align="center" gap="3" mb="3">
                <div css={[styles.icon]}>
                  <Image
                    src={planet.icon}
                    alt={planet.name}
                    width={36}
                    height={36}
                  />
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
  );
}

const styles = {
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
    transition: "transform 0.2s ease, box-shadow 1.2s ease-out", // задержка на исчезновение

    "@media (max-width: 1300px)": {
      padding: "16px",
      margin: 10,
      width: "94%",
      alignItems: "center",
      textAlign: "center",
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
