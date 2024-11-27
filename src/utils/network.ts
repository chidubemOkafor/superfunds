export const network = async() => {
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    return chainId != "0xaa36a7" ? "please select the Sepolia Testnet" : "Sepolia"
}