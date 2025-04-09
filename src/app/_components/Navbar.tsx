/** @jsxImportSource @emotion/react */
"use client";
import { css } from "@emotion/react";
import {
  Box,
  Container,
  Flex,
  Text,
  Link as RadixLink,
} from "@radix-ui/themes";
import NextLink from "next/link";

export default function Navbar() {
  return (
    <nav aria-label="Главная навигация">
      <Box
        as="div"
        style={{
          borderBottom: "1px solid var(--gray-a4)",
          backgroundColor: "#150e1b",
        }}
      >
        <Container py="6">
          <Flex justify="between" align="center">
            {/* Логотип */}
            <Text size="7" weight="bold" css={styles.text}>
              <RadixLink asChild underline="none" css={styles.link}>
                <NextLink href="/">🚀 GravityCalc</NextLink>
              </RadixLink>
            </Text>
            {/* Навигационные ссылки */}
            <Flex gap="4">
              <RadixLink
                asChild
                underline="hover"
                // color="sky"
                weight="bold"
                css={styles.emumsLinks}
              >
                <NextLink href="/planets">Планеты</NextLink>
              </RadixLink>
              <RadixLink
                asChild
                underline="hover"
                // color="sky"
                weight="bold"
                css={styles.emumsLinks}
              >
                <NextLink href="/about">О нас</NextLink>
              </RadixLink>
              <RadixLink
                asChild
                underline="hover"
                // color="sky"
                weight="bold"
                css={styles.emumsLinks}
              >
                <NextLink href="/contact">Контакты</NextLink>
              </RadixLink>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </nav>
  );
}

const styles = {
  text: css`
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
  `,
  link: css({
    color: "transparent",
  }),
  emumsLinks: css({
    fontSize: 18,
    color: "white",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#b3f0ff",
    },
  }),
};
