import anel_1 from '../assets/anel-1.jpg'
import anel_2 from '../assets/anel-2.jpg'
import anel_3 from '../assets/anel-3.jpg'
import anel_4 from '../assets/anel-4.jpg'

import hover_anel_1 from '../assets/hover-anel-1.jpg'
import hover_anel_2 from '../assets/hover-anel-2.jpg'
import hover_anel_3 from '../assets/hover-anel-3.jpg'
import hover_anel_4 from '../assets/hover-anel-4.jpg'

import { useState } from 'react'



const BannerEscolhaDesign = () => {

    const [hover_anel1, sethover_anel1] = useState(false)
    const [hover_anel2, sethover_anel2] = useState(false)
    const [hover_anel3, sethover_anel3] = useState(false)
    const [hover_anel4, sethover_anel4] = useState(false)

    const aneis = [{
    imagem: anel_1,
    hover_imagem: hover_anel_1,
    titulo: "Anel Masculino Vesper",
    preço: "139,90",
    area: "a",
    hover: hover_anel1,
    sethover: sethover_anel1,
},
{
    imagem: anel_2,
    hover_imagem: hover_anel_2,
    titulo: "Anel Masculino Vazio",
    preço: "139,90",
    area: "b",
    hover: hover_anel2,
    sethover: sethover_anel2,
},
{
    imagem: anel_3,
    hover_imagem: hover_anel_3,
    titulo: "Anel Masculino Solice Trançado",
    preço: "139,90",
    area: "c",
    hover: hover_anel3,
    sethover: sethover_anel3,
},
{
    imagem: anel_4,
    hover_imagem: hover_anel_4,
    titulo: "Anel Masculino Stella",
    preço: "139,90",
    area: "d",
    hover: hover_anel4,
    sethover: sethover_anel4,
}]

    return (
        <div>
            <div className="h-[750px] bg-white">
                <div className="flex justify-between px-4 py-9 text-3xl max-md:flex-col">
                    <h1 className="font-playfair max-md:text-2xl max-md:mb-8">Escolha Por Design</h1>
                    <p className="font-bold text-2xl bg-green-400 rounded-4xl px-3.5 py-2 max-md:w-fit max-md:text-[19px]">316L</p>
                </div>
                <div className="grid meu-grid2 grid-cols-4 grid-rows-1 px-4">
                    {aneis.map((anel) => (
                        <div key={anel.area} style={{ gridArea: anel.area, }} className=' grid px-4 rounded-2xl hover:border border-gray-400 '>

                            <img src={anel.imagem} alt="" className={`col-start-1 row-start-1 cursor-pointer transition-opacity duration-500 ease-in-out py-14 ${anel.hover ? "opacity-0" : "opacity-100"}`} onMouseEnter={() => anel.sethover(true)} onMouseLeave={() => anel.sethover(false)} />

                            <img src={anel.hover_imagem} alt="" className={`col-start-1 row-start-1 cursor-pointer transition-opacity duration-500 ease-in-out py-14 ${anel.hover ? "opacity-100" : "opacity-0"}`} onMouseEnter={() => anel.sethover(true)} onMouseLeave={() => anel.sethover(false)} />

                            <a href="#" className='hover:text-[#4C4C4C]'>
                                <h1>{anel.titulo}</h1>
                            </a>
                            <p>{anel.preço}</p>
                        </div>
                    )
                    )}

                </div>
                <div className='text-center mt-13'>
                    <a href="#" className='border border-2 border-black px-8 py-4 rounded-4xl font-medium ease-in-out transition-all duration-400 hover:bg-black hover:border-green-900 hover:text-white'>Ver Todos</a>
                </div>

            </div>
        </div>
    )
}

export default BannerEscolhaDesign
