import React, { useState } from "react";
import {
  Container,
  Inner,
  Front,
  Back,
  Content,
} from "./Badge.styles";

type Props = {
  imageSrc: string;
  imageAlt?: string;
  title?: string;
  message?: string;
  size?: number;
  className?: string;
};

export default function BadgeFlip({
  imageSrc,
  imageAlt = "No War badge",
  title = "NO WAR!",
  message = "One planet. One home.",
  size = 250,
  className = "",
}: Props) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    const isTouchDevice =
      typeof window !== "undefined" &&
      (window.matchMedia("(hover: none)").matches ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0);

    if (isTouchDevice) {
      setFlipped((prev) => !prev);
    }
  };

  return (
    <Container
      size={size}
      className={className}
      onClick={handleClick}
      aria-label="Badge interativo de paz"
    >
      <Inner className={flipped ? "is-flipped" : ""}>
        <Front>
          <img src={imageSrc} alt={imageAlt} />
        </Front>

        <Back>
          <Content>
            <h3>{title}</h3>
            <p>{message}</p>
          </Content>
        </Back>
      </Inner>
    </Container>
  );
}