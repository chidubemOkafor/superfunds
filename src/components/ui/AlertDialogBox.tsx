import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "../ui/alert-dialog"
import { Input } from "./input"
import { useDeposit } from "../../hook/useDeposit"
import { useState } from "react"
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"  
import { Spinner } from "../createproposal/Spinner"

const AlertDialogBox:React.FC<{
        minAmount?: number,
        address: string, 
        maxAmount?: number, 
        disabled?:boolean
    }> = (
    {
        minAmount = 0,
        maxAmount,
        disabled = false,
        address
    }
) => {
    const [ value, setValue ] = useState<string | number>(minAmount)
    const { handleDeposit, isLoading } = useDeposit()

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        handleDeposit(value.toString(), address)
    }

    return (
    <AlertDialog>
        <ToastContainer/>
        <AlertDialogTrigger>Deposit</AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle className="text-yellow-600">Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription className="text-yellow-600">Please before you deposit to this project verify that the project is a legitemate project with legitimate contributors any funds sent will not be refundable.</AlertDialogDescription>
            </AlertDialogHeader>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                    <label htmlFor="amount" className="font-bold">Amount (Ether); minimum amount is {minAmount} Eth:</label>
                    <Input name="amount" id="amount" placeholder="amount" type="number" value={value} onChange={(e) => setValue(e.target.value)} required/>
                </div>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <button className={`bg-blue-700 text-white px-4 rounded-md hover:bg-blue-600 ${isLoading && 'cursor-not-allowed bg-[#7196eed8]'} flex items-center gap-1`} 
                        type="submit"
                        disabled={isLoading}>
                        {isLoading && <Spinner className='mr-5 text-[20px]'/>} Continue
                    </button>
                </AlertDialogFooter>
            </form>
        </AlertDialogContent>
    </AlertDialog>
    )
}

export default AlertDialogBox


