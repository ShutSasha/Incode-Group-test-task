import { FC, CSSProperties } from 'react'

interface ButtonSettings {
   text: string
   style?: CSSProperties
   handleClick: () => void
}

export const FlexibleButton: FC<ButtonSettings> = ({ text, style, handleClick }) => {
   return (
      <button style={{ ...style }} onClick={handleClick}>
         {text}
      </button>
   )
}
