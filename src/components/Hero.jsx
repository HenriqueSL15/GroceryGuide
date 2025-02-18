function Hero() {
  return (
    <>
      <section className="relative h-[600px] bg-gray-100 bg-[url('https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] w-full h-full object-cover mb-10">
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-4 text-white">
            <div className="max-w-2xl backdrop-blur-lg bg-white/10 p-10 rounded-lg">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Busque os melhores preços e economize na sua refeição!
              </h1>
              <p className="text-lg md:text-xl mb-8 drop-shadow-md">
                Entregamos uma pesquisa rápida e eficiente com base em diversos
                supermercados da sua região!
              </p>
              <button className="bg-black hover:bg-white text-white hover:text-black px-8 py-3 border-3 border-black text-lg font-semibold transition-all">
                Pesquisar Agora
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
