import styled from "styled-components"

// --------------------------------------------------
// Time line

export const TimelineContainer = styled.section`
  background: #fbbf24;  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 48px 16px;
  min-height: 100vh;
  box-sizing: border-box;

  @media (min-width: 769px) {
    gap: 40px;
    padding: 80px 32px;
  }
`;

export const TimelineTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: #1e293b;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
  width: 100%;
  margin: 0;
  margin-bottom: 10px;

  @media (max-width: 1024px) {
    margin-top: 25px;
   
  } 
`;

export const Timeline = styled.div`
  width: 100%;
  max-width: 800px;
  position: relative;
  margin: 20px 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: #1e293b;
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  width: 50%;
  padding: 20px 40px;
  box-sizing: border-box;
  cursor: pointer;

  &:nth-child(odd) {
    left: 0;
    text-align: right;

    &::before {
      content: '';
      position: absolute;
      top: 20px;
      right: -8px;
      width: 16px;
      height: 16px;
      background: #fbbf24;
      border-radius: 50%;
      border: 4px solid #1e293b;
    }
  }

  &:nth-child(even) {
    left: 50%;
    text-align: left;

    &::before {
      content: '';
      position: absolute;
      top: 20px;
      left: -8px;
      width: 16px;
      height: 16px;
      background: #fbbf24;
      border-radius: 50%;
      border: 4px solid #1e293b;
    }
  }

 
`;





export const TimelineItemContent = styled.div`
 h3 {
    margin: 0 0 8px;
    font-size: 1.5rem;
    color: #1e293b;
  }

  p {
    margin: 0;
    color: #333;
    font-size: 1rem;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    text-align: left;
    padding: 0px 0px;

    &::before {
      left: -8px;
    }

    &:nth-child(odd),
    &:nth-child(even) {
      left: 0;
      text-align: left;

      &::before {
        left: -8px;
      }
    }
  }
`;

export const TimelineItemTitle = styled.div`
  h3 {
    margin: 0 0 8px;
    font-size: 1.5rem;
    color: #1e293b;
  }

  &:nth-child(odd),
  &:nth-child(even) {
    left: 0;
    text-align: left;

    &::before {
      left: -8px;
    }
    }
`;