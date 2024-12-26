import { IoFlash } from "react-icons/io5";
import { FcMoneyTransfer, FcDonate } from "react-icons/fc";
import { useNavigate } from "react-router";
import { useAccount } from "wagmi"
import { useConnectModal } from "@rainbow-me/rainbowkit";


const CallToAction = () => {
  const { isConnected } = useAccount()
  const { openConnectModal } = useConnectModal();
  const navigate = useNavigate()
  const stepsDiv = 'flex justify-between'
  const steps = 'w-[13em] bg-[#f6f3f3] p-[10px] rounded-md border-[2px] border-[#d3d3d3] cursor-pointer flex flex-col items-center text-center'
  const icons = 'h-[40px] w-[40px]'
  const h4 = 'font-semibold'
  const actionP = 'font-normal text-gray-600'


  const handleNavigation = async() => {
    console.log(isConnected)
    try {
      if (isConnected) {
        navigate('/create');
      } else {
        (openConnectModal as () => void)(); // Type assertion
      }
    } catch(error) {
      console.error(error)
    }

  };
  
  
  return (
    <div className='py-10'>
        <div className='py-10 flex flex-col gap-3'>
          <h1 className='text-4xl font-bold'>Speed-run your ideas with superfunds</h1>
          <h4>superfunds creates a way for developers to generate fundings for open-source features</h4>
        </div>
        <div className={stepsDiv}>
          <div className={steps}>
              <IoFlash className={icons} style={{color: "#326cf1"}}/>
              <h4 className={h4}>1. Create a proposal</h4>
              <p className={actionP}>link a Github issue, set your price and get a sharable link</p>
          </div>
          <div className={steps}>
              <FcDonate className={icons}/>
              <h4 className={h4}>2. Secure funding</h4>
              <p className={actionP}>share the link with friends to get funding</p>
          </div>
          <div className={steps}>
              <FcMoneyTransfer className={icons}/>
              <h4 className={h4}>3. Deliver and get paid</h4>
              <p className={actionP}>fix the issue deliver and get paid</p>
          </div>
        </div>
        <div className='flex items-center justify-center mt-[50px]'>
            <button className='bg-[#0f50e7d8] rounded-md p-[10px] border-none text-white font-bold flex items-center justify-center text-[16px]'
            onClick={handleNavigation}>
            <IoFlash className={icons}/>
              Create Proposal
            </button>
        </div>
        
    </div>
  )
}

export default CallToAction