import { IoFlash } from 'react-icons/io5';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex justify-between bg-white text-gray-600 h-[80px] items-center px-[80px]'>
            <span className='text-[40px] font-bold flex'>
                <NavLink to='/'>
                    <p>superfunds</p>
                    <IoFlash className='absolute text-[#326cf1] translate-x-[-23px] z-0'/>
                </NavLink>
            </span>
            <div className="flex gap-[20px] items-center">
                <ConnectButton/>
            </div>
        </div>
    )
}

export default Navbar