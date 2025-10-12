"use client";

import { useState } from "react";
import VoltMascot from "@/components/VoltMascot";

export default function ParaSuaCasa() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cep: "",
    valorConta: "",
    tipoImovel: "residencial",
    interesse: "gd",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Enviar para n8n
    try {
      await fetch("https://brasilmaisenergia.app.n8n.cloud/webhook/formulario-casa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          fonte: "website",
        }),
      });
      
      setSubmitted(true);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Erro ao enviar formulário. Tente novamente.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-2xl mx-auto text-center p-8">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">
            Cadastro Realizado com Sucesso!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Recebemos suas informações e em breve um de nossos especialistas entrará em contato para apresentar as melhores opções de economia para você.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn-primary"
          >
            Fazer Novo Cadastro
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Economize até 20% na Sua Conta de Luz
            </h1>
            <p className="text-xl text-gray-200">
              Descubra a melhor solução de energia para sua casa: Geração Distribuída, Mercado Livre ou Intermediação de Créditos.
            </p>
          </div>
        </div>
      </section>

      {/* Opções de Economia */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="card text-center">
              <div className="text-5xl mb-4">☀️</div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                Geração Distribuída
              </h3>
              <p className="text-gray-600 mb-4">
                Alugue créditos de energia solar e economize sem precisar instalar painéis.
              </p>
              <div className="text-secondary font-bold text-xl">Economia: 10-20%</div>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                Mercado Livre
              </h3>
              <p className="text-gray-600 mb-4">
                Escolha seu fornecedor e negocie tarifas mais competitivas.
              </p>
              <div className="text-secondary font-bold text-xl">Economia: 15-25%</div>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                Sistema Próprio
              </h3>
              <p className="text-gray-600 mb-4">
                Instale painéis solares na sua casa e gere sua própria energia.
              </p>
              <div className="text-secondary font-bold text-xl">Economia: até 95%</div>
            </div>
          </div>

          {/* Formulário */}
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6 text-center">
              Receba uma Proposta Personalizada
            </h2>
            <p className="text-gray-600 mb-8 text-center">
              Preencha o formulário abaixo e descubra quanto você pode economizar.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">
                    CEP *
                  </label>
                  <input
                    type="text"
                    name="cep"
                    value={formData.cep}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="00000-000"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">
                    Valor Médio da Conta (R$) *
                  </label>
                  <input
                    type="number"
                    name="valorConta"
                    value={formData.valorConta}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  Tipo de Imóvel *
                </label>
                <select
                  name="tipoImovel"
                  value={formData.tipoImovel}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                >
                  <option value="residencial">Residencial</option>
                  <option value="comercial">Comercial</option>
                  <option value="rural">Rural</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  Interesse Principal *
                </label>
                <select
                  name="interesse"
                  value={formData.interesse}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                >
                  <option value="gd">Geração Distribuída (Aluguel de Créditos)</option>
                  <option value="mercado-livre">Mercado Livre de Energia</option>
                  <option value="sistema-proprio">Sistema Solar Próprio</option>
                  <option value="nao-sei">Não sei, quero orientação</option>
                </select>
              </div>

              <button type="submit" className="w-full btn-primary text-lg">
                Receber Proposta Gratuita
              </button>

              <p className="text-sm text-gray-500 text-center">
                Ao enviar, você concorda com nossos{" "}
                <a href="/termos" className="text-secondary hover:underline">
                  Termos de Uso
                </a>{" "}
                e{" "}
                <a href="/privacidade" className="text-secondary hover:underline">
                  Política de Privacidade
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary mb-12 text-center">
            Perguntas Frequentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <details className="card">
              <summary className="font-bold text-primary cursor-pointer">
                Como funciona a Geração Distribuída?
              </summary>
              <p className="mt-4 text-gray-600">
                Você aluga créditos de energia solar de usinas remotas e recebe desconto direto na sua conta de luz. Sem obras, sem instalação, sem investimento inicial.
              </p>
            </details>

            <details className="card">
              <summary className="font-bold text-primary cursor-pointer">
                Quanto tempo leva para começar a economizar?
              </summary>
              <p className="mt-4 text-gray-600">
                Em média, 30 a 60 dias após a contratação, você já começa a ver os descontos na sua conta de luz.
              </p>
            </details>

            <details className="card">
              <summary className="font-bold text-primary cursor-pointer">
                Posso cancelar a qualquer momento?
              </summary>
              <p className="mt-4 text-gray-600">
                Sim! Não há fidelidade. Você pode cancelar quando quiser, sem multas ou taxas.
              </p>
            </details>
          </div>
        </div>
      </section>

      <VoltMascot
        pose="pointing"
        message="Preencha o formulário e nossa equipe vai calcular exatamente quanto você pode economizar!"
        position="right"
        size="lg"
      />
    </>
  );
}

