import Navbar from './components/(navbar)/Navbar'
import CreateCampaignToggle from './components/(createcampaign)/CreateCampaignToggle'
import { AddressProvider } from './contexts/AddressContext/AddressContext'

function App() {

  return (
    <>
      <AddressProvider>
        <Navbar/>
        <CreateCampaignToggle/>
      </AddressProvider>
    </>
  )
}

export default App
