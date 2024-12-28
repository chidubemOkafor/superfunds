import { Input } from '../input'
import { FormikErrors } from 'formik'
import { FormValues } from '../../createproposal/CreateProposal'

interface proposalProp {
  id: string
  name: string
  className?: string
  placeholder?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  value?: number
  setValue: (field: string, value: any, shouldValidate?: boolean) => Promise<void | FormikErrors<FormValues>>
}

const ProposalFee:React.FC<proposalProp> = ({
  id,
  name,
  className = "",
  placeholder="0",
  onChange,
  onBlur,
  value,
  setValue
}) => {
  const style = 'bg-blue-100 py-2 px-4 rounded-md font-semibold hover:bg-blue-200'
  return (
    <div className='flex gap-5'>
        <Input 
        type='number' 
        id={id}
        name={name}     
        className={`${className}`}   
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        min={0}/>
        <button className={style} type='button' onClick={() => setValue(name, 15)}>15%</button>
        <button className={style} type='button' onClick={() => setValue(name, 10)}>10%</button>
        <button className={style} type='button' onClick={() => setValue(name, 5)}>5%</button>
    </div>
  )
}

export default ProposalFee