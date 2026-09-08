import logo from '../assets/logo_heydude.png'

import card_1 from '../assets/card_1.svg'
import card_2 from '../assets/card_2.svg'
import card_3 from '../assets/card_3.svg'
import card_4 from '../assets/card_4.svg'
import card_5 from '../assets/card_5.svg'
import card_6 from '../assets/card_6.svg'

import seta from '../assets/seta.svg'

const CardFooter = () => {
    return (
        <div>
            <div className="h-[500px] bg-[#000000] text-white flex justify-between pl-22 pr-46 pt-12 border-b-[1px] border-[blue]">
                <div className="flex flex-col gap-5">
                    <img src={logo} alt="" className='w-[170px]' />
                    <p className="w-[450px]">Na Hey Dude, oferecemos joias e acessórios masculinos de qualidade com atendimento dedicado. Nosso compromisso é garantir sua satisfação em cada compra, tornando sua experiência simples, segura e marcante.
                    </p>
                    <p>ATENDIMENTO AO CLIENTE</p>
                    <p className="font-bold">SAC (Serviço de Atendimento ao Consumidor)</p>
                    <div>
                        <p><span className="font-bold">E-mail:</span> sac@lojaheydude.com</p>
                        <p><span className="font-bold">WhatsApp:</span>  (54) 996554539</p>
                    </div>
                    <p className="font-bold">Horário de Atendimento</p>
                    <p>Seg. à Sex. 9:00h às 18:00h</p>
                </div>

                <div>
                    <h1 className="font-playfair mb-6 text-[18px] font-bold">Nossas Politicas</h1>
                    <ul className="flex flex-col gap-4 text-[17px]">
                        <li><a href="#" className='transition-all ease-in-out duration-200 hover:text-[#2637E2]'>Trocas e Devoluções</a></li>
                        <li><a href="#" className='transition-all ease-in-out duration-200 hover:text-[#2637E2]'>Termos de Uso</a></li>
                        <li><a href="#" className='transition-all ease-in-out duration-200 hover:text-[#2637E2]'>Termos de serviço</a></li>
                        <li><a href="#" className='transition-all ease-in-out duration-200 hover:text-[#2637E2]'>Políticas de Privacidade</a></li>
                        <li><a href="#" className='transition-all ease-in-out duration-200 hover:text-[#2637E2]'>FAQ</a></li>
                        <li><a href="#" className='transition-all ease-in-out duration-200 hover:text-[#2637E2]'>Como Rastrear Meu Pedido</a></li>
                        <li><a href="#" className='transition-all ease-in-out duration-200 hover:text-[#2637E2]'>Políticas de Reembolso</a></li>
                        <li><a href="#" className='transition-all ease-in-out duration-200 hover:text-[#2637E2]'>Política de Envio, Prazos e Entrega</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-playfair mb-6 text-[18px] font-bold">Nossos Termos</h1>
                    <ul className="flex flex-col gap-4 text-[17px]">
                        <li><a href="#" className='transition-all ease-in-out duration-200 hover:text-[#2637E2]'>Termos de Uso</a></li>
                        <li><a href="#" className='transition-all ease-in-out duration-200 hover:text-[#2637E2]'>Termos de serviço</a></li>
                        <li><a href="#" className='transition-all ease-in-out duration-200 hover:text-[#2637E2]'>Trocas e Devoluções</a></li>
                        <li><a href="#" className='transition-all ease-in-out duration-200 hover:text-[#2637E2]'>Política de Envio, Prazos e Entrega</a></li>
                        <li><a href="#" className='transition-all ease-in-out duration-200 hover:text-[#2637E2]'>Políticas de Privacidade</a></li>
                        <li><a href="#" className='transition-all ease-in-out duration-200 hover:text-[#2637E2]'>Políticas de Reembolso</a></li>
                    </ul>
                </div>
            </div>

            <div className='bg-black flex justify-between px-20 py-7'>
                <div className='flex items-center'>
                    <div>
                        <select id="moedas" name="moedas" className='bg-black rounded-2xl mr-8 text-white'>
                            <option value="BRL">Real Brasileiro (R$)</option>
                            <option value="USD">Dólar Americano (US$)</option>
                            <option value="EUR">Euro (€)</option>
                            <option value="GBP">Libra Esterlina (£)</option>
                        </select>
                    </div>
                    <div className='flex gap-2'>
                        <img src={card_1} alt="" className='w-[45px]' />
                        <img src={card_2} alt="" className='w-[45px]' />
                        <img src={card_3} alt="" className='w-[45px]' />
                        <img src={card_4} alt="" className='w-[45px]' />
                        <img src={card_5} alt="" className='w-[45px]' />
                        <img src={card_6} alt="" className='w-[45px]' />
                    </div>
                </div>
                <div className='flex items-center'>
                    <p className='text-[#c2dbdb] mr-8'>Copyright © 2026.</p>
                    <a href="#"><img src={seta} alt="" className='bg-white rounded-[50px] p-3'/></a>
                </div>
            </div>

        </div>
    )
}

export default CardFooter
