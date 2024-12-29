import { useNotification, Ntype } from "../hook/useNotification";

const { handleNotification } = useNotification()

export const copyToClipBoard  = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
        handleNotification({type: Ntype.success, message: "Copied to clipboard"})
    }).catch((error) => {
        handleNotification({type: Ntype.success, message: error.message})
    });
}