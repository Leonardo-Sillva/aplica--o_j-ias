import { useState } from 'react'
import colar_1 from '../assets/colar-1.jpg'
import colar_2 from '../assets/colar-2.jpg'
import colar_3 from '../assets/colar-3.jpg'
import colar_4 from '../assets/colar-4.jpg'
import colar_5 from '../assets/colar-5.jpg'
import colar_6 from '../assets/colar-6.jpg'
import colar_banner from '../assets/colares-7.jpg'
import hover_colar_1 from '../assets/hover-colar-1.jpg'
import hover_colar_2 from '../assets/hover-colar-2.jpg'
import hover_colar_3 from '../assets/hover-colar-3.jpg'
import hover_colar_4 from '../assets/hover-colar-4.jpg'
import hover_colar_5 from '../assets/hover-colar-5.jpg'
import hover_colar_6 from '../assets/hover-colar-6.jpg'

const SectionColares = () => {

    const [hover, sethover] = useState(false)
    const [hover2, sethover2] = useState(false)
    const [hover3, sethover3] = useState(false)
    const [hover4, sethover4] = useState(false)
    const [hover5, sethover5] = useState(false)
    const [hover6, sethover6] = useState(false)

    return (
        <div>
            <div className="py-10 h-[1200px] grid grid-cols-4 grid-rows-2 gap-4" style={{gridTemplateAreas: "'a b c d' 'e f g d'"}}>
                <a href="#" className="[grid-area:a] rounded-2xl hover:border border-gray-400 ">
                    <div className='mx-4 mt-12 grid'>

                        <img src={colar_1} alt="" className={`col-start-1 row-start-1 transition-opacity ease-in-out duration-500 ${hover ? "opacity-0" : "opacity-100"}`} onMouseEnter={() => sethover(true)} onMouseLeave={() => sethover(false)} />

                        <img src={hover_colar_1} alt="" className={`col-start-1 row-start-1 transition-opacity duration-500 ${hover ? "opacity-100" : "opacity-0"}`} onMouseEnter={() => sethover(true)} onMouseLeave={() => sethover(false)}/>
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
                    <div className='mx-4 mt-12 grid'>

                        <img src={colar_2} alt="" className={`col-start-1 row-start-1 transition-opacity ease-in-out duration-500 ${hover2 ? "opacity-0" : "opacity-100"}`} onMouseEnter={() => sethover2(true)} onMouseLeave={() => sethover2(false)} />

                        <img src={hover_colar_2} alt="" className={`col-start-1 row-start-1 transition-opacity duration-500 ${hover2 ? "opacity-100" : "opacity-0"}`} onMouseEnter={() => sethover2(true)} onMouseLeave={() => sethover2(false)}/>
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
                    <div className='mx-4 mt-12 grid'>

                        <img src={colar_3} alt="" className={`col-start-1 row-start-1 transition-opacity ease-in-out duration-500 ${hover3 ? "opacity-0" : "opacity-100"}`} onMouseEnter={() => sethover3(true)} onMouseLeave={() => sethover3(false)} />

                        <img src={hover_colar_3} alt="" className={`col-start-1 row-start-1 transition-opacity duration-500 ${hover3 ? "opacity-100" : "opacity-0"}`} onMouseEnter={() => sethover3(true)} onMouseLeave={() => sethover3(false)}/>
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
                    <div className='mx-4 mt-12 grid'>

                        <img src={colar_4} alt="" className={`col-start-1 row-start-1 transition-opacity ease-in-out duration-500 ${hover4 ? "opacity-0" : "opacity-100"}`} onMouseEnter={() => sethover4(true)} onMouseLeave={() => sethover4(false)} />

                        <img src={hover_colar_4} alt="" className={`col-start-1 row-start-1 transition-opacity duration-500 ${hover4 ? "opacity-100" : "opacity-0"}`} onMouseEnter={() => sethover4(true)} onMouseLeave={() => sethover4(false)}/>
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
                    <div className='mx-4 mt-12 grid'>

                        <img src={colar_5} alt="" className={`col-start-1 row-start-1 transition-opacity ease-in-out duration-500 ${hover5 ? "opacity-0" : "opacity-100"}`} onMouseEnter={() => sethover5(true)} onMouseLeave={() => sethover5(false)} />

                        <img src={hover_colar_5} alt="" className={`col-start-1 row-start-1 transition-opacity duration-500 ${hover5 ? "opacity-100" : "opacity-0"}`} onMouseEnter={() => sethover5(true)} onMouseLeave={() => sethover5(false)}/>
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
                    <div className='mx-4 mt-12 grid'>

                        <img src={colar_6} alt="" className={`col-start-1 row-start-1 transition-opacity ease-in-out duration-500 ${hover6 ? "opacity-0" : "opacity-100"}`} onMouseEnter={() => sethover6(true)} onMouseLeave={() => sethover6(false)} />

                        <img src={hover_colar_6} alt="" className={`col-start-1 row-start-1 transition-opacity duration-500 ${hover6 ? "opacity-100" : "opacity-0"}`} onMouseEnter={() => sethover6(true)} onMouseLeave={() => sethover6(false)}/>
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
