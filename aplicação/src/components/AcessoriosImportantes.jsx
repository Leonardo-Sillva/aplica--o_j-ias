import img_1 from '../assets/acessorios_1.webp'
import img_2 from '../assets/acessorios_2.webp'
import img_3 from '../assets/acessorios_3.webp'

const AcessoriosImportantes = () => {

    const acessorios = [
        {img: img_1,
        text: "Não Importa a Idade!",
        paragrafo: "Acessórios são uma adição versátil e poderosa para qualquer pessoa, independentemente da idade. Eles complementam o visual, adicionam personalidade e oferecem opções infinitas para se expressar. Não importa a idade, acessórios são uma forma fácil e divertida de aprimorar sua aparência e sentir-se confiante.",
        key: 1,
        },
        {
        img: img_2,
        text: "Procurando um Presente?",
        paragrafo: "Acessórios são uma ótima opção de presente, pois são versáteis, fáceis de usar e combinar com outras peças, tornando-os um presente prático e útil. Na Loja Hey Dude temos uma ampla variedade de opções disponíveis para presentear alguém que você AMA.",
        key: 2,
        },
        {
        img: img_3,
        text: "Do Casual ao Formal.",
        paragrafo: "Acessórios são uma poderosa do guarda-roupa, pois podem ser combinados com qualquer estilo e personalidade. Seja para um look casual ou formal, acessórios são uma escolha prática e versátil que pode ser usada com a maioria das roupas. Acesse a sua personalidade com acessórios versáteis da Loja Hey Dude que combinam com qualquer estilo.",
        key: 3,
        }
    ]

  return (
    <div>
      <h1 className="text-center font-playfair text-4xl mb-10">POR QUÊ OS ACESSÓRIOS SÃO TÃO <br /> IMPORTANTES?</h1>
      <div className='flex mb-14 overflow-x-scroll scrollbar-hide'>
        {acessorios.map((acessorio) => (
          <div key={acessorio.key} className='bg-[#F5F3F6] w-[313px] h-[640px] rounded-3xl overflow-hidden ml-6 shrink-0'>
            <img src={acessorio.img} alt="" className='mb-3.5'/>
            <h1 className='text-center text-[20px] mb-2 font-playfair px-5'>{acessorio.text}</h1>
            <p className='text-center text-[#696f70] px-5'>{acessorio.paragrafo}</p>
          </div>
        ))}

      </div>
    </div>
  )
}

export default AcessoriosImportantes
