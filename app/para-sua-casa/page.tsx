"use client";

import FormConsumidorResidencial from "@/components/FormConsumidorResidencial";
import VoltMascot from "@/components/VoltMascot";

export default function ParaSuaCasa() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#2A4B7B] to-[#1e3557] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Economize até 95% na Sua Conta de Luz
            </h1>
            <p className="text-xl text-gray-200">
              Descubra a melhor solução de energia para sua casa: Geração Distribuída, Mercado Livre ou Sistema Solar Próprio.
            </p>
          </div>
        </div>
      </section>

      {/* Opções de Economia */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">☀️</div>
              <h3 className="text-2xl font-heading font-bold text-[#2A4B7B] mb-3">
                Geração Distribuída
              </h3>
              <p className="text-gray-600 mb-4">
                Alugue créditos de energia solar e economize sem precisar instalar painéis.
              </p>
              <div className="text-[#FBC13A] font-bold text-xl">Economia: 10-20%</div>
              <ul className="text-sm text-gray-600 mt-4 space-y-2 text-left">
                <li>✓ Sem investimento inicial</li>
                <li>✓ Sem obras ou instalação</li>
                <li>✓ Desconto direto na conta</li>
                <li>✓ Sem fidelidade</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-heading font-bold text-[#2A4B7B] mb-3">
                Mercado Livre
              </h3>
              <p className="text-gray-600 mb-4">
                Escolha seu fornecedor e negocie tarifas mais competitivas.
              </p>
              <div className="text-[#FBC13A] font-bold text-xl">Economia: 15-25%</div>
              <ul className="text-sm text-gray-600 mt-4 space-y-2 text-left">
                <li>✓ Liberdade de escolha</li>
                <li>✓ Tarifas negociadas</li>
                <li>✓ Previsibilidade de custos</li>
                <li>✓ Contratos flexíveis</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow border-2 border-[#FBC13A]">
              <div className="bg-[#FBC13A] text-[#2A4B7B] text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">
                MAIS ECONOMIA
              </div>
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-2xl font-heading font-bold text-[#2A4B7B] mb-3">
                Sistema Próprio
              </h3>
              <p className="text-gray-600 mb-4">
                Instale painéis solares na sua casa e gere sua própria energia.
              </p>
              <div className="text-[#FBC13A] font-bold text-xl">Economia: até 95%</div>
              <ul className="text-sm text-gray-600 mt-4 space-y-2 text-left">
                <li>✓ Máxima economia</li>
                <li>✓ Valorização do imóvel</li>
                <li>✓ Independência energética</li>
                <li>✓ ROI em 4-6 anos</li>
              </ul>
            </div>
          </div>

          {/* Como Funciona */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold text-[#2A4B7B] mb-8 text-center">
              Como Funciona?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2A4B7B] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Preencha o Formulário</h4>
                <p className="text-sm text-gray-600">
                  Conte-nos sobre seu consumo e necessidades
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2A4B7B] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Análise Personalizada</h4>
                <p className="text-sm text-gray-600">
                  Nossa IA analisa seu perfil e identifica as melhores opções
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2A4B7B] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Receba Propostas</h4>
                <p className="text-sm text-gray-600">
                  Compare ofertas de múltiplos fornecedores
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FBC13A] text-[#2A4B7B] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Comece a Economizar</h4>
                <p className="text-sm text-gray-600">
                  Contrate e veja a economia na próxima conta
                </p>
              </div>
            </div>
          </div>

          {/* Formulário Inteligente */}
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#2A4B7B] mb-4">
                Descubra Quanto Você Pode Economizar
              </h2>
              <p className="text-lg text-gray-600">
                Preencha o formulário abaixo e receba uma análise personalizada com as melhores soluções para o seu caso.
              </p>
            </div>

            <FormConsumidorResidencial />
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-[#2A4B7B] mb-12 text-center">
            Por Que Escolher a Brasil Mais Energia?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h4 className="font-bold text-gray-900 mb-2">Análise com IA</h4>
              <p className="text-sm text-gray-600">
                Tecnologia de ponta para identificar a melhor solução para você
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h4 className="font-bold text-gray-900 mb-2">Economia Garantida</h4>
              <p className="text-sm text-gray-600">
                Só recomendamos soluções que realmente geram economia
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h4 className="font-bold text-gray-900 mb-2">Segurança Total</h4>
              <p className="text-sm text-gray-600">
                Seus dados protegidos e em conformidade com a LGPD
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="font-bold text-gray-900 mb-2">Processo Rápido</h4>
              <p className="text-sm text-gray-600">
                Resposta em até 24h com propostas personalizadas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-[#2A4B7B] mb-12 text-center">
            Perguntas Frequentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <details className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-md transition-shadow">
              <summary className="font-bold text-[#2A4B7B] cursor-pointer">
                Como funciona a Geração Distribuída?
              </summary>
              <p className="mt-4 text-gray-600">
                Você aluga créditos de energia solar de usinas remotas e recebe desconto direto na sua conta de luz. Sem obras, sem instalação, sem investimento inicial. É a forma mais rápida e simples de economizar.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-md transition-shadow">
              <summary className="font-bold text-[#2A4B7B] cursor-pointer">
                Quanto tempo leva para começar a economizar?
              </summary>
              <p className="mt-4 text-gray-600">
                Depende da solução escolhida. Para Geração Distribuída, em média 30 a 60 dias. Para sistema próprio, após a instalação e homologação (2-3 meses). Para Mercado Livre, após a migração (1-2 meses).
              </p>
            </details>

            <details className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-md transition-shadow">
              <summary className="font-bold text-[#2A4B7B] cursor-pointer">
                Posso cancelar a qualquer momento?
              </summary>
              <p className="mt-4 text-gray-600">
                Para Geração Distribuída, sim! Não há fidelidade. Para sistema próprio, você é o dono do sistema. Para Mercado Livre, depende do contrato negociado.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-md transition-shadow">
              <summary className="font-bold text-[#2A4B7B] cursor-pointer">
                Como a IA analisa minha fatura?
              </summary>
              <p className="mt-4 text-gray-600">
                Utilizamos tecnologia de visão computacional (Gemini Vision) para extrair automaticamente todos os dados da sua fatura: consumo, valor, distribuidora, classe tarifária, etc. Em segundos, temos um perfil completo do seu consumo energético.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-md transition-shadow">
              <summary className="font-bold text-[#2A4B7B] cursor-pointer">
                Meus dados estão seguros?
              </summary>
              <p className="mt-4 text-gray-600">
                Sim! Utilizamos criptografia de ponta a ponta e estamos em total conformidade com a LGPD. Seus dados são processados de forma segura e nunca compartilhados sem sua autorização expressa.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-md transition-shadow">
              <summary className="font-bold text-[#2A4B7B] cursor-pointer">
                Preciso pagar algo para receber a análise?
              </summary>
              <p className="mt-4 text-gray-600">
                Não! A análise do seu perfil energético e as propostas são 100% gratuitas e sem compromisso. Você só paga se decidir contratar uma das soluções apresentadas.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-[#2A4B7B] to-[#1e3557] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Pronto para Economizar?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de brasileiros que já estão economizando na conta de luz com a Brasil Mais Energia.
          </p>
          <button
            onClick={() => {
              document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#FBC13A] text-[#2A4B7B] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#e5ad2a] transition-colors inline-flex items-center space-x-2"
          >
            <span>Começar Agora</span>
            <span>→</span>
          </button>
        </div>
      </section>

      <VoltMascot
        pose="pointing"
        message="Preencha o formulário e vou te ajudar a encontrar a melhor solução para economizar na sua conta de luz! 💡"
        position="right"
        size="lg"
      />
    </>
  );
}

