import {
  FlipCardContainer,
  FlipCardInner,
  FlipCardFront,
  FlipCardBack,
} from "./FlipCard.styles";

interface FlipCardProps {
  image: string;
  title: string;
  subtitle: string;
  note: string;
  text: string;
}


export default function FlipCard(props: FlipCardProps) {
  return (
    <FlipCardContainer>
      <FlipCardInner>
        <FlipCardFront>
          <img src={props.image} alt="Rock Image" style={{ width: '100%', height: '100%', borderRadius: '10px' }} />
        </FlipCardFront>
        <FlipCardBack>
          <h1>{props.title}</h1>
          <h2>{props.subtitle}</h2>
          <p className="bold">{props.note}</p>
          <p style={{ padding: '20px' }}>{props.text}</p>
        </FlipCardBack>
      </FlipCardInner>
    </FlipCardContainer>
  )
}