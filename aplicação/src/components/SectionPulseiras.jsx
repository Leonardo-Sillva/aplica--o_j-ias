import pulseira_1 from '../assets/pulseira_1.jpg'
import pulseira_2 from '../assets/pulseira_2.jpg'
import pulseira_3 from '../assets/pulseira_3.jpg'
import pulseira_4 from '../assets/pulseira_4.jpg'
import pulseira_5 from '../assets/pulseira_5.jpg'
import pulseira_6 from '../assets/pulseira_6.webp'
import pulseira_7 from '../assets/pulseira_7.webp'
import pulseira_8 from '../assets/pulseira_8.webp'
import pulseira_9 from '../assets/pulseira_9.webp'
import pulseira_10 from '../assets/pulseira_10.webp'
import pulseira_11 from '../assets/pulseira_11.webp'
import pulseira_12 from '../assets/pulseira_12.webp'

import hover_pulseira_1 from '../assets/hover_pulseira_1.jpg'
import hover_pulseira_2 from '../assets/hover_pulseira_2.jpg'
import hover_pulseira_3 from '../assets/hover_pulseira_3.jpg'
import hover_pulseira_4 from '../assets/hover_pulseira_4.jpg'
import hover_pulseira_5 from '../assets/hover_pulseira_5.jpg'
import hover_pulseira_6 from '../assets/hover_pulseira_6.jpg'
import hover_pulseira_7 from '../assets/hover_pulseira_7.jpg'
import hover_pulseira_8 from '../assets/hover_pulseira_8.jpg'
import hover_pulseira_9 from '../assets/hover_pulseira_9.jpg'
import hover_pulseira_10 from '../assets/hover_pulseira_10.jpg'
import hover_pulseira_11 from '../assets/hover_pulseira_11.jpg'
import hover_pulseira_12 from '../assets/hover_pulseira_12.jpg'

import { useState } from 'react'



const SectionPulseiras = () => {

  const [hover_pulseira1, sethover_pulseira1] = useState(false)
  const [hover_pulseira2, sethover_pulseira2] = useState(false)
  const [hover_pulseira3, sethover_pulseira3] = useState(false)
  const [hover_pulseira4, sethover_pulseira4] = useState(false)
  const [hover_pulseira5, sethover_pulseira5] = useState(false)
  const [hover_pulseira6, sethover_pulseira6] = useState(false)
  const [hover_pulseira7, sethover_pulseira7] = useState(false)
  const [hover_pulseira8, sethover_pulseira8] = useState(false)
  const [hover_pulseira9, sethover_pulseira9] = useState(false)
  const [hover_pulseira10, sethover_pulseira10] = useState(false)
  const [hover_pulseira11, sethover_pulseira11] = useState(false)
  const [hover_pulseira12, sethover_pulseira12] = useState(false)


  const pulseiras = [{
    img: pulseira_1,
    hover: hover_pulseira_1,
    titulo: "Pulseira Black Crucifixion - Convicção Sombria",
    key: 1,
    hover2: hover_pulseira1,
    sethover: sethover_pulseira1,
  },
  {
    img: pulseira_2,
    hover: hover_pulseira_2,
    titulo: "Pulseira Black Marrow - Resolução na Quietude",
    key: 2,
    hover2: hover_pulseira2,
    sethover: sethover_pulseira2,
  }, {
    img: pulseira_3,
    hover: hover_pulseira_3,
    titulo: "Pulseira Blood Core - O Calor que Permanece",
    key: 3,
    hover2: hover_pulseira3,
    sethover: sethover_pulseira3,
  },
  {
    img: pulseira_4,
    hover: hover_pulseira_4,
    titulo: "Pulseira Cathedral - Monumento de Reverência",
    key: 4,
    hover2: hover_pulseira4,
    sethover: sethover_pulseira4,
  },
  {
    img: pulseira_5,
    hover: hover_pulseira_5,
    titulo: "Pulseira Blood Crucifixion - Sacrifício e Convicção",
    key: 5,
    hover2: hover_pulseira5,
    sethover: sethover_pulseira5,
  },
  {
    img: pulseira_6,
    hover: hover_pulseira_6,
    titulo: " Pulseira Cipherbind - Intenção Codificada",
    key: 6,
    hover2: hover_pulseira6,
    sethover: sethover_pulseira6,
  },
  {
    img: pulseira_7,
    hover: hover_pulseira_7,
    titulo: "Pulseira Crossbones - O Segredo da Mortalidade",
    key: 7,
    hover2: hover_pulseira7,
    sethover: sethover_pulseira7,
  },
  {
    img: pulseira_8,
    hover: hover_pulseira_8,
    titulo: "Pulseira Crossfade - A Evolução Pessoal",
    key: 8,
    hover2: hover_pulseira8,
    sethover: sethover_pulseira8,
  },
  {
    img: pulseira_9,
    hover: hover_pulseira_9,
    titulo: "Pulseira Crucifixion - Contraste e Convicção",
    key: 9,
    hover2: hover_pulseira9,
    sethover: sethover_pulseira9,
  },
  {
    img: pulseira_10,
    hover: hover_pulseira_10,
    titulo: "Pulseira Cutthroat - Estilo Implacável",
    key: 10,
    hover2: hover_pulseira10,
    sethover: sethover_pulseira10,
  },
  {
    img: pulseira_11,
    hover: hover_pulseira_11,
    titulo: "Pulseira de Corrente Dupla Estilo Chinês Aço Prata",
    key: 11,
    hover2: hover_pulseira11,
    sethover: sethover_pulseira11,
  },
  {
    img: pulseira_12,
    hover: hover_pulseira_12,
    titulo: "Pulseira de Couro Magnética Cruz",
    key: 12,
    hover2: hover_pulseira12,
    sethover: sethover_pulseira12,
  },
  ]


  return (
    <div>
      <div className="h-[750px] bg-white">
        <div className="px-4 py-9 text-4xl">
          <h1 className="font-playfair max-md:text-3xl max-md:mb-8 text-center">Pulseiras</h1>
        </div>
        <div className="flex px-4 overflow-x-auto scrollbar-hide">
          {pulseiras.map((pulseira) => (
            <div key={pulseira.key} className='w-[265px] grid px-4 rounded-2xl border border-transparent hover:border  hover:border-gray-400 overflow-hidden shrink-0'>

              <img src={pulseira.img} alt="" className={`h-[350px] w-full col-start-1 row-start-1 cursor-pointer transition-opacity duration-500 ease-in-out py-14 max-sm:h-100 justify-self-center ${pulseira.hover2 ? "opacity-0" : "opacity-100"}`} onMouseEnter={() => pulseira.sethover(true)} onMouseLeave={() => pulseira.sethover(false)} />

              <img src={pulseira.hover} alt="" className={`h-[350px] w-full col-start-1 row-start-1 cursor-pointer transition-opacity duration-500 ease-in-out py-14 max-sm:h-100 justify-self-center ${pulseira.hover2 ? "opacity-100" : "opacity-0"}`} onMouseEnter={() => pulseira.sethover(true)} onMouseLeave={() => pulseira.sethover(false)} />

              <a href="#" className='hover:text-[#4C4C4C]'>
                <h1>{pulseira.titulo}</h1>
              </a>
              <div className='flex mb-4'>
                <p className='text-red-800'>R$ 149,90 </p>
                <p className='text-white bg-red-700 rounded-4xl ml-1 px-1'> -35%</p>
              </div>
              <p className='line-through text-[#606060]'>R$ 161,90</p>


            </div>


          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionPulseiras
