"use client";

import { useState } from "react";
import Link from "next/link";
import VoltMascot from "@/components/VoltMascot";

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  supplier: string;
  rating: number;
  description: string;
}

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "todos", name: "Todos os Produtos", icon: "🛒" },
    { id: "paineis", name: "Painéis Solares", icon: "☀️" },
    { id: "inversores", name: "Inversores", icon: "⚡" },
    { id: "estruturas", name: "Estruturas", icon: "🔧" },
    { id: "cabos", name: "Cabos e Conectores", icon: "🔌" },
    { id: "baterias", name: "Baterias", icon: "🔋" },
    { id: "monitoramento", name: "Monitoramento", icon: "📊" },
  ];

  const products: Product[] = [
    {
      id: "1",
      name: "Painel Solar 550W Monocristalino",
      category: "paineis",
      price: "R$ 890,00",
      image: "☀️",
      supplier: "SolarTech Brasil",
      rating: 4.8,
      description: "Painel de alta eficiência com 25 anos de garantia",
    },
    {
      id: "2",
      name: "Inversor Híbrido 5kW",
      category: "inversores",
      price: "R$ 4.500,00",
      image: "⚡",
      supplier: "EnergyPro",
      rating: 4.9,
      description: "Inversor com backup de bateria e monitoramento WiFi",
    },
    {
      id: "3",
      name: "Estrutura para Telhado Cerâmico",
      category: "estruturas",
      price: "R$ 1.200,00",
      image: "🔧",
      supplier: "FixSolar",
      rating: 4.7,
      description: "Kit completo para 10 painéis, alumínio anodizado",
    },
    {
      id: "4",
      name: "Cabo Solar 6mm² (100m)",
      category: "cabos",
      price: "R$ 650,00",
      image: "🔌",
      supplier: "CaboTech",
      rating: 4.6,
      description: "Cabo especial para sistemas fotovoltaicos, UV resistente",
    },
    {
      id: "5",
      name: "Bateria de Lítio 10kWh",
      category: "baterias",
      price: "R$ 18.500,00",
      image: "🔋",
      supplier: "PowerStore",
      rating: 4.9,
      description: "Bateria de longa duração com 10 anos de garantia",
    },
    {
      id: "6",
      name: "Sistema de Monitoramento IoT",
      category: "monitoramento",
      price: "R$ 890,00",
      image: "📊",
      supplier: "SmartEnergy",
      rating: 4.8,
      description: "Dashboard completo com app mobile e alertas",
    },
    {
      id: "7",
      name: "Painel Solar 450W Policristalino",
      category: "paineis",
      price: "R$ 690,00",
      image: "☀️",
      supplier: "SolarBrasil",
      rating: 4.5,
      description: "Excelente custo-benefício para projetos residenciais",
    },
    {
      id: "8",
      name: "Inversor String 10kW",
      category: "inversores",
      price: "R$ 6.800,00",
      image: "⚡",
      supplier: "InverterPro",
      rating: 4.7,
      description: "Ideal para sistemas comerciais de médio porte",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "todos" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Marketplace de Energia Solar
            </h1>
            <p className="text-xl text-gray-200">
              Encontre os melhores produtos e equipamentos para seu projeto de energia solar com preços competitivos e fornecedores certificados.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros e Busca */}
      <section className="py-8 bg-gray-50 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Busca */}
            <div className="w-full md:w-96">
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
            </div>

            {/* Categorias */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg font-bold transition-all ${
                    selectedCategory === cat.id
                      ? "bg-secondary text-primary"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-heading font-bold text-primary">
              {filteredProducts.length} {filteredProducts.length === 1 ? "Produto Encontrado" : "Produtos Encontrados"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="card hover:shadow-xl transition-shadow">
                <div className="text-6xl text-center mb-4">{product.image}</div>
                
                <h3 className="text-lg font-heading font-bold text-primary mb-2">
                  {product.name}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3">
                  {product.description}
                </p>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-yellow-500">⭐</span>
                  <span className="font-bold">{product.rating}</span>
                  <span className="text-gray-500 text-sm">({Math.floor(Math.random() * 200 + 50)} avaliações)</span>
                </div>
                
                <div className="text-sm text-gray-600 mb-4">
                  Fornecedor: <span className="font-bold">{product.supplier}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-secondary">{product.price}</span>
                </div>
                
                <button className="w-full mt-4 btn-primary">
                  Ver Detalhes
                </button>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                Nenhum produto encontrado
              </h3>
              <p className="text-gray-600">
                Tente ajustar os filtros ou termo de busca.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary mb-12 text-center">
            Por Que Comprar no Nosso Marketplace?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                Fornecedores Certificados
              </h3>
              <p className="text-gray-600">
                Todos os fornecedores são verificados e certificados pela Brasil Mais Energia.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                Melhores Preços
              </h3>
              <p className="text-gray-600">
                Preços competitivos negociados diretamente com fabricantes e distribuidores.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                Entrega Garantida
              </h3>
              <p className="text-gray-600">
                Logística integrada com rastreamento em tempo real para todo o Brasil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA para Fornecedores */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            É Fornecedor de Equipamentos?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Cadastre seus produtos no nosso marketplace e alcance milhares de instaladores e integradores em todo o Brasil.
          </p>
          <Link href="/fornecedores" className="btn-secondary bg-white text-primary hover:bg-gray-100">
            Quero Vender no Marketplace
          </Link>
        </div>
      </section>

      <VoltMascot
        pose="thinking"
        message="Encontre tudo que você precisa para seu projeto solar aqui no marketplace!"
        position="right"
        size="lg"
      />
    </>
  );
}

