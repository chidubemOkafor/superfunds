import { useState } from "react";

export const useIsDepositOrWithdraw = () => {
    const [isDeposit, setIsDeposit] = useState<boolean>(false);

    const checkTime = (proposalTime: number) => {
        setIsDeposit(proposalTime < Math.floor(Date.now() / 1000));
        console.log("proposalTIme: ",proposalTime);
        console.log("currentTIme: ",Math.floor(Date.now() / 1000));
    }
    return { isDeposit, checkTime };
};
