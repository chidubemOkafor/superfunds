import { ChangeEventHandler, Dispatch, SetStateAction } from "react"
import {ToastContainer} from "react-toastify"
import { PiSpinnerDuotone } from "react-icons/pi";
import 'react-toastify/dist/ReactToastify.css';
import "./FormModal.css"

interface Toggle {
  setState: Dispatch<SetStateAction<boolean>>
  handleChange: ChangeEventHandler<HTMLInputElement>
  handleSubmit: (e: { preventDefault: () => void; }) => Promise<void>
  setLoading: Dispatch<SetStateAction<boolean>>
  loading: boolean
}

const FormModal:React.FC<Toggle> = (
  {
    setState, 
    handleChange, 
    handleSubmit,
    loading,
  }) => {


  return (
    <div className = "main_form_container">
        <div className = "form_container">
            <div className = "close_btn" onClick = {() => setState(false)}>&times;</div>
            <p className = "create_campaign_text">create campaign</p>
            <form onSubmit = {handleSubmit}>
                <input name = "campaignName" type = "text" placeholder = "campaign name" onChange = {handleChange} required/>
                <input name = "targetAmount" type = "number" step="0.01" min="-10" placeholder ="target amount in ether" onChange = {handleChange} required/>
                <input name = "minimumAmount" type = "number" step="0.001" min="-10" placeholder  ="minimumAmount in ether" onChange = {handleChange} required/>
                <input name = "unlockDate" type = "date" placeholder = "unlockTime" onChange = {handleChange} required/>
                <button type = "submit" disabled = {loading}>{
                !loading ? "Submit" : <PiSpinnerDuotone className = "spinner"/>
                }</button>
            </form>
        </div>
        <ToastContainer/>
   </div>
  )
}

export default FormModal