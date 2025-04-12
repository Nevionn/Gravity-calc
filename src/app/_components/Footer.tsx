/** @jsxImportSource @emotion/react */
"use client";
import { css, keyframes } from "@emotion/react";
import { useEffect, useRef, useState } from "react";
import { Flex, Text } from "@radix-ui/themes";
import { Gitlab } from "lucide-react";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      {
        threshold: 0.2,
      }
    );

    // Создаем локальную переменную для хранения ссылки на footerRef.current
    const footerElement = footerRef.current;
    if (footerElement) observer.observe(footerElement);

    return () => {
      if (footerElement) observer.unobserve(footerElement);
    };
  }, []);

  return (
    <div ref={footerRef} css={[styles.footer, isVisible && styles.animate]}>
      <Flex justify="between" align="center" direction="row" gap="20px">
        <Text css={styles.text}>
          <a
            href="https://gitlab.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitLab профиль Nevionn"
            css={styles.linkText}
          >
            &copy; 2025&nbsp;Nevionn. Исследуйте Вселенную.
          </a>
        </Text>

        <a
          href="https://gitlab.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitLab репозиторий"
          css={styles.iconLink}
        >
          <Gitlab size={32} color="#fc6d26" />
        </a>
      </Flex>
    </div>
  );
}

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const styles = {
  footer: css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    padding: "24px 0",
    background: "rgb(24, 23, 23)",
    gap: "12px",
    opacity: 0,
    transform: "translateY(20px)",
    transition: "opacity 0.6s ease, transform 0.6s ease",
  }),
  animate: css({
    animation: `${fadeInUp} 0.8s ease forwards`,
  }),
  text: css({
    color: "white",
    fontSize: "16px",
  }),
  linkText: css({
    color: "white",
    textDecoration: "none",
    transition: "color 0.3s",
    "&:hover": {
      color: "#ff974d",
    },
  }),
  iconLink: css({
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.1)",
    },
  }),
};
