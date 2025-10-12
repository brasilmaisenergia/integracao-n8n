'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import VoltMascot from '@/components/VoltMascot'

export default function Fornecedores() {
  const [formData, setFormData] = useState({
    empresa: '',
    cnpj: '',
    responsavel: '',
    email: '',
    telefone: '',
    tipoProduto: 'paineis',
    capacidadeProducao: '',
    certificacoes: '',
    site: '',
    mensagem: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('https://brasilmaisenergia.app.n8n.cloud/webhook/formulario-fornecedor', {
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
          tipoProduto: 'paineis',
          capacidadeProducao: '',
          certificacoes: '',
          site: '',
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
          <img src="/images/banner-fornecedores.png" alt="Fornecedores" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold mb-6">Fornecedores de Equipamentos</h1>
          <p className="text-xl max-w-3xl">
            Conecte-se ao maior marketplace de energia solar do Brasil e amplie suas vendas
          </p>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Vantagens de Ser um Fornecedor Parceiro</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🛒</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Marketplace Integrado</h3>
              <p className="text-gray-700">
                Exponha seus produtos em nosso marketplace para milhares de instaladores, integradores e consumidores finais.
              </p>
            </div>

            <div className="bg-yellow-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Aumento de Vendas</h3>
              <p className="text-gray-700">
                Acesse uma rede crescente de compradores qualificados e aumente seu volume de vendas significativamente.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Visibilidade de Marca</h3>
              <p className="text-gray-700">
                Destaque sua marca e produtos em uma plataforma profissional e confiável do setor de energia solar.
              </p>
            </div>

            <div className="bg-yellow-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Gestão Simplificada</h3>
              <p className="text-gray-700">
                Gerencie pedidos, estoque e relacionamento com clientes através de nossa plataforma integrada.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Networking</h3>
              <p className="text-gray-700">
                Conecte-se com instaladores, integradores e outros fornecedores para criar parcerias estratégicas.
              </p>
            </div>

            <div className="bg-yellow-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Pagamento Seguro</h3>
              <p className="text-gray-700">
                Sistema de pagamento integrado e seguro, com proteção para compradores e vendedores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos Aceitos */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Categorias de Produtos</h2>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-3">☀️</div>
              <h3 className="font-bold text-blue-900">Painéis Solares</h3>
              <p className="text-sm text-gray-600 mt-2">Mono e policristalinos</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-3">🔌</div>
              <h3 className="font-bold text-blue-900">Inversores</h3>
              <p className="text-sm text-gray-600 mt-2">On-grid e off-grid</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-3">🔋</div>
              <h3 className="font-bold text-blue-900">Baterias</h3>
              <p className="text-sm text-gray-600 mt-2">Lítio e chumbo-ácido</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="font-bold text-blue-900">Estruturas</h3>
              <p className="text-sm text-gray-600 mt-2">Fixação e suporte</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold text-blue-900">Cabos e Conectores</h3>
              <p className="text-sm text-gray-600 mt-2">Componentes elétricos</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-3">📡</div>
              <h3 className="font-bold text-blue-900">Monitoramento</h3>
              <p className="text-sm text-gray-600 mt-2">Sistemas de controle</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="font-bold text-blue-900">Proteção</h3>
              <p className="text-sm text-gray-600 mt-2">Disjuntores e DPS</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-3">🧰</div>
              <h3 className="font-bold text-blue-900">Ferramentas</h3>
              <p className="text-sm text-gray-600 mt-2">Equipamentos de instalação</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Cadastro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-blue-900">Cadastre Sua Empresa</h2>
            <p className="text-center text-gray-600 mb-12">
              Preencha o formulário abaixo para se tornar um fornecedor parceiro
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
                    placeholder="Solar Tech Ltda"
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
                    placeholder="Maria Santos"
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
                  <label className="block text-gray-700 font-semibold mb-2">Tipo de Produto Principal *</label>
                  <select
                    name="tipoProduto"
                    value={formData.tipoProduto}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="paineis">Painéis Solares</option>
                    <option value="inversores">Inversores</option>
                    <option value="baterias">Baterias</option>
                    <option value="estruturas">Estruturas</option>
                    <option value="cabos">Cabos e Conectores</option>
                    <option value="monitoramento">Monitoramento</option>
                    <option value="protecao">Proteção</option>
                    <option value="ferramentas">Ferramentas</option>
                    <option value="diversos">Diversos</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Capacidade de Produção/Estoque</label>
                  <input
                    type="text"
                    name="capacidadeProducao"
                    value={formData.capacidadeProducao}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ex: 1000 unidades/mês"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Certificações</label>
                  <input
                    type="text"
                    name="certificacoes"
                    value={formData.certificacoes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ex: INMETRO, ISO 9001"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Site da Empresa</label>
                <input
                  type="url"
                  name="site"
                  value={formData.site}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://www.suaempresa.com.br"
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
                  placeholder="Conte-nos mais sobre seus produtos e diferenciais..."
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
              <h3 className="text-xl font-bold mb-2 text-blue-900">Quais são os requisitos para se tornar fornecedor?</h3>
              <p className="text-gray-700">
                É necessário ter CNPJ ativo, produtos certificados (quando aplicável) e capacidade de atender pedidos em escala.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-blue-900">Há alguma taxa para cadastro?</h3>
              <p className="text-gray-700">
                O cadastro é gratuito. Cobramos apenas uma comissão sobre as vendas realizadas através da plataforma.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-blue-900">Como funciona a logística de entrega?</h3>
              <p className="text-gray-700">
                Cada fornecedor é responsável pela logística de seus produtos. Oferecemos integração com principais transportadoras.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-blue-900">Quanto tempo leva para aprovação?</h3>
              <p className="text-gray-700">
                A análise do cadastro leva até 5 dias úteis. Você receberá um e-mail com instruções para completar o processo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <VoltMascot 
        pose="trabalhando"
        message="Vamos juntos impulsionar a energia solar no Brasil! 🔧⚡"
      />

      <Footer />
    </div>
  )
}

