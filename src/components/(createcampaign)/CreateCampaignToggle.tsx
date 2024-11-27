import "./CreateCampaign.css"
import { useModalToggle } from "../../contexts/ToggleContext/ToggleModal"
import FormModal from "../ui/formmodal/FormModal"
import connectContract from "../../config/contractConfig"
import { useState } from "react"
import { useAddressContext } from "../../contexts/AddressContext/AddressContext"
import { ethers } from "ethers"
import { parseDateToUnix } from "../../utils/parseDateToUnix"
import { notification, Ntype } from "../../utils/notification"

interface Data {
    campaignName: string
    targetAmount: string
    minimumAmount: string
    unlockDate: string
}

const CreateCampaignToggle = () => {
    const { address } = useAddressContext()
    const [loading, setLoading] = useState(false)
    const { state, setState } = useModalToggle()
    const {handleNotification} = notification()
   

    const [data, setData] = useState<Data>({
        campaignName: "",
        targetAmount: "",
        minimumAmount: "",
        unlockDate: "",
    })

    const handleChange = (e: { target: { name: string; value: string | number } }) => {
        const { name, value } = e.target
        setData((prevData: Data) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        setLoading(true)

        if (!address) {
           // tostify
           handleNotification({
            type: Ntype.error,
            message: "address is invalid"
           })
            setLoading(false)
            return
        }

        try {
            const  fundingContract  = await connectContract()
            const tx = await fundingContract?.createNewFunding(
                data.campaignName,
                ethers.parseEther(data.targetAmount),
                parseDateToUnix(data.unlockDate),
                ethers.parseEther(data.minimumAmount)
            )

            const receipt = await tx?.wait()

            if (!receipt || receipt.status === 0) {
                // notification
                handleNotification({
                    type: Ntype.error,
                    message: "failed to create funding campaign"
                })
                return
            }
            // notification
            handleNotification({
                type: Ntype.success,
                message: "created funding campaign"
            })

            setData({
                campaignName: "",
                targetAmount: "",
                minimumAmount: "",
                unlockDate: "",
            })


        } catch (error) {
            console.error(error)
            // notification
            handleNotification({
                type: Ntype.error,
                message: "something went wrong"
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <div className="main">
                <div className="create_button" onClick={() => setState(true)}>
                    <p className="plus">+</p>
                </div>
            </div>
            {state && (
                <FormModal
                    setState = {setState}
                    handleChange = {handleChange}
                    handleSubmit = {handleSubmit}
                    setLoading = {setLoading}
                    loading = {loading}
                />
            )}
        </div>
    )
}

export default CreateCampaignToggle
