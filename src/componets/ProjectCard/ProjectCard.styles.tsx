import styled from "styled-components"

export const ProjectCardContainer = styled.div`
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.18);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.24);
  }

  h3 {
    margin: 16px 16px 8px;
    font-size: 1.5rem;
    color: #333;
  }

  p {
    margin: 0 16px 24px;
    color: #555;
    font-size: 1rem;
    line-height: 1.5;
    flex-grow: 1;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #fbbf24;
    font-size: clamp(1rem, 2.2vw, 1.5rem);
    text-decoration: none;
    transition: color 0.3s ease;
    margin: 0 16px 16px;

    &:hover {
      color: #ffecb3;
    }
  } 
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;