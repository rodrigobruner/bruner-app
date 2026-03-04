import { useMemo } from "react";
import { FixedIcon } from "./Badge.styles";

import black_ribbon from "../../assets/images/black_ribbon.webp";

type BadgeImage = "war" | "sorrow";

interface BadgeArgs{
    image:BadgeImage;
    url:string;
    message:string;
    dateValue:string;
}

const parseLocalDate = (value: string) => {
  const [year, month, day] = value.split("-").map((part) => Number(part))
  if (!year || !month || !day) {
    return null
  }

  const date = new Date(year, month - 1, day)
  if (Number.isNaN(date.getTime())) {
    return null
  }

  return date
}

const getTodayLocal = () => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return today
}

export default function Badge(args:BadgeArgs) {
     const shouldShowTribute = useMemo(() => {
        const tributeDate = parseLocalDate(args.dateValue)
        if (!tributeDate) {
          return false
        }
    
        const today = getTodayLocal()
        return tributeDate > today
      }, [args.dateValue])

    return (
        <>
            {
                shouldShowTribute && (
                    <FixedIcon>
                        <a href={args.url} target="_blank">
                            <img src={black_ribbon} alt="Black ribbon" style={{ width: '55px', height: '55px' }} />
                        </a>
                        <div className="tooltip">{args.message}</div>
                    </FixedIcon>
                )
            }
        </>
    );
}