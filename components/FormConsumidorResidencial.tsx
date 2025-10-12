'use client';

import { useState } from 'react';
import InvoiceUpload from './InvoiceUpload';
import Image from 'next/image';

interface FormData {
  // Dados básicos
  nome: string;
  email: string;
  telefone: string;
  cep: string;
  
  // Dados de consumo (podem vir da fatura)
  consumoMedioKwh: string;
  valorMedioConta: string;
  tipoImovel: string;
  proprietario: string;
  
  // Dados comportamentais
  motivacaoPrincipal: string;
  urgencia: string;
  conhecimentoPrevio: string;
  
  // Dados de intenção
  objetivos: string[];
  jaRecebeuOrcamentos: string;
  quantidadeOrcamentos: string;
  menorValorOrcamento: string;
  
  // Dados da fatura (se enviada)
  faturaAnalisada: boolean;
  dadosFatura?: any;
  
  // LGPD
  aceitaTermos: boolean;
  aceitaComunicacao: boolean;
}

export default function FormConsumidorResidencial() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    cep: '',
    consumoMedioKwh: '',
    valorMedioConta: '',
    tipoImovel: '',
    proprietario: '',
    motivacaoPrincipal: '',
    urgencia: '',
    conhecimentoPrevio: '',
    objetivos: [],
    jaRecebeuOrcamentos: '',
    quantidadeOrcamentos: '',
    menorValorOrcamento: '',
    faturaAnalisada: false,
    aceitaTermos: false,
    aceitaComunicacao: false,
  });
  
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleObjetivosChange = (objetivo: string) => {
    setFormData(prev => {
      const objetivos = prev.objetivos.includes(objetivo)
        ? prev.objetivos.filter(o => o !== objetivo)
        : [...prev.objetivos, objetivo];
      return { ...prev, objetivos };
    });
  };

  const handleInvoiceDataExtracted = (data: any) => {
    setFormData(prev => ({
      ...prev,
      faturaAnalisada: true,
      dadosFatura: data,
      consumoMedioKwh: data.consumoKwh?.toString() || prev.consumoMedioKwh,
      valorMedioConta: data.valorTotal?.toString() || prev.valorMedioConta,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Enviar para webhook do n8n
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tipo: 'consumidor_residencial',
          data: formData,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Erro ao enviar formulário. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao enviar formulário. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => {
    setStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="mb-6">
          <Image
            src="/images/volt-celebrando.png"
            alt="Volt celebrando"
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>
        <h2 className="text-3xl font-bold text-[#2A4B7B] mb-4">
          Formulário enviado com sucesso! 🎉
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Obrigado por compartilhar suas informações conosco! Nossa equipe irá analisar seu perfil
          e entrar em contato em breve com as melhores soluções para você.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-semibold text-[#2A4B7B] mb-2">Próximos passos:</h3>
          <ul className="text-left text-gray-700 space-y-2">
            <li>✅ Análise do seu perfil energético</li>
            <li>✅ Identificação das melhores soluções</li>
            <li>✅ Contato da nossa equipe em até 24h</li>
            <li>✅ Apresentação de propostas personalizadas</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`flex items-center ${s < 4 ? 'flex-1' : ''}`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  s <= step
                    ? 'bg-[#2A4B7B] text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {s}
              </div>
              {s < 4 && (
                <div
                  className={`flex-1 h-1 mx-2 ${
                    s < step ? 'bg-[#2A4B7B]' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-gray-600">
          <span>Dados Básicos</span>
          <span>Fatura</span>
          <span>Perfil</span>
          <span>Confirmação</span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Dados Básicos */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="flex items-start space-x-4 mb-6">
              <Image
                src="/images/volt-explicador.png"
                alt="Volt"
                width={80}
                height={80}
              />
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex-1">
                <p className="text-gray-700">
                  Olá! Eu sou o Volt, seu assistente de energia! 👋 Vou te ajudar a encontrar
                  a melhor solução para reduzir sua conta de luz. Vamos começar com algumas
                  informações básicas.
                </p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nome Completo *
              </label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A4B7B] focus:border-transparent"
                placeholder="Seu nome completo"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A4B7B] focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A4B7B] focus:border-transparent"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                CEP *
              </label>
              <input
                type="text"
                name="cep"
                value={formData.cep}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A4B7B] focus:border-transparent"
                placeholder="00000-000"
                maxLength={9}
              />
              <p className="text-xs text-gray-500 mt-1">
                Precisamos do CEP para identificar sua distribuidora e região
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tipo de Imóvel *
                </label>
                <select
                  name="tipoImovel"
                  value={formData.tipoImovel}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A4B7B] focus:border-transparent"
                >
                  <option value="">Selecione...</option>
                  <option value="casa">Casa</option>
                  <option value="apartamento">Apartamento</option>
                  <option value="comercial">Comercial</option>
                  <option value="rural">Rural</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Você é... *
                </label>
                <select
                  name="proprietario"
                  value={formData.proprietario}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A4B7B] focus:border-transparent"
                >
                  <option value="">Selecione...</option>
                  <option value="proprietario">Proprietário</option>
                  <option value="inquilino">Inquilino</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Upload de Fatura */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="flex items-start space-x-4 mb-6">
              <Image
                src="/images/volt-professor.png"
                alt="Volt"
                width={80}
                height={80}
              />
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex-1">
                <p className="text-gray-700">
                  Agora, se você tiver sua fatura de energia em mãos, pode fazer o upload!
                  Nossa IA irá extrair automaticamente todas as informações importantes.
                  Se não tiver a fatura, pode pular esta etapa e preencher manualmente. 📄
                </p>
              </div>
            </div>

            <InvoiceUpload onDataExtracted={handleInvoiceDataExtracted} />

            {!formData.faturaAnalisada && (
              <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Ou preencha manualmente:
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Consumo Médio Mensal (kWh)
                    </label>
                    <input
                      type="number"
                      name="consumoMedioKwh"
                      value={formData.consumoMedioKwh}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A4B7B] focus:border-transparent"
                      placeholder="Ex: 450"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Valor Médio da Conta (R$)
                    </label>
                    <input
                      type="number"
                      name="valorMedioConta"
                      value={formData.valorMedioConta}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A4B7B] focus:border-transparent"
                      placeholder="Ex: 350.00"
                      step="0.01"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 3: Perfil e Intenção */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="flex items-start space-x-4 mb-6">
              <Image
                src="/images/volt-pensativo.png"
                alt="Volt"
                width={80}
                height={80}
              />
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex-1">
                <p className="text-gray-700">
                  Agora me conte um pouco mais sobre você! Isso vai me ajudar a encontrar
                  a solução perfeita para o seu caso. 🎯
                </p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Qual sua principal motivação? *
              </label>
              <select
                name="motivacaoPrincipal"
                value={formData.motivacaoPrincipal}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A4B7B] focus:border-transparent"
              >
                <option value="">Selecione...</option>
                <option value="reduzir_custo">Reduzir custo da conta de luz</option>
                <option value="sustentabilidade">Sustentabilidade/meio ambiente</option>
                <option value="independencia">Independência energética</option>
                <option value="valorizacao">Valorização do imóvel</option>
                <option value="curiosidade">Curiosidade/pesquisando</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Qual sua urgência? *
              </label>
              <div className="space-y-3">
                {[
                  { value: 'urgente', label: '🔴 Urgente - Conta muito alta, preciso resolver já', color: 'red' },
                  { value: 'medio_prazo', label: '🟡 Médio prazo - Nos próximos 3-6 meses', color: 'yellow' },
                  { value: 'longo_prazo', label: '🟢 Longo prazo - Pesquisando, sem pressa', color: 'green' },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                    style={{
                      borderColor: formData.urgencia === option.value ? '#2A4B7B' : '#e5e7eb',
                    }}
                  >
                    <input
                      type="radio"
                      name="urgencia"
                      value={option.value}
                      checked={formData.urgencia === option.value}
                      onChange={handleInputChange}
                      required
                      className="mr-3"
                    />
                    <span className="text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Seu conhecimento sobre energia solar *
              </label>
              <select
                name="conhecimentoPrevio"
                value={formData.conhecimentoPrevio}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A4B7B] focus:border-transparent"
              >
                <option value="">Selecione...</option>
                <option value="nenhum">Nunca ouvi falar de energia solar</option>
                <option value="pouco">Já pesquisei um pouco</option>
                <option value="basico">Entendo o básico</option>
                <option value="avancado">Conheço bem o assunto</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                O que te trouxe aqui? (pode marcar mais de uma opção)
              </label>
              <div className="space-y-2">
                {[
                  'Quero instalar energia solar',
                  'Quero migrar para mercado livre',
                  'Quero reduzir minha conta',
                  'Quero entender minhas opções',
                ].map((objetivo) => (
                  <label
                    key={objetivo}
                    className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                  >
                    <input
                      type="checkbox"
                      checked={formData.objetivos.includes(objetivo)}
                      onChange={() => handleObjetivosChange(objetivo)}
                      className="mr-3"
                    />
                    <span className="text-gray-700">{objetivo}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Já recebeu orçamentos? *
              </label>
              <select
                name="jaRecebeuOrcamentos"
                value={formData.jaRecebeuOrcamentos}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A4B7B] focus:border-transparent"
              >
                <option value="">Selecione...</option>
                <option value="sim">Sim</option>
                <option value="nao">Não</option>
              </select>
            </div>

            {formData.jaRecebeuOrcamentos === 'sim' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Quantos orçamentos?
                  </label>
                  <input
                    type="number"
                    name="quantidadeOrcamentos"
                    value={formData.quantidadeOrcamentos}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A4B7B] focus:border-transparent"
                    placeholder="Ex: 3"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Menor valor (R$)
                  </label>
                  <input
                    type="number"
                    name="menorValorOrcamento"
                    value={formData.menorValorOrcamento}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2A4B7B] focus:border-transparent"
                    placeholder="Ex: 18500.00"
                    step="0.01"
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 4: Confirmação e LGPD */}
        {step === 4 && (
          <div className="space-y-6">
            <div className="flex items-start space-x-4 mb-6">
              <Image
                src="/images/volt-celebrando.png"
                alt="Volt"
                width={80}
                height={80}
              />
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex-1">
                <p className="text-gray-700">
                  Quase lá! Só preciso que você confirme os termos e estamos prontos
                  para encontrar as melhores soluções para você! 🚀
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Resumo das suas informações:</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Nome:</strong> {formData.nome}</p>
                <p><strong>E-mail:</strong> {formData.email}</p>
                <p><strong>Telefone:</strong> {formData.telefone}</p>
                <p><strong>CEP:</strong> {formData.cep}</p>
                {formData.consumoMedioKwh && (
                  <p><strong>Consumo:</strong> {formData.consumoMedioKwh} kWh/mês</p>
                )}
                {formData.valorMedioConta && (
                  <p><strong>Valor da conta:</strong> R$ {formData.valorMedioConta}</p>
                )}
                <p><strong>Motivação:</strong> {formData.motivacaoPrincipal}</p>
                <p><strong>Urgência:</strong> {formData.urgencia}</p>
              </div>
            </div>

            <div className="space-y-4">
              <label className="flex items-start p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="checkbox"
                  name="aceitaTermos"
                  checked={formData.aceitaTermos}
                  onChange={handleInputChange}
                  required
                  className="mt-1 mr-3"
                />
                <span className="text-sm text-gray-700">
                  Li e aceito os{' '}
                  <a href="/termos" className="text-[#2A4B7B] underline" target="_blank">
                    Termos de Uso
                  </a>{' '}
                  e a{' '}
                  <a href="/privacidade" className="text-[#2A4B7B] underline" target="_blank">
                    Política de Privacidade
                  </a>{' '}
                  da Brasil Mais Energia. *
                </span>
              </label>

              <label className="flex items-start p-4 border-2 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="checkbox"
                  name="aceitaComunicacao"
                  checked={formData.aceitaComunicacao}
                  onChange={handleInputChange}
                  className="mt-1 mr-3"
                />
                <span className="text-sm text-gray-700">
                  Aceito receber comunicações da Brasil Mais Energia e parceiros sobre
                  produtos, serviços e novidades do setor de energia.
                </span>
              </label>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-3 border-2 border-[#2A4B7B] text-[#2A4B7B] rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              ← Voltar
            </button>
          )}

          {step < 4 ? (
            <button
              type="button"
              onClick={nextStep}
              className="ml-auto px-6 py-3 bg-[#2A4B7B] text-white rounded-lg font-semibold hover:bg-[#1e3557] transition-colors"
            >
              Próximo →
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading || !formData.aceitaTermos}
              className="ml-auto px-8 py-3 bg-[#FBC13A] text-[#2A4B7B] rounded-lg font-bold hover:bg-[#e5ad2a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Enviando...</span>
                </>
              ) : (
                <span>Enviar Formulário 🚀</span>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

