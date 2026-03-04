import styled from "styled-components"


// ...existing code...
export const FixedIcon = styled.div`
  width: 60px;
  height: 60px;
  position: fixed;
  top: 85%;
  right: 40px;
  z-index: 15;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: #ffecb3;
    transform: translateY(-2px);
  }

  /* tooltip (janela) — escondida por padrão, mostrada ao hover */
  .tooltip {
    position: absolute;
    width: 250px;
    height: 150px;
    right: calc(100% + 10px); /* posiciona à esquerda com gap */
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.9);
    border-radius: 8px;
    box-shadow: 0 6px 12px rgba(0,0,0,0.18);
    display: none;
    align-items: center;
    justify-content: center;
    padding: 6px;
    color: #1e293b;
    font-size: 0.85rem;
    text-align: center;
    pointer-events: none; /* evita interferir no hover do ícone */
  }

  &:hover .tooltip {
    display: flex;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
