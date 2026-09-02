import img_perfil_1 from '../assets/img_review_1.webp'
import img_perfil_2 from '../assets/img_review_2.webp'
import img_perfil_3 from '../assets/img_review_3.webp'
import img_perfil_4 from '../assets/img_review_4.webp'
import img_perfil_5 from '../assets/img_review_5.webp'

import star from '../assets/star.svg'

const SectionReviews = () => {

  const opinions = [
    {
      perfil: img_perfil_1,
      comentario: "Estava procurando uma pulseira de couro que fosse estilosa, mas que também combinasse com tudo. A que eu comprei aqui superou minhas expectativas! O fecho é prático e o material é de altíssima qualidade. O custo-benefício é excelente.",
      name: "--- Lucas S.",
      key: 1,
    },
    {
      perfil: img_perfil_2,
      comentario: "Comprei um colar e ele é simplesmente foda. Simplesmente mudou meu visual. Material de primeira, pesado na medida certa. Recomendo muito.",
      name: "--- Rafael B.",
      key: 2,
    },
    {
      perfil: img_perfil_3,
      comentario: "Fiz o pedido de um colar  e o atendimento foi impecável, tiraram todas as minhas dúvidas e me ajudaram a escolher a peça ideal. O produto superou as minhas expectativas, é um acessório  discreto e elegante, do jeito que eu queria. Recomendo muito!",
      name: "--- Gustavo T.",
      key: 3,
    },
    {
      perfil: img_perfil_4,
      comentario: "Meu novo anel  é animal. O design é único e a qualidade me surpreendeu. Não tiro mais do dedo. A loja está de parabéns!",
      name: "--- Lucas J.",
      key: 4,
    },
    {
      perfil: img_perfil_5,
      comentario: "Comprei um brinco de argola discreto e achei incrível como ele transformou meu visual. A qualidade é excelente e o acabamento é impecável. É a minha primeira vez usando esse tipo de acessório e me senti muito mais confiante. Recomendo!",
      name: "--- Felipe W.",
      key: 5,
    },
  ]

  return (
    <div className='h-[800px]'>
      <h1 className='text-center text-4xl font-playfair mb-10'>Reviews</h1>
      <div className='flex overflow-x-auto gap-4 scrollbar-hide'>
        {opinions.map((opinion) => (
          <div key={opinion.key} className='w-[450px] h-[350px] bg-[#F8F6F5] rounded-2xl flex flex-col items-center justify-center shrink-0'>
            <img src={opinion.perfil} alt="" className='w-18 rounded-[35px] mb-7' />
            <svg class="icon" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="109" height="20" viewBox="0 0 109 20" fill="none">
              <path className=" text-amber-300" d="M10.3333 14.3915L15.4833 17.4998L14.1208 11.6415L18.6667 7.704L12.675 7.18734L10.3333 1.6665L7.99167 7.18734L2 7.704L6.54583 11.6415L5.18333 17.4998L10.3333 14.3915Z" fill="currentColor"></path>
              <path className=" text-amber-300" d="M32.3333 14.3915L37.4833 17.4998L36.1208 11.6415L40.6667 7.704L34.675 7.18734L32.3333 1.6665L29.9917 7.18734L24 7.704L28.5458 11.6415L27.1833 17.4998L32.3333 14.3915Z" fill="currentColor"></path>
              <path className=" text-amber-300" d="M54.3333 14.3915L59.4833 17.4998L58.1208 11.6415L62.6667 7.704L56.675 7.18734L54.3333 1.6665L51.9917 7.18734L46 7.704L50.5458 11.6415L49.1833 17.4998L54.3333 14.3915Z" fill="currentColor"></path>
              <path className=" text-amber-300" d="M76.3333 14.3915L81.4833 17.4998L80.1208 11.6415L84.6667 7.704L78.675 7.18734L76.3333 1.6665L73.9917 7.18734L68 7.704L72.5458 11.6415L71.1833 17.4998L76.3333 14.3915Z" fill="currentColor"></path>
              <path className=" text-amber-300" d="M98.3333 14.3915L103.483 17.4998L102.121 11.6415L106.667 7.704L100.675 7.18734L98.3333 1.6665L95.9917 7.18734L90 7.704L94.5458 11.6415L93.1833 17.4998L98.3333 14.3915Z" fill="currentColor"></path>
            </svg>
            <p className='text-center mt-7'>{opinion.comentario}</p>
            <p className='font-bold mt-6 '>{opinion.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionReviews
