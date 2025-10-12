'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import VoltMascot from '@/components/VoltMascot'

export default function Comercializadoras() {
  const [formData, setFormData] = useState({
    empresa: '',
    cnpj: '',
    responsavel: '',
    email: '',
    telefone: '',
    volumeEnergia: '',
    regiaoAtuacao: '',
    tipoCliente: 'residencial',
    mensagem: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('https://brasilmaisenergia.app.n8n.cloud/webhook/formulario-comercializadora', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Cadastro enviado com sucesso! Nossa equipe entrará em contato em breve.')
        setFormData({
          empresa: '',
          cnpj: '',
          responsavel: '',
          email: '',
          telefone: '',
          volumeEnergia: '',
          regiaoAtuacao: '',
          tipoCliente: 'residencial',
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
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/banner-comercializadoras.png" alt="Comercialização de Energia" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold mb-6">Comercializadoras de Energia</h1>
          <p className="text-xl max-w-3xl">
            Conecte-se ao maior ecossistema de energia renovável do Brasil e expanda seus negócios no mercado livre de energia
          </p>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Por Que Fazer Parte da Nossa Rede?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Acesso a Leads Qualificados</h3>
              <p className="text-gray-700">
                Receba leads pré-qualificados de consumidores residenciais e empresariais interessados em migrar para o mercado livre de energia.
              </p>
            </div>

            <div className="bg-yellow-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Rede de Parceiros</h3>
              <p className="text-gray-700">
                Conecte-se com instaladores, fornecedores e outros players do mercado de energia renovável para expandir seus negócios.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Ferramentas de Gestão</h3>
              <p className="text-gray-700">
                Acesse plataforma completa para gestão de contratos, monitoramento de consumo e análise de performance.
              </p>
            </div>

            <div className="bg-yellow-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Consultoria Especializada</h3>
              <p className="text-gray-700">
                Suporte técnico e comercial para otimizar suas operações e maximizar resultados no mercado livre.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Capacitação Contínua</h3>
              <p className="text-gray-700">
                Acesso a cursos, webinars e materiais sobre regulamentação, precificação e tendências do mercado de energia.
              </p>
            </div>

            <div className="bg-yellow-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Credibilidade e Confiança</h3>
              <p className="text-gray-700">
                Faça parte de uma plataforma certificada e reconhecida, aumentando a confiança dos seus clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Como Funciona a Parceria</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6 items-start">
              <div className="bg-yellow-400 text-blue-900 font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-blue-900">Cadastro e Validação</h3>
                <p className="text-gray-700">
                  Preencha o formulário com os dados da sua empresa. Nossa equipe analisará e validará seu cadastro em até 48 horas.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-yellow-400 text-blue-900 font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-blue-900">Configuração do Perfil</h3>
                <p className="text-gray-700">
                  Configure seu perfil na plataforma, defina sua área de atuação, tipos de cliente e condições comerciais.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-yellow-400 text-blue-900 font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-blue-900">Receba Leads Qualificados</h3>
                <p className="text-gray-700">
                  Comece a receber leads de clientes interessados em migrar para o mercado livre, de acordo com seu perfil de atuação.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-yellow-400 text-blue-900 font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-blue-900">Gestão e Acompanhamento</h3>
                <p className="text-gray-700">
                  Utilize nossa plataforma para gerenciar contratos, acompanhar consumo e performance dos seus clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Cadastro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-blue-900">Cadastre Sua Comercializadora</h2>
            <p className="text-center text-gray-600 mb-12">
              Preencha o formulário abaixo e nossa equipe entrará em contato para iniciar a parceria
            </p>

            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Nome da Empresa *</label>
                  <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Sua Comercializadora Ltda"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">CNPJ *</label>
                  <input
                    type="text"
                    name="cnpj"
                    value={formData.cnpj}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="00.000.000/0000-00"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Nome do Responsável *</label>
                  <input
                    type="text"
                    name="responsavel"
                    value={formData.responsavel}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="João Silva"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">E-mail Corporativo *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="contato@suaempresa.com.br"
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
                  <label className="block text-gray-700 font-semibold mb-2">Volume Mensal de Energia (MWh)</label>
                  <input
                    type="text"
                    name="volumeEnergia"
                    value={formData.volumeEnergia}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ex: 500 MWh"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Região de Atuação *</label>
                  <input
                    type="text"
                    name="regiaoAtuacao"
                    value={formData.regiaoAtuacao}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ex: Sudeste, Nacional"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Tipo de Cliente Principal *</label>
                  <select
                    name="tipoCliente"
                    value={formData.tipoCliente}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="residencial">Residencial</option>
                    <option value="comercial">Comercial</option>
                    <option value="industrial">Industrial</option>
                    <option value="todos">Todos os Segmentos</option>
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
                  placeholder="Conte-nos mais sobre sua empresa e expectativas..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-bold py-4 px-8 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-lg hover:shadow-xl"
              >
                Enviar Cadastro
              </button>

              <p className="text-sm text-gray-600 text-center mt-4">
                Ao enviar este formulário, você concorda com nossos{' '}
                <a href="#" className="text-blue-600 hover:underline">Termos de Uso</a> e{' '}
                <a href="#" className="text-blue-600 hover:underline">Política de Privacidade</a>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Perguntas Frequentes</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-blue-900">Quais são os requisitos para se tornar parceiro?</h3>
              <p className="text-gray-700">
                É necessário ser uma comercializadora de energia regularizada pela ANEEL, com CNPJ ativo e documentação em dia.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-blue-900">Há algum custo para fazer parte da plataforma?</h3>
              <p className="text-gray-700">
                O cadastro é gratuito. Trabalhamos com modelo de comissionamento sobre negócios fechados através da plataforma.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-blue-900">Como funciona a distribuição de leads?</h3>
              <p className="text-gray-700">
                Os leads são distribuídos de acordo com a região de atuação, perfil de cliente e disponibilidade de cada comercializadora parceira.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-blue-900">Quanto tempo leva para aprovação do cadastro?</h3>
              <p className="text-gray-700">
                Nossa equipe analisa e valida os cadastros em até 48 horas úteis. Você receberá um e-mail com o resultado da análise.
              </p>
            </div>
          </div>
        </div>
      </section>

      <VoltMascot 
        pose="thumbs-up"
        message="Junte-se às principais comercializadoras do Brasil! 💼⚡"
      />

      <Footer />
    </div>
  )
}

