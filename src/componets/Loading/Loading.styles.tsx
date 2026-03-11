import styled from "styled-components"

export const LoadingContainer = styled.div`
    min-height: 100vh;
    min-widht: 100%;
    background-color: #1e293b;
    margin: 0;
`;

export const LoadingText = styled.div`
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
  font-size: 20pt;
  text-align: center;
`;