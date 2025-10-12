"use client";

import { useState } from "react";
import VoltMascot from "@/components/VoltMascot";

export default function ParaSuaEmpresa() {
  const [formData, setFormData] = useState({
    nomeEmpresa: "",
    nomeContato: "",
    email: "",
    telefone: "",
    cnpj: "",
    segmento: "",
    numeroUnidades: "1",
    valorContaTotal: "",
    interesse: "mercado-livre",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await fetch("https://brasilmaisenergia.app.n8n.cloud/webhook/formulario-empresa", {
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
            Nossa equipe B2B entrará em contato em até 24h para apresentar soluções personalizadas para sua empresa.
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
              Reduza os Custos Energéticos da Sua Empresa
            </h1>
            <p className="text-xl text-gray-200">
              Aumente a competitividade do seu negócio com soluções inteligentes de energia.
            </p>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary mb-12 text-center">
            Por Que Empresas Escolhem a Brasil Mais Energia?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="card text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                Redução de Custos
              </h3>
              <p className="text-gray-600">
                Economize até 30% na conta de energia com Mercado Livre e Geração Distribuída.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                Gestão Inteligente
              </h3>
              <p className="text-gray-600">
                Dashboard completo para monitorar consumo, custos e economia em tempo real.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                Sustentabilidade
              </h3>
              <p className="text-gray-600">
                Reduza a pegada de carbono e melhore a imagem ESG da sua empresa.
              </p>
            </div>
          </div>

          {/* Formulário */}
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6 text-center">
              Solicite uma Análise Gratuita
            </h2>
            <p className="text-gray-600 mb-8 text-center">
              Preencha o formulário e receba um estudo personalizado de redução de custos.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  Nome da Empresa *
                </label>
                <input
                  type="text"
                  name="nomeEmpresa"
                  value={formData.nomeEmpresa}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  placeholder="Razão Social"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">
                    Nome do Contato *
                  </label>
                  <input
                    type="text"
                    name="nomeContato"
                    value={formData.nomeContato}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">
                    CNPJ *
                  </label>
                  <input
                    type="text"
                    name="cnpj"
                    value={formData.cnpj}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="00.000.000/0000-00"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">
                    E-mail Corporativo *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="contato@empresa.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="(00) 0000-0000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">
                    Segmento *
                  </label>
                  <input
                    type="text"
                    name="segmento"
                    value={formData.segmento}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="Ex: Indústria, Comércio, Serviços"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">
                    Número de Unidades *
                  </label>
                  <input
                    type="number"
                    name="numeroUnidades"
                    value={formData.numeroUnidades}
                    onChange={handleChange}
                    required
                    min="1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                    placeholder="1"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  Valor Total das Contas de Energia (R$/mês) *
                </label>
                <input
                  type="number"
                  name="valorContaTotal"
                  value={formData.valorContaTotal}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                  placeholder="10000"
                />
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
                  <option value="mercado-livre">Migração para Mercado Livre</option>
                  <option value="gd">Geração Distribuída</option>
                  <option value="sistema-proprio">Sistema Solar Próprio</option>
                  <option value="gestao-energia">Gestão de Energia</option>
                  <option value="consultoria">Consultoria Energética</option>
                </select>
              </div>

              <button type="submit" className="w-full btn-primary text-lg">
                Solicitar Análise Gratuita
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

      {/* Cases de Sucesso */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary mb-12 text-center">
            Empresas Que Já Economizam Conosco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="font-bold text-primary mb-2">Indústria Metalúrgica</h3>
              <p className="text-gray-600 mb-4">
                Redução de 28% nos custos energéticos com migração para o Mercado Livre.
              </p>
              <div className="text-secondary font-bold">Economia: R$ 180k/ano</div>
            </div>

            <div className="card">
              <h3 className="font-bold text-primary mb-2">Rede de Supermercados</h3>
              <p className="text-gray-600 mb-4">
                15 unidades conectadas à GD, economia média de 18% por loja.
              </p>
              <div className="text-secondary font-bold">Economia: R$ 240k/ano</div>
            </div>

            <div className="card">
              <h3 className="font-bold text-primary mb-2">Hospital Regional</h3>
              <p className="text-gray-600 mb-4">
                Gestão inteligente de energia reduziu desperdícios em 22%.
              </p>
              <div className="text-secondary font-bold">Economia: R$ 320k/ano</div>
            </div>
          </div>
        </div>
      </section>

      <VoltMascot
        pose="thumbs-up"
        message="Empresas que gastam mais de R$ 10 mil/mês em energia podem economizar muito! Preencha o formulário e descubra quanto."
        position="right"
        size="lg"
      />
    </>
  );
}

