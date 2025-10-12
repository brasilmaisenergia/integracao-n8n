'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import VoltMascot from '@/components/VoltMascot'

export default function Franquias() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    estado: '',
    capitalDisponivel: '',
    experiencia: 'nenhuma',
    mensagem: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('https://brasilmaisenergia.app.n8n.cloud/webhook/formulario-franquia', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Interesse registrado com sucesso! Nossa equipe entrará em contato em breve.')
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          cidade: '',
          estado: '',
          capitalDisponivel: '',
          experiencia: 'nenhuma',
          mensagem: ''
        })
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      alert('Erro ao enviar cadastro. Por favor, tente novamente.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 py-20">
        <div className="absolute inset-0 opacity-30">
          <img src="/images/banner-franquias.png" alt="Franquias" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold mb-6">Seja um Franqueado Brasil Mais Energia</h1>
          <p className="text-2xl max-w-3xl">
            Invista no mercado de energia solar em crescimento exponencial e construa um negócio lucrativo e sustentável
          </p>
        </div>
      </section>

      {/* Números da Franquia */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">R$ 80k</div>
              <p className="text-lg">Investimento Inicial</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">6-12</div>
              <p className="text-lg">Meses de Retorno</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">35%</div>
              <p className="text-lg">Margem Média</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">24/7</div>
              <p className="text-lg">Suporte Completo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Por Que Ser um Franqueado?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-yellow-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Mercado em Expansão</h3>
              <p className="text-gray-700">
                O mercado de energia solar cresce 40% ao ano no Brasil. Aproveite essa oportunidade única de crescimento.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Marca Consolidada</h3>
              <p className="text-gray-700">
                Opere sob uma marca reconhecida e confiável, com reputação estabelecida no mercado de energia renovável.
              </p>
            </div>

            <div className="bg-yellow-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Treinamento Completo</h3>
              <p className="text-gray-700">
                Receba capacitação técnica e comercial completa, mesmo sem experiência prévia no setor de energia solar.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Suporte Contínuo</h3>
              <p className="text-gray-700">
                Conte com suporte operacional, comercial e de marketing 24/7 para garantir o sucesso do seu negócio.
              </p>
            </div>

            <div className="bg-yellow-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Alta Rentabilidade</h3>
              <p className="text-gray-700">
                Margens atrativas e múltiplas fontes de receita: vendas, instalação, manutenção e consultoria.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Impacto Positivo</h3>
              <p className="text-gray-700">
                Contribua para um futuro mais sustentável enquanto constrói um negócio lucrativo e de impacto social.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O Que Está Incluído */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">O Que Está Incluído na Franquia</h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
              <div className="text-3xl">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-blue-900">Uso da Marca</h3>
                <p className="text-gray-700">Direito de uso da marca, identidade visual e materiais de marketing</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
              <div className="text-3xl">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-blue-900">Treinamento Inicial</h3>
                <p className="text-gray-700">2 semanas de capacitação técnica e comercial intensiva</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
              <div className="text-3xl">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-blue-900">Sistema de Gestão</h3>
                <p className="text-gray-700">Acesso à plataforma completa de gestão e CRM</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
              <div className="text-3xl">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-blue-900">Marketing Digital</h3>
                <p className="text-gray-700">Suporte em marketing digital e geração de leads</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
              <div className="text-3xl">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-blue-900">Fornecedores Homologados</h3>
                <p className="text-gray-700">Acesso a rede de fornecedores com preços competitivos</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
              <div className="text-3xl">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-blue-900">Suporte Técnico</h3>
                <p className="text-gray-700">Equipe técnica disponível para dúvidas e projetos</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
              <div className="text-3xl">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-blue-900">Território Exclusivo</h3>
                <p className="text-gray-700">Área de atuação protegida e exclusiva</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
              <div className="text-3xl">✅</div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-blue-900">Atualizações Contínuas</h3>
                <p className="text-gray-700">Treinamentos e atualizações sobre novidades do setor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfil do Franqueado Ideal */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Perfil do Franqueado Ideal</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-400 text-blue-900 font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">Espírito Empreendedor</h3>
                <p className="text-gray-700">
                  Busca construir um negócio próprio e está disposto a se dedicar ao crescimento da franquia.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-yellow-400 text-blue-900 font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">Visão de Sustentabilidade</h3>
                <p className="text-gray-700">
                  Acredita no potencial da energia renovável e quer contribuir para um futuro mais sustentável.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-yellow-400 text-blue-900 font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">Capital Disponível</h3>
                <p className="text-gray-700">
                  Possui capital inicial de R$ 80.000 a R$ 150.000 para investimento e capital de giro.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-yellow-400 text-blue-900 font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">Habilidades Comerciais</h3>
                <p className="text-gray-700">
                  Tem perfil comercial ou está disposto a desenvolver habilidades de vendas e relacionamento.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-yellow-400 text-blue-900 font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-900">Comprometimento</h3>
                <p className="text-gray-700">
                  Está disposto a seguir os padrões e processos da franquia para garantir qualidade e resultados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Manifeste Seu Interesse</h2>
            <p className="text-center text-lg mb-12">
              Preencha o formulário e receba o prospecto completo da franquia
            </p>

            <form onSubmit={handleSubmit} className="bg-white text-gray-900 p-8 rounded-lg shadow-2xl">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Nome Completo *</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">E-mail *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Telefone/WhatsApp *</label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(11) 98765-4321"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Cidade *</label>
                  <input
                    type="text"
                    name="cidade"
                    value={formData.cidade}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="São Paulo"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Estado *</label>
                  <input
                    type="text"
                    name="estado"
                    value={formData.estado}
                    onChange={handleChange}
                    required
                    maxLength={2}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="SP"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Capital Disponível *</label>
                  <select
                    name="capitalDisponivel"
                    value={formData.capitalDisponivel}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Selecione</option>
                    <option value="80-100k">R$ 80.000 - R$ 100.000</option>
                    <option value="100-150k">R$ 100.000 - R$ 150.000</option>
                    <option value="150k+">Acima de R$ 150.000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Experiência no Setor *</label>
                  <select
                    name="experiencia"
                    value={formData.experiencia}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="nenhuma">Nenhuma</option>
                    <option value="basica">Básica</option>
                    <option value="intermediaria">Intermediária</option>
                    <option value="avancada">Avançada</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Mensagem (Opcional)</label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Conte-nos mais sobre seu interesse..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-bold py-4 px-8 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-lg hover:shadow-xl"
              >
                Receber Prospecto da Franquia
              </button>

              <p className="text-sm text-gray-600 text-center mt-4">
                Ao enviar este formulário, você concorda em receber informações sobre a franquia Brasil Mais Energia
              </p>
            </form>
          </div>
        </div>
      </section>

      <VoltMascot 
        pose="thumbs-up"
        message="Seja parte da revolução da energia solar! 🌟⚡"
      />

      <Footer />
    </div>
  )
}

