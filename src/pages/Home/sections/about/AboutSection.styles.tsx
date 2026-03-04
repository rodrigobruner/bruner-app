import styled from "styled-components"

// --------------------------------------------------
// About section 

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 48px 16px;
  min-height: 100vh;
  box-sizing: border-box;

  @media (min-width: 769px) {
    flex-direction: row;
    gap: 40px;
    padding: 80px 32px;
  }
`;

export const RoundedImage = styled.img`
  width: min(300px, 25%);
  height: auto;
  border-radius: 50%;
  border: 6px solid #fbbf24;
  filter: brightness(0.95) contrast(1.05);
  transition: transform 0.4s ease, filter 0.4s ease;

  &:hover {
    transform: scale(1.05);
    filter: brightness(1) contrast(1.1);
  }

  @media (max-width: 1024px) {
    width: min(260px, 40%);
  }

  @media (max-width: 600px) {
    width: min(200px, 50%);
  }
`;

export const AboutTitle = styled.h2`
  margin: 0;
  font-size: 3.5rem;
  text-align: center;
  max-width: 680px;
  color: #1e293b;

  @media (min-width: 769px) {
    text-align: left;
  }
`;