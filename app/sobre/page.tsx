import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import VoltMascot from '@/components/VoltMascot'

export default function Sobre() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Sobre o Brasil Mais Energia</h1>
          <p className="text-xl max-w-3xl">
            Conectando o ecossistema de energia renovável do Brasil para um futuro mais sustentável e acessível
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-blue-900">Nossa História</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                O **Brasil Mais Energia** nasceu da visão de democratizar o acesso à energia solar no Brasil, 
                conectando todos os agentes do ecossistema de energia renovável em uma única plataforma integrada.
              </p>
              <p>
                Fundada em 2024, nossa plataforma surgiu da necessidade de simplificar a jornada de quem deseja 
                adotar energia solar, seja para residências, empresas ou grandes projetos industriais. Percebemos 
                que o mercado estava fragmentado, com consumidores perdidos entre fornecedores, instaladores, 
                comercializadoras e outras opções.
              </p>
              <p>
                Hoje, somos o **maior ecossistema integrado de energia renovável do Brasil**, conectando 
                8 stakeholders diferentes: consumidores residenciais e empresariais, instaladores, fornecedores, 
                comercializadoras, franqueados, profissionais em busca de capacitação e investidores.
              </p>
              <p>
                Nossa missão é tornar a energia solar acessível, transparente e lucrativa para todos os envolvidos, 
                contribuindo para um Brasil mais sustentável e energeticamente independente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Missão</h3>
              <p className="text-gray-700">
                Democratizar o acesso à energia solar no Brasil, conectando consumidores, empresas e profissionais 
                em um ecossistema integrado, transparente e eficiente.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-5xl mb-4">🔭</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Visão</h3>
              <p className="text-gray-700">
                Ser a principal plataforma de energia renovável da América Latina, impulsionando a transição 
                energética e contribuindo para um futuro sustentável.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Valores</h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Sustentabilidade</li>
                <li>✓ Transparência</li>
                <li>✓ Inovação</li>
                <li>✓ Colaboração</li>
                <li>✓ Excelência</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Brasil Mais Energia em Números</h2>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">50k+</div>
              <p className="text-lg">Usuários Cadastrados</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">1.200+</div>
              <p className="text-lg">Instaladores Parceiros</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">300+</div>
              <p className="text-lg">Fornecedores</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">R$ 500M</div>
              <p className="text-lg">Em Projetos Facilitados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nosso Ecossistema */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Nosso Ecossistema Integrado</h2>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🏠</div>
              <h3 className="font-bold text-blue-900">Consumidores Residenciais</h3>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🏢</div>
              <h3 className="font-bold text-blue-900">Empresas</h3>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="font-bold text-blue-900">Instaladores</h3>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">📦</div>
              <h3 className="font-bold text-blue-900">Fornecedores</h3>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold text-blue-900">Comercializadoras</h3>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-bold text-blue-900">Franqueados</h3>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="font-bold text-blue-900">Profissionais</h3>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">💼</div>
              <h3 className="font-bold text-blue-900">Investidores</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Nossos Diferenciais</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">🔗 Plataforma Integrada</h3>
              <p className="text-gray-700">
                Única plataforma que conecta todos os stakeholders do ecossistema de energia renovável em um só lugar.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">🎓 Educação Contínua</h3>
              <p className="text-gray-700">
                Plataforma EAD completa com cursos, certificações e capacitação para profissionais do setor.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">🛒 Marketplace Completo</h3>
              <p className="text-gray-700">
                Maior marketplace de equipamentos e serviços de energia solar do Brasil, com preços competitivos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">🤖 Tecnologia Avançada</h3>
              <p className="text-gray-700">
                Ferramentas de IA para dimensionamento, simulação e gestão de projetos de energia solar.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">🔒 Segurança e Confiança</h3>
              <p className="text-gray-700">
                Parceiros verificados, avaliações transparentes e proteção em todas as transações.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">📊 Dados e Insights</h3>
              <p className="text-gray-700">
                Analytics avançado para tomada de decisão baseada em dados do mercado de energia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compromisso com Sustentabilidade */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">🌍</div>
            <h2 className="text-4xl font-bold mb-6 text-blue-900">Compromisso com a Sustentabilidade</h2>
            <p className="text-lg text-gray-700 mb-8">
              Cada projeto facilitado pela nossa plataforma contribui para a redução de emissões de CO₂ e 
              para um futuro mais limpo e sustentável para as próximas gerações.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">15.000</div>
                <p className="text-gray-700">Toneladas de CO₂ Evitadas</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">50 MW</div>
                <p className="text-gray-700">Capacidade Instalada</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">8.000</div>
                <p className="text-gray-700">Famílias Beneficiadas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VoltMascot 
        pose="thumbs-up"
        message="Juntos estamos construindo um Brasil mais sustentável! 🌱⚡"
      />

      <Footer />
    </div>
  )
}

