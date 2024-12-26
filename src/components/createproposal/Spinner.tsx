import { ImSpinner3 } from "react-icons/im";


export const Spinner:React.FC<{className?: string}> = ({
    className = ''
}) => <ImSpinner3 className={`animate-spin ${className}`}/>
  
