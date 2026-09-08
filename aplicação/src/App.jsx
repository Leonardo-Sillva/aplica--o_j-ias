import './App.css'
import NavBar from './components/NavBar'
import BannerSection1 from './components/BannerSection1'
import BarPrimary from './components/BarPrimary'
import NavBarLoop from './components/NavBarLoop'
import BannerSecondary2 from './components/BannerSecondary2'
import SectionColares from './components/SectionColares'
import BannerEscolhaDesign from './components/BannerEscolhaDesign'
import BannerMan from './components/BannerMan'
import SectionPulseiras from './components/SectionPulseiras'
import SectionBrincos from './components/SectionBrincos'
import SectionReviews from './components/SectionReviews'
import SectionVideo from './components/SectionVideo'
import AcessoriosImportantes from './components/AcessoriosImportantes'
import CardBeneficios from './components/CardBeneficios'
import CardFooter from './components/CardFooter'

function App() {
  return (
    <>
      <section className="relative w-full h-screen bg-cover bg-[url('./assets/banner-section1.jpg')] max-lg:bg-center overflow-hidden">
        <div class="absolute inset-0 bg-black/30"></div>
        <div className='relative z-10'>
          <BarPrimary />
          <NavBar />
          <BannerSection1 />
        </div>
        <NavBarLoop />
      </section>
      <BannerSecondary2 />
      <SectionColares />
      <BannerEscolhaDesign />
      <section className="bg-[url('./assets/DESKTOP-BANNER-MAN.webp')] h-[595px] relative overflow-hidden bg-center mx-4 rounded-[8px] mb-10 max-md:h-[390px] max-md:bg-cover">
        <div className='absolute inset-0 bg-black/30'></div>
        <BannerMan />
      </section>
      <SectionPulseiras/>
      <SectionBrincos/>
      <SectionReviews/>
      <SectionVideo/>
      <AcessoriosImportantes/>
      <CardBeneficios/>
      <CardFooter/>
    </>
  )
}

export default App
