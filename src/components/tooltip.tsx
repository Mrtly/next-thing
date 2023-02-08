import { useState } from "react"

type TooltipProps = { 
  displayText: string
  tooltipText: string
}

export default function Tooltip(props: TooltipProps) {

  const [show, setShow] = useState(false)

  const toggleTip = () => {
    setShow(!show)
  }

  return <>
    <div className="relative">
      <div 
       className={[
        "absolute -top-16 p-4 bg-wine text-white rounded shadow min-w-max",
        "transition-all duration-300",
        show ? "opacity-100" : "opacity-0"
      ].join(" ")
      }>{props.tooltipText}</div>
      <div
      onMouseOver={toggleTip}
      onMouseLeave={toggleTip}
      className="cursor-default">
        {props.displayText}
      </div>
    </div>
    </>
}