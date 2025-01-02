import { ErrorMessage, Formik, FormikHelpers, Form } from 'formik';
import { ValidationSchema } from './ValidationSchema';
import { IoFlash } from "react-icons/io5";
import { Input } from '../ui/input';
import ProposalFee from '../ui/createProposal/ProposalFee';
import { useAccount } from "wagmi"
import { ConnectButton } from '@rainbow-me/rainbowkit';
import AlertBox from '../ui/AlertBox';
import { ethers } from 'ethers';
import { connectContract } from '../../config/contractConfig';
import { useState } from 'react';
import { Spinner } from './Spinner';
import { useNotification } from '../../hook/useNotification';
import { Ntype } from '../../hook/useNotification';
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"  
import { CreateFunding } from '../../interface/typechain-types/createfunding';

export interface FormValues {
  issueLink: string;
  maxAmount: number;
  minAmount: number;
  day: number;
  hour: number;
  fee: number;
  deliveryTime?: number;
}

const CreateProposal:React.FC = () => {
  const { isConnected } = useAccount()
  const { handleNotification } = useNotification()
  const [ isLoading, setIsLoading ] = useState(false)

  const initialValues: FormValues = {
    issueLink: "",
    maxAmount: 0,
    minAmount: 0,
    day: 0,
    hour: 1,
    fee: 0,
  };

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    setIsLoading(true)  
    try { 
      let deliveryTime = values.day * 24 + values.hour;
      const unlockTime = Math.floor(Date.now() / 1000) + deliveryTime * 3600;
  
      const data = {
        issueLink: values.issueLink,
        maxAmount: values.maxAmount.toString(),
        minAmount: values.minAmount.toString(),
        unlockTime,
        feePercentage: values.fee,
      };
  
      const fundingContract = await connectContract({type: 'factory'});
      if (!fundingContract) {
        console.error("Failed to connect to contract");
        throw new Error("Contract connection failed");
      }

      const tx = await (fundingContract as CreateFunding).createNewFunding(
        data.issueLink,
        ethers.parseEther(data.maxAmount),
        BigInt(data.unlockTime),
        ethers.parseEther(data.minAmount),
        data.feePercentage,
      );

      const receipt = await tx.wait();
      if (receipt?.status === 0) {
        handleNotification({type: Ntype.error , message: "Transaction failed"} )
        console.error("Transaction failed");
        throw new Error("Transaction reverted");
      }

      handleNotification({type: Ntype.success , message: "Proposal created successfully"})
      console.log("Success:", data);

    } catch (error) {

      handleNotification({type: Ntype.error , message: "something went wrong"})
      console.error("Error during submission:", error);

    } finally {
      setSubmitting(false);
      setIsLoading(false)
    }
  };
  
  return (
    <div className="items-center justify-center flex flex-col gap-5">
      <ToastContainer position="bottom-right" draggable/>
      <p className="text-4xl font-bold">Create Proposal</p>
      <Formik
        initialValues={initialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, setFieldValue }) => (
          <Form className="w-[90%] sm:w-[35em] flex flex-col gap-7">
            <div className="flex flex-col gap-1">
              <label htmlFor="issueLink" className="font-bold">
                GitHub repository Link<span className="text-red-600">*</span>
              </label>
              <Input
                id="issueLink"
                name="issueLink"
                type="text"
                placeholder="https://github.com/user/repo/issue/123"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.issueLink}
              />
              <ErrorMessage name="issueLink" component="p" className="text-red-600 text-sm" />
              <p className="text-sm">Enter the link to the GitHub issue</p>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="maxAmount" className="font-bold">
                Max Amount (in Ether)<span className="text-red-600">*</span>
              </label>
              <Input
                id="maxAmount"
                name="maxAmount"
                type="number"
                step="0.001"
                min={0}
                placeholder="Maximum Amount"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.maxAmount}
              />
              <ErrorMessage name="maxAmount" component="div" className="text-red-600 text-sm" />
              <p className="text-sm">Maximum amount required to close this task</p>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="minAmount" className="font-bold">
                Minimum Amount (in Ether)<span className="text-red-600">*</span>
              </label>
              <Input
                id="minAmount"
                name="minAmount"
                type="number"
                step="0.0001"
                min={0}
                placeholder="Minimum amount to donate in Ether"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.minAmount}
              />
              <ErrorMessage name="minAmount" component="div" className="text-red-600 text-sm" />
              <p className="text-sm">Minimum amount that can be donated</p>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="hour" className="font-bold">
                Delivery Time<span className="text-red-600">*</span>
              </label>
              <div className="flex gap-3">
                <div>
                  <Input
                    id="hour"
                    name="hour"
                    type="number"
                    min={0}
                    max={24}
                    placeholder="Hour"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.hour}
                  />
                  <ErrorMessage name="hour" component="div" className="text-red-600 text-sm" />
                </div>
                <div>
                  <Input
                    id="day"
                    name="day"
                    type="number"
                    min={0}
                    max={30}
                    placeholder="Day"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.day}
                  />
                  <ErrorMessage name="day" component="div" className="text-red-600 text-sm" />
                </div>
              </div>
              <p className="text-sm">Delivery time</p>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="fee" className="font-bold">
                Enter Fee Percentage<span className="text-red-600">*</span>
              </label>
              <ProposalFee
                id="fee"
                name="fee"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fee}
                setValue={setFieldValue}
              />
              <ErrorMessage name="fee" component="div" className="text-red-600 text-sm" />
              <p className="text-sm">Fees are charged when the proposal has ended</p>
            </div>

            {isConnected ? 
            <button
              type="submit"
              disabled={isLoading}
              className={`bg-[#0f50e7d8] rounded-md p-[10px] border-none text-white font-bold flex items-center justify-center text-[16px] ${isLoading ? 'cursor-not-allowed bg-[#7196eed8]' : ''}`}
            >
              {!isLoading ? <IoFlash className="h-[40px] w-[40px]" /> : <Spinner className='mr-5 text-[20px]'/>}
              Create Proposal
            </button> : 
              <div className='flex flex-col gap-3'>
                  <AlertBox description={'your wallet is not connected!'} type='error'/>
                  <ConnectButton/>
              </div>       
            }
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateProposal; 
