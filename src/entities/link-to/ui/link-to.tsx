import { CSSProperties, FC } from 'react'
import { Link } from 'react-router-dom'

interface LinkToProps {
   text: string
   link: string
   style?: CSSProperties
}

export const LinkTo: FC<LinkToProps> = ({ text, link, style }) => {
   return (
      <Link style={{ ...style }} to={link}>
         {text}
      </Link>
   )
}
