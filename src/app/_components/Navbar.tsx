/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Box,
  Container,
  Flex,
  Text,
  Link as RadixLink,
} from "@radix-ui/themes";
import NextLink from "next/link";
import { scrollToSection } from "../_lib/scrollToSection";

export default function Navbar() {
  const navbarHeight = 80;

  return (
    <nav aria-label="Главная навигация">
      <Box as="div" css={styles.navbarContainer}>
        <Container py="6">
          <Flex justify="between" align="center">
            {/* Логотип */}
            <Text size="7" weight="bold" css={styles.title}>
              <RadixLink asChild underline="none" css={styles.link}>
                <NextLink href="/">🚀 GravityCalc</NextLink>
              </RadixLink>
            </Text>
            {/* Навигационные ссылки */}
            <Flex gap="4">
              <RadixLink
                asChild
                underline="hover"
                weight="bold"
                css={styles.emumsLinks}
              >
                <NextLink
                  href="#planetsSection"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("planetsSection", navbarHeight);
                  }}
                >
                  Планеты
                </NextLink>
              </RadixLink>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </nav>
  );
}

const styles = {
  navbarContainer: css({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 10,
    borderBottom: "1px solid var(--gray-a4)",
    backgroundColor: "#150e1b",
  }),
  title: css`
    background-image: linear-gradient(
      to right,
      rgb(210, 49, 210),
      rgb(114, 14, 186)
    );
    -webkit-background-clip: text;
    color: transparent;
    font-size: 32px;
    transition: filter 0.3s ease;

    &:hover {
      filter: brightness(1.2);
    }

    @media (max-width: 472px) {
      font-size: 22px;
    }
  `,
  link: css({
    color: "transparent",
  }),
  emumsLinks: css({
    fontSize: 18,
    color: "white",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#b084f9",
    },

    "@media (max-width: 472px)": {
      fontSize: "14px",
    },

    "@media (max-width: 360px)": {
      fontSize: "12px",
    },
  }),
};
