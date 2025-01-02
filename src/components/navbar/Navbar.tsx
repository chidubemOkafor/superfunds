import { IoFlash } from 'react-icons/io5';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex justify-center bg-white text-gray-600 h-[80px] mb-10 w-full'>
            <div className='flex w-[90%] justify-between items-center'>
                <span className='sm:text-[28px] md:text-[28px] lg:text-[30px] font-bold flex'>
                    <NavLink to='/'>
                        <p className='flex items-center justify-center gap-0'><IoFlash className='text-[#326cf1]'/>uperfunds</p>
                    </NavLink>
                </span>
                <div className="flex gap-[20px] items-center">
                    <ConnectButton/>
                </div>
            </div>
        </div>
    )
}

export default Navbar