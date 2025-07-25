// src/components/Hero.tsx

const Hero = () => {
  // AÑADIMOS UN ESTILO DIRECTO PARA LA PRUEBA
  return (
    <div 
      className="min-h-screen flex items-center" 
      style={{ backgroundColor: 'red' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex justify-center">
            <div className="w-60 h-60 bg-purple-900/30 rounded-full flex items-center justify-center">
              <p className="text-gray-400">Avatar</p>
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Soy <br />
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Desarrollador de Software
              </span>
            </h1>
            <p className="max-w-xl text-lg text-gray-400">
              Un diseñador UI/UX autodidacta con más de 3 años de experiencia, creando productos digitales que equilibran las necesidades del usuario y los objetivos del negocio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;