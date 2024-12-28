import { useNavigate } from "react-router";
import { useAccount } from "wagmi"
import { useConnectModal } from "@rainbow-me/rainbowkit";

export const useNavigationAndToggleModal = () => {
const { isConnected } = useAccount()
const { openConnectModal } = useConnectModal();
const navigate = useNavigate()

const handleNavigation = async() => {
    console.log(isConnected)
    try {
      if (isConnected) {
        navigate('/create');
      } else {
        (openConnectModal as () => void)();
      }
    } catch(error) {
      console.error(error)
    }
  };

    return { handleNavigation }

}