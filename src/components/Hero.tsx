// src/components/Hero.tsx

const Hero = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="md:w-1/3 flex justify-center">
            <div className="w-52 h-52 bg-purple-900/40 rounded-full">
              {/* El avatar irá aquí */}
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Soy <br />
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Desarrollador de Software
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-400 max-w-lg">
              Un diseñador UI/UX autodidacta con más de 3 años de experiencia en la industria.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;