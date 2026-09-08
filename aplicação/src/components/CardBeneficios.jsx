import img_1 from '../assets/entrega.png'
import img_2 from '../assets/fone.png'
import img_3 from '../assets/card.png'
import img_4 from '../assets/compra_segura.png'

const CardBeneficios = () => {

    const cards = [{
        img: img_1,
        text: "Frete Grátis",
        paragrafo: "Entrega gratuita para todo Brasil.",
    },
    {
        img: img_2,
        text: "Suporte ao Cliente",
        paragrafo: "Eficiência e confiabilidade garantidas.",
    },
    {
        img: img_3,
        text: "Parcelamento Facilitado",
        paragrafo: "Até 10x sem juros",
    },
    {
        img: img_4,
        text: "Compra Segura",
        paragrafo: "Ambiente 100% seguro",
    },
]
    return (
        <div>    
            <div className='flex justify-center gap-4 mb-14 overflow-x-scroll'>
                {cards.map((card) => (
                    <div key={card.key} className='bg-[#F5F3F6] w-[320px] h-[250px] rounded-3xl overflow-hidden ml-4 shrink-0'>
                        <img src={card.img} alt="" className='mb-3.5' />
                        <h1 className='text-center text-[20px] mb-2 font-playfair px-5'>{card.text}</h1>
                        <p className='text-center text-[#696f70] px-5'>{card.paragrafo}</p>
                    </div>
                ))}
            </div>
        </div>
    )
        
}

export default CardBeneficios
