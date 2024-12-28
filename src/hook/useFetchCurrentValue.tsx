import { useEffect, useState } from 'react'
import { handleCurrentValue } from '../utils/handleCurrentValue';

export const useFetchCurrentValue = (address: string) => {
    const [currentAmount, setCurrentAmount] = useState(0);
    const fetchValue = async (contractAddress: string) => {
        const value = await handleCurrentValue(contractAddress);
    
        if (value === null) {
            console.error("Failed to fetch the value.");
            return;
        }
        setCurrentAmount(value);
        console.log(`The current value is ${value} ETH`);
    };

    useEffect(() => {
        fetchValue(address)
    }, [])
    
    return {
        currentAmount
    }
}
