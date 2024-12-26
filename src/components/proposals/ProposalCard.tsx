import { Progress } from "../ui/progress"
import { 
    FcAlarmClock, 
    FcCurrencyExchange,
    FcMoneyTransfer,
    FcDepartment,
    FcDonate,
    FcLink
} from "react-icons/fc";


const ProposalCard = () => {
    const spanIcon = 'flex items-center gap-2 text-gray-500'
    const text = 'text-black'
  return (
    <div className="p-5 hover:shadow-md border rounded-md flex flex-col gap-3 w-[40em] mb-20">
        <div>
            <p className='text-gray-500'>Created by 0xFce75Fa390a44Bc38ae82488A0C0B8aB26fdC488</p>
            <p className='underline decoration-gray-500 hover:decoration-gray-800'><span className='faint'>Proposal </span>#0 Proposal list page</p>
        </div>
        <Progress value={33} className='[&>*]:bg-[#0f50e7d8] bg-blue-50 h-3'/>
        <div className='flex justify-between items-center'>
            <div className='flex flex-col gap-2'>
                <span className={spanIcon}><FcAlarmClock/>Duration:</span>
                <span className={spanIcon}><FcCurrencyExchange/>Amount:</span>
                <span className={spanIcon}><FcMoneyTransfer/>Minimum Amount:</span>
                <span className={spanIcon}><FcDepartment/>Funding:</span>
                <span className={spanIcon}><FcDonate/>Network fee:</span>
                <span className={spanIcon}><FcLink/>Project url:</span>
            </div>
            <div className='flex flex-col gap-2'>
                <span className={text}>14 days 0 hours</span>
                <span className={text}>0.05 ETH</span>
                <span className={text}>0.002 ETH</span>
                <span className={text}>0% (0 ETH)</span>
                <span className={text}>5%</span>
                <span className={text}>deeecent/propcorn</span>
            </div>
            <div>
                <button className='bg-[#0f50e7d8] rounded-md p-[10px] border-none text-white font-bold flex items-center justify-center text-[16px]'>
                    Detail
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProposalCard