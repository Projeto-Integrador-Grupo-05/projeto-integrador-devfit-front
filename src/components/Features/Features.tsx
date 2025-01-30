

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Plataforma</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Fácil de Usar</h3>
            <p>Interface intuitiva para todos os usuários.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Design Moderno</h3>
            <p>Layouts responsivos e atraentes.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Suporte 24hrs</h3>
            <p>Assistência sempre disponível.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

