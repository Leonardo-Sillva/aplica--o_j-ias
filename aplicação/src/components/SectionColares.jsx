import { useState } from 'react'
import colar_1 from '../assets/colar-1.jpg'
import colar_2 from '../assets/colar-2.jpg'
import colar_3 from '../assets/colar-3.jpg'
import colar_4 from '../assets/colar-4.jpg'
import colar_5 from '../assets/colar-5.jpg'
import colar_6 from '../assets/colar-6.jpg'
import colar_banner from '../assets/colares-7.jpg'
import hover_colar_1 from '../assets/hover-colar-1.jpg'

const SectionColares = () => {

    const [hover, sethover] = useState(false)

    return (
        <div>
            <div className="py-10 h-[1200px] grid grid-cols-4 grid-rows-2 gap-4" style={{gridTemplateAreas: "'a b c d' 'e f g d'"}}>
                <a href="#" className="[grid-area:a] rounded-2xl hover:border border-gray-400 ">
                    <div className='mx-4 mt-12'>
                        <img src={hover ? hover_colar_1 : colar_1} alt="" className='transition ease-in-out duration-1000' onMouseEnter={() => sethover(true)} onMouseLeave={() => sethover(false)}/>
                        <div className='mt-16'>
                            <h1>Colar Masculino Ícone Preto</h1>
                            <div className='flex mb-4'>
                                <p className='text-red-800'>R$ 139,90 </p>
                                <p className='text-white bg-red-700 rounded-4xl ml-1 px-1'> -14%</p>
                            </div>
                            <p className='line-through text-[#606060]'>R$ 161,90</p>
                        </div>
                    </div>
                </a>
                <a href="#" className="[grid-area:b] rounded-2xl hover:border border-gray-400 ">
                    <div className='mx-4 mt-12'>
                        <img src={colar_2} alt="" className=''/>
                        <div className='mt-16'>
                            <h1>Colar Masculino Ícone Preto</h1>
                            <div className='flex mb-4'>
                                <p className='text-red-800'>R$ 139,90 </p>
                                <p className='text-white bg-red-700 rounded-4xl ml-1 px-1'> -14%</p>
                            </div>
                            <p className='line-through text-[#606060]'>R$ 161,90</p>
                        </div>
                    </div>
                </a>
                <a href="#" className="[grid-area:c] rounded-2xl hover:border border-gray-400 ">
                    <div className='mx-4 mt-12'>
                        <img src={colar_3} alt="" className=''/>
                        <div className='mt-16'>
                            <h1>Colar Masculino Ícone Preto</h1>
                            <div className='flex mb-4'>
                                <p className='text-red-800'>R$ 139,90 </p>
                                <p className='text-white bg-red-700 rounded-4xl ml-1 px-1'> -14%</p>
                            </div>
                            <p className='line-through text-[#606060]'>R$ 161,90</p>
                        </div>
                    </div>
                </a>
                <a href="#" className="[grid-area:d] border border-amber-100">
                    <div>
                         
                         coloque a imagem no background do A


                    </div>
                </a>
                <a href="#" className="[grid-area:e] rounded-2xl hover:border border-gray-400 ">
                    <div className='mx-4 mt-12'>
                        <img src={colar_4} alt="" className=''/>
                        <div className='mt-16'>
                            <h1>Colar Masculino Ícone Preto</h1>
                            <div className='flex mb-4'>
                                <p className='text-red-800'>R$ 139,90 </p>
                                <p className='text-white bg-red-700 rounded-4xl ml-1 px-1'> -14%</p>
                            </div>
                            <p className='line-through text-[#606060]'>R$ 161,90</p>
                        </div>
                    </div>
                </a>
                <a href="#" className="[grid-area:f] rounded-2xl hover:border border-gray-400 ">
                    <div className='mx-4 mt-12'>
                        <img src={colar_5} alt="" className=''/>
                        <div className='mt-16'>
                            <h1>Colar Masculino Ícone Preto</h1>
                            <div className='flex mb-4'>
                                <p className='text-red-800'>R$ 139,90 </p>
                                <p className='text-white bg-red-700 rounded-4xl ml-1 px-1'> -14%</p>
                            </div>
                            <p className='line-through text-[#606060]'>R$ 161,90</p>
                        </div>
                    </div>
                </a>
                <a href="#" className="[grid-area:g] rounded-2xl hover:border border-gray-400 ">
                    <div className='mx-4 mt-12'>
                        <img src={colar_6} alt="" className=''/>
                        <div className='mt-16'>
                            <h1>Colar Masculino Ícone Preto</h1>
                            <div className='flex mb-4'>
                                <p className='text-red-800'>R$ 139,90 </p>
                                <p className='text-white bg-red-700 rounded-4xl ml-1 px-1'> -14%</p>
                            </div>
                            <p className='line-through text-[#606060]'>R$ 161,90</p>
                        </div>
                    </div>
                </a>

            </div>
        </div>
    )
}

export default SectionColares
