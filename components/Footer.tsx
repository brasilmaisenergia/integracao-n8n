import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1">
            <Image
              src="/images/logo.png"
              alt="Brasil Mais Energia"
              width={150}
              height={50}
              className="mb-4 brightness-0 invert"
            />
            <p className="text-sm text-gray-300">
              O ecossistema completo do setor elétrico brasileiro. Conectando pessoas, empresas e oportunidades.
            </p>
          </div>

          {/* Para Você */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4 text-secondary">Para Você</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/para-sua-casa" className="text-sm hover:text-secondary transition-colors">
                  Para Sua Casa
                </Link>
              </li>
              <li>
                <Link href="/para-sua-empresa" className="text-sm hover:text-secondary transition-colors">
                  Para Sua Empresa
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="text-sm hover:text-secondary transition-colors">
                  Marketplace
                </Link>
              </li>
            </ul>
          </div>

          {/* Para Seu Negócio */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4 text-secondary">Para Seu Negócio</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/comercializadoras" className="text-sm hover:text-secondary transition-colors">
                  Comercializadoras & Geradoras
                </Link>
              </li>
              <li>
                <Link href="/fornecedores" className="text-sm hover:text-secondary transition-colors">
                  Fornecedores de Serviços
                </Link>
              </li>
              <li>
                <Link href="/franquias" className="text-sm hover:text-secondary transition-colors">
                  Seja Franqueado
                </Link>
              </li>
            </ul>
          </div>

          {/* Para Sua Carreira */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4 text-secondary">Para Sua Carreira</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cursos" className="text-sm hover:text-secondary transition-colors">
                  Cursos EAD
                </Link>
              </li>
              <li>
                <Link href="/trabalhe-conosco" className="text-sm hover:text-secondary transition-colors">
                  Trabalhe Conosco
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-sm hover:text-secondary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-sm hover:text-secondary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300">
              © 2025 Brasil Mais Energia. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/termos" className="text-sm hover:text-secondary transition-colors">
                Termos de Uso
              </Link>
              <Link href="/privacidade" className="text-sm hover:text-secondary transition-colors">
                Privacidade
              </Link>
              <Link href="/cookies" className="text-sm hover:text-secondary transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

