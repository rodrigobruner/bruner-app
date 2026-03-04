import styled from "styled-components"

// --------------------------------------------------
// Navegation menu
export const Nav = styled.nav`
  position: fixed;
  width: 450px;
  min-height: 75px;
  background: #fbbf24;
  border-radius: 40px;
  z-index: 10;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  box-sizing: border-box;
  margin: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  li {
    position: relative;
    margin: 0;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.3s ease, width 0.4s ease, border-radius 0.4s ease,
      transform 0.4s ease, box-shadow 0.4s ease;

    &:hover {
      background: #fbbf24;
      transform: translateY(-4px);
      box-shadow: 0 6px 12px rgba(251, 191, 36, 0.35);
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    text-decoration: none;
    color: #1e293b;
    font-weight: 600;
    font-size: 1.1rem;
    transition: color 0.3s ease;
    overflow: hidden;
    height: 60px;
    width: 100%;
    
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1e293b;
  }

  .label {
    white-space: nowrap;
    opacity: 0;
    max-width: 0;
    overflow: hidden;
    transform: translateX(-8px);
    transition: opacity 0.3s ease, max-width 0.35s ease, transform 0.35s ease;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .active {
    background: #fbbf24;
    width: 200px;
    border-radius: 30px;
    box-shadow: 0 6px 12px rgba(251, 191, 36, 0.35);
  }

  .active a {
    justify-content: flex-start;
    gap: 8px;
    padding: 0 16px;
    @media (max-width: 768px) {
      max-width: 60px;
    }
  }

  .active .label {
    opacity: 1;
    max-width: 150px;
    transform: translateX(0);

  }

  @media (max-width: 600px) {
    width: 70%;
    min-height: 60px;
    margin: 10px 10px 10px 10px;
    left: 0;
    right: 0;
  }
`;
