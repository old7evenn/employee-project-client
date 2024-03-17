import { message } from "antd"
import { ErrorProps } from "../../types"
import { useEffect } from "react"


export const ErrorMessage = ({messageError}: ErrorProps) => {
  useEffect(() => {
    if (messageError !== '') message.error(messageError)
  }, [messageError])
  
  return null
}
