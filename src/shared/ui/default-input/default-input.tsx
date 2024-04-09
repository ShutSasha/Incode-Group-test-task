import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'
import { Input } from 'antd'

interface InputSettings {
   value: string
   placeholder?: string
   inputChange: Dispatch<SetStateAction<string>>
   handleEnterPress: () => void
   // ...other settings for our Input if we need it
}

export const DefaultInput: FC<InputSettings> = ({ value, placeholder, inputChange, handleEnterPress }) => {
   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      inputChange(event.target.value)
   }

   const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
         handleEnterPress()
      }
   }

   return <Input value={value} onChange={handleChange} onKeyDown={handleKeyDown} placeholder={placeholder} />
}
