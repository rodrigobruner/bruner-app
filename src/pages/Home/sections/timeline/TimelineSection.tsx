import { useState } from "react";
import {
    TimelineContainer,
    TimelineTitle,
    Timeline,
    TimelineItem,
    TimelineItemTitle,
    TimelineItemContent,
} from "./TimelineSection.styles";

// type ItemType = "work" | "education";

interface Item {
    id: string,
    type: string,
    date: string,
    title: string,
    location: string,
    description: string
    image:string|null
}

interface ItensArgs{
    itens: Item[],
}

export default function TimelineSection(args: ItensArgs) {

    const [activeItem, setActiveItem] = useState<string | null>(null)

    function returnIcon(type:any) {
    switch (type) {
      case "work":
        return "💼"

      case "education":
        return "🎓"

      default:
        return "📌"
    }
    }

    return (
        <TimelineContainer id="timeline">
            <TimelineTitle>Timeline</TimelineTitle>
            <Timeline>
                {args.itens.map((item) => (
                    <TimelineItem key={item.id}>

                        <TimelineItemTitle onClick={() => setActiveItem(item.id)}>
                            <h3>{ returnIcon(item.type) } {item.date}</h3>
                            <h4>{item.title}</h4>
                        </TimelineItemTitle>

                        {activeItem === item.id && (
                            <TimelineItemContent>
                                <h4>{item.location}</h4>
                                <p>{item.description}</p>
                                {item.image && <img src={item.image} />}
                            </TimelineItemContent>
                        )}

                    </TimelineItem>
                ))}
            </Timeline>
        </TimelineContainer >
    )
}