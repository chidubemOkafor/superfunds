import React from 'react'
import { Alert, AlertDescription, AlertTitle } from './alert'

interface alertProp {
    description: string
    type: 'info' | 'error' | 'warning' | 'success'
    className?: string
}

const AlertBox:React.FC<alertProp> = ({
    description,
    type,
    className = ''
}) => {
  const typeStyle = () => {
    if(type === 'info') {
      return 'text-blue-600 border-2 border-blue-600'
    } else if(type === 'error') {
      return 'text-red-600 border-2 border-red-600'
    } else if(type === 'warning') {
      return 'text-yellow-600 border-2 border-yellow-600'
    } else if(type === 'success') {
      return 'text-green-600 border-2 border-green-600'
    }
  }
  return (
    <Alert className={`${typeStyle()} ${className}`}>
        <AlertTitle>{type}</AlertTitle>
        <AlertDescription>
           {description}
        </AlertDescription>
    </Alert>
  )
}

export default AlertBox