import { IoFlash } from 'react-icons/io5';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex justify-between bg-white text-gray-600 h-[80px] items-center px-[80px] mb-10'>
            <span className='text-[30px] font-bold flex'>
                <NavLink to='/'>
                    <p className='flex items-center justify-center gap-0'><IoFlash className='text-[#326cf1]'/>uperfunds</p>
                </NavLink>
            </span>
            <div className="flex gap-[20px] items-center">
                <ConnectButton/>
            </div>
        </div>
    )
}

export default Navbar