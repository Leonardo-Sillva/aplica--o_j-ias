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
      <h1 className='text-center text-4xl font-playfair'>Reviews</h1>
      <div className='flex overflow-x-auto gap-4'>
        {opinions.map((opinion) => (
          <div key={opinion.key} className='w-[450px] h-[350px] bg-[#F8F6F5] rounded-2xl flex flex-col items-center justify-center shrink-0'>
            <img src={opinion.perfil} alt="" className='w-18 rounded-[35px]'/>
            <img src={star} alt="" className='py-5 stroke-amber-300'/>
            <p className='text-center'>{opinion.comentario}</p>
            <p className='font-bold mt-6 '>{opinion.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionReviews
