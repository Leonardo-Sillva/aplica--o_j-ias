
const SectionVideo = () => {
    return (
        <div className="flex w-full items-center flex-col">
            <h1 className="text-center text-5xl w-[500px] mb-10 max-md:text-3xl max-md:w-[350px]">Materiais de Altíssima Qualidade Para Garantir a Excelência em Cada Peça</h1>
            <div className="relative h-[600px] w-full overflow-hidden mb-14 max-md:h-[300px]">
                <video src="//lojaheydude.com/cdn/shop/videos/c/vp/2fbd4534574543dd8a55808737a430a0/2fbd4534574543dd8a55808737a430a0.HD-1080p-2.5Mbps-57779699.mp4?v=0" 
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls 
                    className="absolute w-full mx-auto inset-0 h-full object-cover rounded-3xl "></video>
            </div>
        </div>
    )
}

export default SectionVideo
