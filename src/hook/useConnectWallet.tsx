import { ethers } from "ethers";
import { useState } from "react";
import { useAddressContext } from "../contexts/AddressContext/AddressContext";

const useConnectWallet = () => {
    const [ status, setStatus ] = useState(false)
    const { address, setAddress } = useAddressContext()
    

    const connect = async() => {
        if (!window.ethereum) {
            alert("MetaMask is not installed!");
            return;
        }

        try {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const walletAddress = await signer.getAddress();

            setStatus(true)
            setAddress(walletAddress);
        } catch (error) {
            console.error("connection error: ", error)
        }
    }

    return {
        connect,
        status,
        address,
    }

}

export default useConnectWallet