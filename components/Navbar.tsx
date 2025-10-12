"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Brasil Mais Energia"
              width={180}
              height={60}
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-primary font-semibold hover:text-secondary transition-colors">
                Para Você
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 py-2 w-48">
                <Link href="/para-sua-casa" className="block px-4 py-2 hover:bg-gray-100">
                  Para Sua Casa
                </Link>
                <Link href="/para-sua-empresa" className="block px-4 py-2 hover:bg-gray-100">
                  Para Sua Empresa
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className="text-primary font-semibold hover:text-secondary transition-colors">
                Para Seu Negócio
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 py-2 w-56">
                <Link href="/comercializadoras" className="block px-4 py-2 hover:bg-gray-100">
                  Comercializadoras & Geradoras
                </Link>
                <Link href="/fornecedores" className="block px-4 py-2 hover:bg-gray-100">
                  Fornecedores de Serviços
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className="text-primary font-semibold hover:text-secondary transition-colors">
                Para Sua Carreira
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 py-2 w-48">
                <Link href="/cursos" className="block px-4 py-2 hover:bg-gray-100">
                  Cursos EAD
                </Link>
                <Link href="/trabalhe-conosco" className="block px-4 py-2 hover:bg-gray-100">
                  Trabalhe Conosco
                </Link>
                <Link href="/franquias" className="block px-4 py-2 hover:bg-gray-100">
                  Seja Franqueado
                </Link>
              </div>
            </div>

            <Link href="/marketplace" className="text-primary font-semibold hover:text-secondary transition-colors">
              Marketplace
            </Link>

            <Link href="/sobre" className="text-primary font-semibold hover:text-secondary transition-colors">
              Sobre
            </Link>

            <Link href="/contato" className="btn-primary text-sm">
              Fale Conosco
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="space-y-2">
              <Link href="/para-sua-casa" className="block py-2 text-primary hover:text-secondary">
                Para Sua Casa
              </Link>
              <Link href="/para-sua-empresa" className="block py-2 text-primary hover:text-secondary">
                Para Sua Empresa
              </Link>
              <Link href="/comercializadoras" className="block py-2 text-primary hover:text-secondary">
                Comercializadoras & Geradoras
              </Link>
              <Link href="/fornecedores" className="block py-2 text-primary hover:text-secondary">
                Fornecedores de Serviços
              </Link>
              <Link href="/cursos" className="block py-2 text-primary hover:text-secondary">
                Cursos EAD
              </Link>
              <Link href="/trabalhe-conosco" className="block py-2 text-primary hover:text-secondary">
                Trabalhe Conosco
              </Link>
              <Link href="/franquias" className="block py-2 text-primary hover:text-secondary">
                Seja Franqueado
              </Link>
              <Link href="/marketplace" className="block py-2 text-primary hover:text-secondary">
                Marketplace
              </Link>
              <Link href="/sobre" className="block py-2 text-primary hover:text-secondary">
                Sobre
              </Link>
              <Link href="/contato" className="block py-2 btn-primary text-center mt-4">
                Fale Conosco
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

