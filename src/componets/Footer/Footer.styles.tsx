import styled from "styled-components"
// --------------------------------------------------
// Footer section

export const FooterContainer = styled.footer`
  width: 100%;
  min-height: 60px;
  background: #1e293b;
  display: flex;
  flex-direction: column; /* ← empilha os elementos */
  align-items: center;
  justify-content: center;
  padding: 16px;
  box-sizing: border-box;
  color: #e0e0e0;
  font-size: clamp(0.875rem, 2vw, 1rem);
  text-align: center;
  gap: 4px; /* espaço entre o <p> e o <a> */

  a {
    color: #fbbf24;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ffecb3;
    }
  }
`;


export const SocialMenu = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: clamp(0.75rem, 2vw, 1.25rem);

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #fbbf24;
    font-size: clamp(1rem, 2.2vw, 1.5rem);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ffecb3;
    }
  }

  @media (max-width: 600px) {
    justify-content: center;
  }
`;