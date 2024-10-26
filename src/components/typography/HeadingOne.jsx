
const Hero = () => {
  return (
    <section
      className="absolute z-10 bg-black/50 hero-section w-full h-full flex items-center"
    >


      <div
        className="relative mx-auto max-w-screenxl px-4 sm:px-6 flex items-center justify-center md:px-8"
      >

        <div className="text-center flex mt-10 justify-center items-center flex-col">

          <div className="flex flex-col text-center">
            <span className="source-sans-400 text-[max(6vw,40px)] justify-center flex-wrap flex leading-none gap-1 sm:gap-4">
              <span className="bg-clip-text bg-gradient-to-t kanit-regular from-slate-400 to-white opacity-70 text-transparent">Sustainable</span>
              <span className="bg-clip-text bg-gradient-to-t kanit-regular from-slate-400 to-white opacity-70 text-transparent">Packaging</span>
            </span>
            <h5 className="bg-clip-text bg-gradient-to-b from-slate-400 to-white opacity-70 text-transparent kanit-light text-[max(2vw,18px)]">For Every Need</h5>

          </div>




        </div>
      </div>
    </section>
  )
}

export default Hero