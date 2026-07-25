const benefits = [
        "GARANTIA VITALÍCIA",
        "25.000+ CLIENTES SATISFEITOS",
        "À PROVA DE MANCHAS",
        "PEÇAS FEITA A MÃO",
    ];
export default function NavBarLoop() {
  return (

      < div className = "bg-black/80 text-amber-50 font-bold absolute bottom-0 center w-screen px-8 h-12 overflow-hidden" >
        <ul className="h-[100%] flex list-disc justify-between items-center w-max animate-marquee">
          {[...benefits, ...benefits].map((benefit, index) => (
            <li key={index} className="mx-8 whitespace-nowrap">{benefit}</li>
          ))}
        </ul>
    </div >
  )
}
