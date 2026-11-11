import styled from "styled-components"

// --------------------------------------------------
// Portifolio section 

export const PortifolioContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: rgba(130, 151, 184, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 40px 20px;
  box-sizing: border-box;
`;


export const ProjectsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 80vw;
  gap: 15px;

  overflow-x: auto;
  overflow-y: hidden;

  @media (min-width: 768px) {
    grid-auto-columns: minmax(360px, 1fr);
  }

  @media (min-width: 1200px) {
    grid-auto-columns: minmax(480px, 1fr);
  }
`;

export const PortifolioTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: #fbbf24;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
  width: 100%;
  margin: 0;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    margin-top: 25px;
   
  } 
`;


