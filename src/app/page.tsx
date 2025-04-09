/** @jsxImportSource @emotion/react */
"use client";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { css } from "@emotion/react";
import { Box, Grid, Section } from "@radix-ui/themes";

export default function Home() {
  return (
    <>
      <Navbar />
      <main css={styles.root}>
        {/* <Section size="2">

        </Section> */}
        {/* <h1 css={styles.title}>Привет, космос!</h1>
        <h1 css={styles.title}>Привет, космос!</h1> */}

        <Box
          py="1"
          style={{
            backgroundColor: "var(--gray-a2)",
            borderRadius: "var(--radius-3)",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Box>
      </main>
    </>
  );
}

const styles = {
  root: css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    width: "100%",
    backgroundColor: "transparent",
  }),
  title: css({
    fontSize: 20,
    marginBottom: 12,
    color: "black",
  }),
};
