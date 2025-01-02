import { FaFaceSadCry } from "react-icons/fa6";
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className='text-center flex justify-center items-center flex-col gap-5 h-[100vh]'>
      <p className='text-4xl font-bold'>404  - Page not found</p>
      <FaFaceSadCry className='text-7xl text-blue-500'/>
      <p>oops nothing here</p>
      <Link to="/" className='hover:underline cursor-pointer'>Go Back Home</Link>
    </div>
  )
}

export default NotFound
