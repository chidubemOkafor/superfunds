import { Progress } from "../ui/progress"
import { 
    FcAlarmClock, 
    FcCurrencyExchange,
    FcMoneyTransfer,
    FcDepartment,
    FcDonate,
    FcLink
} from "react-icons/fc";
import AlertDialogBox from "../ui/AlertDialogBox";
import { fromWeiToEther } from "../../utils/fromWeiToEther";
import { getTimeUntilUnlock } from "../../utils/parseTime";
import { getRepoNameFromUrl } from "../../utils/parseUrl";
import { Link, useNavigate } from "react-router";
import { reduceString } from "../../utils/reduceString";
import { useFetchCurrentValue } from "../../hook/useFetchCurrentValue";
import { progressPercentage } from "../../utils/calculatePercentage";

interface proposalCardProp {
    className?: string
    type?: 'page' | 'card'
    data?: Record<string, any>
}

const ProposalCard:React.FC<proposalCardProp> = ({
    className = '',
    type = 'card',
    data = {}
}) => {
    const {currentAmount} = useFetchCurrentValue(data.newFundingAddress)
    const navigate = useNavigate()

    const spanIcon = 'flex items-center gap-2 text-gray-500'
    const text = 'text-black'

    const handleRedirect = (id: string) => {
        navigate(`proposal/${id}`)
    }

    const unlockTIme = getTimeUntilUnlock(data.unlockTime)
    const maxAmount = fromWeiToEther(data.maxAmount)
    const minimumAmount = fromWeiToEther(data.minAmount)

    const percentage = progressPercentage(maxAmount, currentAmount)

    return (
    <div className={`p-5 ${type === 'card' && 'hover:shadow-md'} border rounded-md flex flex-col gap-3 w-[40em] mb-20 ${className}`}>
        <div>
            <p className='text-gray-500'>Created by {data.creator}</p>
            <p className='underline decoration-gray-500 hover:decoration-gray-800'><span className='faint'>Proposal </span>#{reduceString(data.id, 7)} Proposal list page</p>
        </div>
        
        <Progress value={percentage} className='[&>*]:bg-[#0f50e7d8] bg-blue-50 h-1'/>
        {type === 'page' && 
        <div className="pb-[2em] flex justify-between">
        <span className="text-sm text-gray-600 text-left font-bold">({currentAmount} / {maxAmount} ETH) </span>
        <p className="font-bold text-2xl text-[#0f50e7d8]"><span className="text-blue-300">{percentage}</span>/100% </p>
        </div>
        }
        
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
                <span className={text}>{unlockTIme}</span>
                <span className={text}>{maxAmount} ETH</span>
                <span className={text}>{minimumAmount} ETH</span>
                <span className={text}>{`${percentage}% (${currentAmount} ETH)`}</span>
                <span className={text}>{data.feePercentage}%</span>
                <span className={`${text} cursor-pointer hover:underline`}><Link to={data.issueLink}>{getRepoNameFromUrl(data.issueLink)}</Link></span>
            </div>
            <div>
                {type === 'card' &&
                <button onClick={() => handleRedirect(data.id)} className='bg-[#0f50e7d8] rounded-md p-[10px] border-none text-white font-bold flex items-center justify-center text-[16px]'>
                    Detail
                </button>
                }
            
                {type === 'page' &&
                <div className="relative inline-block rounded-[10px] bg-gradient-to-r from-gray-700 via-pink-500 to-red-500 p-[4px]">
                    <div className="bg-white text-black font-bold rounded-md px-[20px] p-2 flex items-center justify-center text-[16px] w-full h-full">
                        <AlertDialogBox 
                            minAmount={fromWeiToEther(data.minAmount)} 
                            maxAmount={fromWeiToEther(data.maxAmount)}
                            address={data.newFundingAddress}
                        />
                    </div>
                </div>}
            </div>
        </div>
    </div>
  )
}

export default ProposalCard