import React, { ReactNode } from 'react'
import Navigation from '../Navigation/Navigation'

interface IUIGeneratorProps {
    children: ReactNode
}

const UIGenerator:React.FC<IUIGeneratorProps> = ({children}) => {
  return (
    <div>
        <Navigation/>
        {children}    
    </div>
  )
}

export default UIGenerator