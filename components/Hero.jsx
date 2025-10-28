
export default function Hero(){
  return (
    <section className="bg-[linear-gradient(180deg,#081730,rgba(11,33,64,0.9))] text-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
            When You've Tried Everything but Still Feel Stuck — Let the Stars Show What's Hidden
          </h1>
          <p className="mb-6 max-w-xl">
            Expert astrological guidance for business, career, health, money & family — practical roadmaps and timing.
          </p>
          <div className="flex gap-4">
            <a className="bg-accent text-cosmic px-6 py-3 rounded-md font-semibold" href="/booking">Book Your Reading</a>
            <a className="border border-white px-6 py-3 rounded-md" href="/services">Explore Services</a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-64 h-64 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
            <img src="/profile-placeholder.jpg" alt="Profile" className="w-52 rounded-lg shadow-lg"/>
          </div>
        </div>
      </div>
    </section>
  )
}
