import { useEffect } from "react"

const SEPOLIA_CHAIN_ID = "0xaa36a7"

const useNetworkChecker = (setNetworkText: (text: string) => void, connect: () => Promise<void>) => {
    useEffect(() => {
        const checkNetwork = async () => {
            try {
                const accounts = await window.ethereum.request({ method: "eth_accounts" })

                if (accounts.length === 0) {
                    await connect()
                }

                const chainId = await window.ethereum.request({ method: "eth_chainId" })

                if (chainId !== SEPOLIA_CHAIN_ID) {
                    setNetworkText("Please select the Sepolia Testnet")
                    promptUserToSwitch()
                } else {
                    setNetworkText("Connected to Sepolia")
                }
            } catch (error) {
                console.error("Error checking the network:", error)
                setNetworkText("Error detecting network")
            }
        }

        const promptUserToSwitch = async () => {
            try {
                await window.ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: SEPOLIA_CHAIN_ID }],
                })
                setNetworkText("Switched to Sepolia")
            } catch (error: any) {
                if (error.code === 4902) {
                    setNetworkText("Sepolia is not added to your wallet.")
                } else {
                    setNetworkText("Failed to switch network.")
                }
            }
        }

        checkNetwork()

        window.ethereum.on("chainChanged", (newChainId: string) => {
            if (newChainId !== SEPOLIA_CHAIN_ID) {
                setNetworkText("Please select the Sepolia Testnet")
                promptUserToSwitch()
            } else {
                setNetworkText("Connected to Sepolia")
            }
        })

        return () => {
            window.ethereum.removeListener("chainChanged", checkNetwork)
        }
    }, [setNetworkText, connect])
}

export default useNetworkChecker
