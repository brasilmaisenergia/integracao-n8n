import Link from "next/link";
import VoltMascot from "@/components/VoltMascot";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              O Ecossistema Completo do Setor Elétrico Brasileiro
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Conectamos consumidores, empresas, fornecedores e profissionais em uma única plataforma. 
              Economize energia, gere renda e transforme o futuro energético do Brasil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/para-sua-casa" className="btn-primary">
                Economize na Sua Conta
              </Link>
              <Link href="/trabalhe-conosco" className="btn-secondary bg-white text-primary hover:bg-gray-100">
                Trabalhe Conosco
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-secondary py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-primary font-bold">
            <div className="text-center">
              <div className="text-3xl">5 GW+</div>
              <div className="text-sm">Capacidade Instalada</div>
            </div>
            <div className="text-center">
              <div className="text-3xl">1M+</div>
              <div className="text-sm">Conexões Ativas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl">R$ 2 Bi+</div>
              <div className="text-sm">Economia Gerada</div>
            </div>
            <div className="text-center">
              <div className="text-3xl">8</div>
              <div className="text-sm">Stakeholders Conectados</div>
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem É */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">
              Para Quem É a Brasil Mais Energia?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos um ecossistema que atende TODOS os públicos do setor elétrico. 
              Encontre sua oportunidade!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Consumidores Residenciais */}
            <div className="card text-center">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                Para Sua Casa
              </h3>
              <p className="text-gray-600 mb-4">
                Reduza sua conta de luz em até 20% com Geração Distribuída ou Mercado Livre.
              </p>
              <Link href="/para-sua-casa" className="text-secondary font-bold hover:underline">
                Saiba Mais →
              </Link>
            </div>

            {/* Empresas */}
            <div className="card text-center">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                Para Sua Empresa
              </h3>
              <p className="text-gray-600 mb-4">
                Otimize custos energéticos e aumente a competitividade do seu negócio.
              </p>
              <Link href="/para-sua-empresa" className="text-secondary font-bold hover:underline">
                Saiba Mais →
              </Link>
            </div>

            {/* Comercializadoras */}
            <div className="card text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                Comercializadoras & Geradoras
              </h3>
              <p className="text-gray-600 mb-4">
                Acesse milhares de consumidores qualificados e reduza seu CAC.
              </p>
              <Link href="/comercializadoras" className="text-secondary font-bold hover:underline">
                Saiba Mais →
              </Link>
            </div>

            {/* Fornecedores */}
            <div className="card text-center">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                Fornecedores de Serviços
              </h3>
              <p className="text-gray-600 mb-4">
                Receba leads qualificados sem investir em marketing próprio.
              </p>
              <Link href="/fornecedores" className="text-secondary font-bold hover:underline">
                Saiba Mais →
              </Link>
            </div>

            {/* Freelancers */}
            <div className="card text-center">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                Trabalhe Conosco
              </h3>
              <p className="text-gray-600 mb-4">
                Seja seu próprio patrão. Trabalhe quando quiser, ganhe por performance.
              </p>
              <Link href="/trabalhe-conosco" className="text-secondary font-bold hover:underline">
                Saiba Mais →
              </Link>
            </div>

            {/* Cursos */}
            <div className="card text-center">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                Cursos EAD
              </h3>
              <p className="text-gray-600 mb-4">
                Capacite-se e aumente seus ganhos com certificações reconhecidas.
              </p>
              <Link href="/cursos" className="text-secondary font-bold hover:underline">
                Saiba Mais →
              </Link>
            </div>

            {/* Investidores GD */}
            <div className="card text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                Investidores GD
              </h3>
              <p className="text-gray-600 mb-4">
                Maximize o retorno do seu investimento com gestão profissional de créditos.
              </p>
              <Link href="/investidores" className="text-secondary font-bold hover:underline">
                Saiba Mais →
              </Link>
            </div>

            {/* Franqueados */}
            <div className="card text-center">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                Seja Franqueado
              </h3>
              <p className="text-gray-600 mb-4">
                Abra sua própria unidade e faça parte do maior ecossistema de energia do Brasil.
              </p>
              <Link href="/franquias" className="text-secondary font-bold hover:underline">
                Saiba Mais →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">
              Como Funciona o Ecossistema?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conectamos todos os stakeholders do setor elétrico em uma rede de valor mútuo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-3xl font-bold text-primary mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                Cadastre-se
              </h3>
              <p className="text-gray-600">
                Escolha seu perfil e preencha um formulário simples.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-3xl font-bold text-primary mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                Conecte-se
              </h3>
              <p className="text-gray-600">
                Nossa IA conecta você com as melhores oportunidades.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-3xl font-bold text-primary mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                Realize
              </h3>
              <p className="text-gray-600">
                Economize, ganhe ou cresça com o suporte do ecossistema.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-3xl font-bold text-primary mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                Multiplique
              </h3>
              <p className="text-gray-600">
                Indique e ganhe comissões. Quanto mais conecta, mais ganha.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Pronto para Fazer Parte do Ecossistema?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas e empresas que já estão economizando, ganhando e transformando o setor elétrico brasileiro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/para-sua-casa" className="btn-primary">
              Comece Agora
            </Link>
            <Link href="/sobre" className="btn-secondary bg-white text-primary hover:bg-gray-100">
              Conheça Mais
            </Link>
          </div>
        </div>
      </section>

      {/* Volt Mascot */}
      <VoltMascot
        pose="transparent"
        message="Olá! Sou o Volt e vou te guiar pelo ecossistema da Brasil Mais Energia. Clique em qualquer card para saber mais!"
        position="right"
        size="lg"
      />
    </>
  );
}

