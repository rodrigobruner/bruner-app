import styled from "styled-components"

// --------------------------------------------------
// Rock and Roll section


export const RockContainer = styled.section`
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
    flex-wrap: wrap; /* permite quebra de linha para filhos */
    gap: 40px;
    padding: 80px 32px;
  }
`;

export const RockTitle = styled.h2`
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

export const RockDescription = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #1e293b;
  text-align: center;
  max-width: 800px;
  margin: 0 20px 40px;

  @media (min-width: 769px) {
    text-align: left;
  }
`;

export const RockGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 15px;
  justify-items: center;
  grid-auto-rows: 1fr;

  /* garante que o grid ocupe uma nova linha quando o pai usar row + wrap */
  flex: 0 0 100%;
  margin-top: 8px;

  @media (min-width: 769px) {
    margin-top: 24px;
  }
`;
