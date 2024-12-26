import { toast } from 'react-toastify';

export enum Ntype {
    success = "success",
    error = "error",
    warning = "warning",
    info = "info"
}

type notificationInterface = {
    type: Ntype,
    message: string
}

export const useNotification = () => {    
    const handleNotification = ({type, message}: notificationInterface) => {
        switch (type) {
            case Ntype.success:
                toast.success(message)
                break
            case Ntype.error:
                toast.error(message)
                break;
            case Ntype.info:
                toast.info(message)
                break;
            case Ntype.warning:
                toast.warning(message)
                break
            default:
                toast(message)
        }
    }  
    return { handleNotification }
}
 