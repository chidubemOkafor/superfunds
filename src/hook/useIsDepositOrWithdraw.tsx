import { useState } from "react";

export const useIsDepositOrWithdraw = () => {
    const [isDeposit, setIsDeposit] = useState<boolean>(true);

    const checkTime = (proposalTime: number, currentAmount: number, maxAmount: number) =>  {
        // if time has not reached isDeposit is false
        if (Math.floor(Date.now() / 1000 ) > proposalTime || currentAmount == maxAmount) {
            setIsDeposit(false)
        }
    }
    
    return { isDeposit, checkTime };
};
