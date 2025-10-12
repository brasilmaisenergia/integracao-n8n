'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import VoltMascot from '@/components/VoltMascot'

export default function TrabalheConosco() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    linkedin: '',
    area: 'comercial',
    experiencia: '',
    curriculo: '',
    mensagem: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('https://brasilmaisenergia.app.n8n.cloud/webhook/formulario-trabalhe-conosco', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Currículo enviado com sucesso! Entraremos em contato se houver oportunidades compatíveis.')
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          linkedin: '',
          area: 'comercial',
          experiencia: '',
          curriculo: '',
          mensagem: ''
        })
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      alert('Erro ao enviar currículo. Por favor, tente novamente.')
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
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Trabalhe Conosco</h1>
          <p className="text-xl max-w-3xl">
            Faça parte do time que está transformando o mercado de energia renovável no Brasil
          </p>
        </div>
      </section>

      {/* Por Que Trabalhar Conosco */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Por Que Trabalhar no Brasil Mais Energia?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Crescimento Acelerado</h3>
              <p className="text-gray-700">
                Empresa em rápida expansão com oportunidades reais de desenvolvimento de carreira.
              </p>
            </div>

            <div className="bg-yellow-50 p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Impacto Positivo</h3>
              <p className="text-gray-700">
                Trabalhe em algo que realmente importa: a transição energética do Brasil.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Inovação Constante</h3>
              <p className="text-gray-700">
                Ambiente dinâmico com uso de tecnologias de ponta e processos inovadores.
              </p>
            </div>

            <div className="bg-yellow-50 p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Cultura Colaborativa</h3>
              <p className="text-gray-700">
                Time unido, diverso e colaborativo que valoriza ideias e iniciativas.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Desenvolvimento</h3>
              <p className="text-gray-700">
                Investimento em capacitação, treinamentos e cursos para evolução profissional.
              </p>
            </div>

            <div className="bg-yellow-50 p-8 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4">⚖️</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Equilíbrio</h3>
              <p className="text-gray-700">
                Valorizamos o equilíbrio entre vida pessoal e profissional com flexibilidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Benefícios</h2>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-bold text-blue-900">Salário Competitivo</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="font-bold text-blue-900">Plano de Saúde</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-3">🦷</div>
              <h3 className="font-bold text-blue-900">Plano Odontológico</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-3">🍽️</div>
              <h3 className="font-bold text-blue-900">Vale Refeição</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-3">🚌</div>
              <h3 className="font-bold text-blue-900">Vale Transporte</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="font-bold text-blue-900">Auxílio Educação</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-3">🏋️</div>
              <h3 className="font-bold text-blue-900">Gympass</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-3xl mb-3">🏠</div>
              <h3 className="font-bold text-blue-900">Home Office</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Vagas Abertas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Vagas Abertas</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-900">Analista Comercial</h3>
                  <p className="text-gray-600">São Paulo - SP | Presencial</p>
                </div>
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">ABERTA</span>
              </div>
              <p className="text-gray-700 mb-4">
                Buscamos profissional com experiência em vendas B2B para atuar no desenvolvimento de novos negócios no setor de energia solar.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full text-sm">Vendas</span>
                <span className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full text-sm">B2B</span>
                <span className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full text-sm">Energia Solar</span>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-900">Desenvolvedor Full Stack</h3>
                  <p className="text-gray-600">Remoto | Brasil</p>
                </div>
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">ABERTA</span>
              </div>
              <p className="text-gray-700 mb-4">
                Desenvolvedor com experiência em React, Node.js e bancos de dados para evolução da nossa plataforma.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full text-sm">Full Stack</span>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-900">Engenheiro de Projetos</h3>
                  <p className="text-gray-600">São Paulo - SP | Híbrido</p>
                </div>
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">ABERTA</span>
              </div>
              <p className="text-gray-700 mb-4">
                Engenheiro elétrico ou de energia para desenvolvimento de projetos fotovoltaicos residenciais e comerciais.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full text-sm">Engenharia</span>
                <span className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full text-sm">Projetos</span>
                <span className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full text-sm">Fotovoltaico</span>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-900">Analista de Marketing Digital</h3>
                  <p className="text-gray-600">Remoto | Brasil</p>
                </div>
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">ABERTA</span>
              </div>
              <p className="text-gray-700 mb-4">
                Profissional com experiência em gestão de campanhas digitais, SEO e análise de métricas.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full text-sm">Marketing</span>
                <span className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full text-sm">SEO</span>
                <span className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full text-sm">Google Ads</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Candidate-se</h2>
            <p className="text-center text-lg mb-12">
              Não encontrou uma vaga específica? Envie seu currículo para nosso banco de talentos!
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

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Telefone *</label>
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
                  <label className="block text-gray-700 font-semibold mb-2">LinkedIn</label>
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://linkedin.com/in/seuperfil"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Área de Interesse *</label>
                  <select
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="comercial">Comercial</option>
                    <option value="tecnologia">Tecnologia</option>
                    <option value="engenharia">Engenharia</option>
                    <option value="marketing">Marketing</option>
                    <option value="financeiro">Financeiro</option>
                    <option value="rh">Recursos Humanos</option>
                    <option value="operacoes">Operações</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Anos de Experiência</label>
                  <input
                    type="text"
                    name="experiencia"
                    value={formData.experiencia}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ex: 3 anos"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Link do Currículo (Google Drive, Dropbox, etc.) *</label>
                <input
                  type="url"
                  name="curriculo"
                  value={formData.curriculo}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://drive.google.com/..."
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Mensagem (Opcional)</label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Conte-nos sobre você e suas motivações..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-bold py-4 px-8 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-lg hover:shadow-xl"
              >
                Enviar Candidatura
              </button>
            </form>
          </div>
        </div>
      </section>

      <VoltMascot 
        pose="thinking"
        message="Venha fazer parte do nosso time! ⚡💼"
      />

      <Footer />
    </div>
  )
}

