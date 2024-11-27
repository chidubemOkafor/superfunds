import useConnectWallet from "../../hook/useConnectWallet"
import { truncateAddress } from "../../utils/trauncateAddress"
import './Navbar.css'
import { useState } from "react"
import useNetworkChecker from "../../hook/networkChecker"


const Navbar = () => {
    const { address, connect, status } = useConnectWallet()

    const [networkText, setNetworkText] = useState("Checking network...")

    useNetworkChecker(setNetworkText, connect)

    return (
        <div className='nav'>
            <p className="title">
            superfund
            </p>
            <div className="connect_div">
                {address == "" || <p>{truncateAddress(address as string)}</p>}
                <button className='' onClick={connect}>
                    {status ? "connected" :  "connect wallet"}
                </button>
                {networkText}
            </div>
        </div>
    )
}

export default Navbar