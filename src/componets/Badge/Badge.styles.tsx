import styled from "styled-components";

export const Container = styled.div<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  perspective: 1000px;
  cursor: pointer;
  display: inline-block;
  position:absolute;
  top: 105%;
  right:40px;

  &:hover .peace-badge-flip-inner {
    transform: rotateY(180deg);
  }

  @media (hover: none) {
    &:hover .peace-badge-flip-inner {
      transform: none;
    }
  }

  @media (max-width: 768px) {
    display:none;
  }

`;

export const Inner = styled.div.attrs({
  className: "peace-badge-flip-inner",
})`
  position: static;
  width: 100%;
  height: 100%;
  transition: transform 0.8s ease;
  transform-style: preserve-3d;

  &.is-flipped {
    transform: rotateY(180deg);
  }
`;

const Face = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 20px;
  overflow: hidden;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
`;

export const Front = styled(Face)`
  background: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`;

export const Back = styled(Face)`
  transform: rotateY(180deg);
  background:
    radial-gradient(circle at top, rgba(255, 70, 70, 0.2), transparent 35%),
    linear-gradient(135deg, #111 0%, #1a1a1a 45%, #2a2a2a 100%);
  color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
  text-align: center;
  border: 2px solid rgba(255, 72, 72, 0.35);
`;

export const Content = styled.div`
  h3 {
    margin: 0 0 12px;
    color: #ff4d4d;
    font-size: 28px;
    line-height: 1;
    letter-spacing: 1px;
  }

  p {
    margin: 0;
    font-size: 15px;
    line-height: 1.5;
    color: #f2f2f2;
  }
`;