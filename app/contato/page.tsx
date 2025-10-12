'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import VoltMascot from '@/components/VoltMascot'

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: 'duvida',
    mensagem: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('https://brasilmaisenergia.app.n8n.cloud/webhook/formulario-contato', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Mensagem enviada com sucesso! Retornaremos em breve.')
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          assunto: 'duvida',
          mensagem: ''
        })
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      alert('Erro ao enviar mensagem. Por favor, tente novamente.')
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
          <h1 className="text-5xl font-bold mb-6">Fale Conosco</h1>
          <p className="text-xl max-w-3xl">
            Estamos aqui para ajudar! Entre em contato e tire suas dúvidas sobre energia solar
          </p>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Formulário */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Envie Sua Mensagem</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
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

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Telefone</label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(11) 98765-4321"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Assunto *</label>
                  <select
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="duvida">Dúvida</option>
                    <option value="orcamento">Orçamento</option>
                    <option value="parceria">Parceria</option>
                    <option value="suporte">Suporte Técnico</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Mensagem *</label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Escreva sua mensagem aqui..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-bold py-4 px-8 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all shadow-lg hover:shadow-xl"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>

            {/* Informações de Contato */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Outras Formas de Contato</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">📧</div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-blue-900">E-mail</h3>
                      <p className="text-gray-700">contato@brasilmaisenergia.com.br</p>
                      <p className="text-gray-700">suporte@brasilmaisenergia.com.br</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">📱</div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-blue-900">Telefone / WhatsApp</h3>
                      <p className="text-gray-700">(11) 3000-0000</p>
                      <p className="text-gray-700">(11) 99999-9999</p>
                      <p className="text-sm text-gray-600 mt-2">Seg a Sex: 8h às 18h</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">📍</div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-blue-900">Endereço</h3>
                      <p className="text-gray-700">
                        Av. Paulista, 1000 - 10º andar<br />
                        Bela Vista, São Paulo - SP<br />
                        CEP: 01310-100
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🌐</div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-blue-900">Redes Sociais</h3>
                      <div className="flex gap-4 mt-3">
                        <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl">📘</a>
                        <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl">📷</a>
                        <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl">🐦</a>
                        <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl">💼</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-3">⏰ Horário de Atendimento</h3>
                <p className="mb-2">Segunda a Sexta: 8h às 18h</p>
                <p className="mb-2">Sábado: 9h às 13h</p>
                <p>Domingo e Feriados: Fechado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Rápido */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Perguntas Frequentes</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-blue-900">Quanto tempo leva para receber um orçamento?</h3>
              <p className="text-gray-700">
                Normalmente respondemos em até 24 horas úteis. Orçamentos personalizados podem levar até 48 horas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-blue-900">Vocês atendem em todo o Brasil?</h3>
              <p className="text-gray-700">
                Sim! Temos parceiros instaladores em todos os estados brasileiros através da nossa rede de franquias e parceiros.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-blue-900">Como funciona o suporte técnico?</h3>
              <p className="text-gray-700">
                Oferecemos suporte por e-mail, telefone e WhatsApp. Para questões técnicas complexas, agendamos visitas presenciais.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2 text-blue-900">Posso visitar o escritório?</h3>
              <p className="text-gray-700">
                Sim! Agende uma visita através dos nossos canais de contato. Teremos prazer em recebê-lo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <VoltMascot 
        pose="transparent"
        message="Estou aqui para ajudar! Entre em contato! 💬⚡"
      />

      <Footer />
    </div>
  )
}

