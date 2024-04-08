import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'
import { Input } from 'antd'

interface InputSettings {
   value: string
   placeholder?: string
   inputChange: Dispatch<SetStateAction<string>>
   // ...other settings for our Input if we need it
}

export const DefaultInput: FC<InputSettings> = ({ value, placeholder, inputChange }) => {
   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      inputChange(event.target.value)
   }

   return <Input value={value} onChange={handleChange} placeholder={placeholder} />
}
