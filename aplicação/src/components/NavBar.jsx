import logo_heydude from '../assets/logo_heydude.png'
import { RiSearch2Line } from "react-icons/ri";
import { FiShoppingBag } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";


function NavBar() {
    return (
        <div className='w-full flex justify-between items-center shrink-0  bg-transparent transition duration-300 ease-in-out hover:bg-black overflow-hidden px-4 py-5 max-lg:bg-black'>
            <GiHamburgerMenu size={26} className='text-white min-lg:hidden ease-in-out transition duration-300 hover:cursor-pointer hover:text-[#4CA206]' />
            <div className='shrink-0'>
                <img src={logo_heydude} alt="logo heydude" className='w-28 cursor-pointer' />
            </div>
            <div className='text-white text-[17px] max-lg:hidden'>
                <ul className='flex gap-5'>
                    <li><a href="#" className='ease-in-out transition duration-300 hover:text-[#4CA206]'>Anéis</a></li>
                    <li><a href="#" className='ease-in-out transition duration-300 hover:text-[#4CA206]'>Pulseiras</a></li>
                    <li><a href="#" className='ease-in-out transition duration-300 hover:text-[#4CA206]'>Colares</a></li>
                    <li><a href="#" className='ease-in-out transition duration-300 hover:text-[#4CA206]'>Brincos</a></li>
                    <li><a href="#" className='ease-in-out transition duration-300 hover:text-[#4CA206]'>Conjuntos</a></li>
                    <li><a href="#" className='ease-in-out transition duration-300 hover:text-[#4CA206]'>Coleções</a></li>
                    <li><a href="#" className='ease-in-out transition duration-300 hover:text-[#4CA206]'>Rastreio</a></li>
                </ul>
            </div>
            <div className='flex gap-5 justify-center items-center'>
                <div className='mr-2 max-lg:hidden'>
                    <p className='flex items-center text-blue-50 cursor-pointer hover:text-[#4CA206] tracking-wide font-bold text-[14.5px]'>Brasil (BRL R$) <IoIosArrowDown size={26} className='pl-1.5'/></p>
                </div>
                <div>
                    <RiSearch2Line size={27} className="scale-x-[-1] text-white transition duration-300 hover:cursor-pointer hover:text-[#6D6D6D]" />
                </div>
                <div>
                    <FiShoppingBag size={27} className="text-white transition duration-300 hover:cursor-pointer hover:text-[#6D6D6D]" />
                </div>
            </div>
        </div>
    )
}

export default NavBar