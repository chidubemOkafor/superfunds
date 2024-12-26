import React from 'react'
import { Alert, AlertDescription, AlertTitle } from './alert'

interface alertProp {
    description: string
}

const AlertBox:React.FC<alertProp> = ({
    description
}) => {
  return (
    <Alert className='text-blue-600 border-2 border-blue-600'>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
           {description}
        </AlertDescription>
    </Alert>
  )
}

export default AlertBox