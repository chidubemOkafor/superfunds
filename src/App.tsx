import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  sepolia
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import Navbar from './components/navbar/Navbar'
import { AddressProvider } from './contexts/AddressContext/AddressContext'
import { Routes, Route, BrowserRouter } from 'react-router';
import Home from './pages/home/Home'
import Campaign from './components/campaign/Campaign';
import Footer from './components/footer/Footer';
import CreateProposal from './components/createproposal/CreateProposal';
import NotFound from './pages/404/NotFound';

/* New API that includes Wagmi's createConfig and replaces getDefaultWallets and connectorsForWallets */
const config = getDefaultConfig({
  appName: 'RainbowKit demo',
  projectId: '752a019b5744c10005e47eee40f8f516',
  chains: [sepolia, mainnet, polygon, optimism, arbitrum, base],
  ssr: true,
})

const queryClient = new QueryClient()

function App() {

  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <AddressProvider>
            <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="proposal/:campaign" element={<Campaign />} />
              <Route path="create" element={<CreateProposal/>} />
              <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
            </BrowserRouter>
            </AddressProvider>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  )
}

export default App