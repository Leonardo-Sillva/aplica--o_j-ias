import image_1 from '../assets/img-box-1.png'
import image_2 from '../assets/img-box-2.jpg'
import image_3 from '../assets/img-box-3.jpg'
import image_4 from '../assets/img-box-4.jpg'

const BannerSecondary2 = () => {
  return (
    <div>
      <div>
        <h1 className="uppercase font-playfair text-center text-[2rem] py-1">navegue poruma ampla gama de peças</h1>
        <div className="grid grid-cols-4 gap-4 px-8 py-4">

          <a href="#" className='h-73 bg-cover cursor-pointer rounded-[0.5rem] bg-amber-600 overflow-hidden relative shrink-0'>
            <div style={{ backgroundImage: `url(${image_1})` }} className="h-full w-full bg-cover transition-transform duration-1000 ease-out hover:scale-135">
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none"></div>
            <h2 className="text-white font-playfair text-3xl absolute bottom-0 left-0 pl-10 pb-10">Anéis</h2>
          </a>

          <a href="#" className='h-73 bg-cover cursor-pointer rounded-[0.5rem] bg-amber-600 overflow-hidden relative'>
            <div style={{ backgroundImage: `url(${image_2})` }} className="h-full w-full bg-cover transition-transform duration-1000 ease-out hover:scale-135">
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none"></div>
            <h2 className="text-white font-playfair text-3xl absolute bottom-0 left-0 pl-10 pb-10">Anéis</h2>
          </a>

          <a href="#" className='h-73 bg-cover cursor-pointer rounded-[0.5rem] bg-amber-600 overflow-hidden relative'>
            <div style={{ backgroundImage: `url(${image_3})` }} className="h-full w-full bg-cover transition-transform duration-1000 ease-out hover:scale-135">
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none"></div>
            <h2 className="text-white font-playfair text-3xl absolute bottom-0 left-0 pl-10 pb-10">Anéis</h2>
          </a>

          <a href="#" className='h-73 bg-cover cursor-pointer rounded-[0.5rem] bg-amber-600 overflow-hidden relative'>
            <div style={{ backgroundImage: `url(${image_4})` }} className="h-full w-full bg-cover transition-transform duration-1000 ease-out hover:scale-135">
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none"></div>
            <h2 className="text-white font-playfair text-3xl absolute bottom-0 left-0 pl-10 pb-10">Anéis</h2>
          </a>
        </div>



      </div>
    </div>

  )
}

export default BannerSecondary2
