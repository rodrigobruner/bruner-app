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
  date: string;
  text: string;
  moreText?: string;
  moreUrl?: string;
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
          <p className="italic">{props.date}</p>
          <p style={{ padding: '10px' }}>{props.text}</p>
          {props.moreText && props.moreUrl && (
            <a href={props.moreUrl} target="_blank" rel="noopener noreferrer" style={{ padding: '5px', display: 'block' }}>{props.moreText}</a>
          )}
        </FlipCardBack>
      </FlipCardInner>
    </FlipCardContainer>
  )
}