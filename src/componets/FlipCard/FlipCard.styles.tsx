import styled from "styled-components"

export const FlipCardContainer = styled.div`
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
`;

// This container is needed to position the front and back side
export const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  
  ${FlipCardContainer}:hover & {
    transform: rotateY(180deg);
  }
`;

// Front side of the card
export const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
`;

// Back side of the card
export const FlipCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  transform: rotateY(180deg);

  h1{
    color: #1e293b;
  }

  h2 {
    color: #fbbf24;
  }

  .bold{
    font-weight: 600;
  }
`;  
