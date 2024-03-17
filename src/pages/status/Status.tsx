import { message } from 'antd'
import { useEffect } from 'react'

export const Status = ({messageStatus}: {messageStatus: string})=> {

  useEffect(() => {
    if (messageStatus !== '') message.success(messageStatus)
  }, [messageStatus] )

	return null
}
