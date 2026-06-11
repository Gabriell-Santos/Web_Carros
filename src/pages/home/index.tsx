import { Container } from "../../components/Container";

export function Home() {
  return (
    <Container>
      <section className="w-full max-w-3xl mx-auto p-4 flex flex-col items-center gap-6 mb-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Veículos Novos e Usados de todo o Brasil!
          </h1>
          <p className="text-gray-500 mt-2">Encontre o carro ideal para você</p>
        </div>

        <div className="w-full flex gap-2">
          <input
            className="w-full outline-none border-2 border-gray-300 focus:border-red-500 h-10 rounded-lg px-3 transition-colors"
            placeholder="Digite o veículo que deseja"
            type="text"
          />
          <button className="bg-red-600 hover:bg-red-700 h-10 px-10 rounded-xl font-medium text-white transition-colors">
            Buscar
          </button>
        </div>

        <main className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <section className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
            <img
              src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2026/202605/20260512/jeep-compass-1.3-t270-turbo-flex-longitude-at6-wmimagem01573726811.jpg?s=fill&w=1920&h=1440&q=75"
              alt="Jeep Compass"
              className="w-full h-48 object-cover"
            />
            <div className="p-3 flex flex-col gap-1">
              <p className="font-bold text-gray-800 text-lg">Jeep Compass</p>
              <span className="text-sm text-gray-500">
                Ano: 2025 | KM: 14.800
              </span>
              <strong className="text-red-600 text-xl">R$ 18.800</strong>
              <span className="text-sm text-gray-400">
                📍 Rio de Janeiro | RJ
              </span>
            </div>
          </section>
        </main>
      </section>
    </Container>
  );
}
