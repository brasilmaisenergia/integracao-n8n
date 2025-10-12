"use client";

import { useState } from "react";
import Link from "next/link";
import VoltMascot from "@/components/VoltMascot";

interface Course {
  id: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  price: string;
  image: string;
  instructor: string;
  rating: number;
  students: number;
  description: string;
  topics: string[];
}

export default function Cursos() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [selectedLevel, setSelectedLevel] = useState("todos");

  const categories = [
    { id: "todos", name: "Todos os Cursos", icon: "📚" },
    { id: "instalacao", name: "Instalação Solar", icon: "🔧" },
    { id: "comercial", name: "Comercial e Vendas", icon: "💼" },
    { id: "projeto", name: "Projeto e Dimensionamento", icon: "📐" },
    { id: "mercado", name: "Mercado Livre", icon: "⚡" },
    { id: "gestao", name: "Gestão de Negócios", icon: "📊" },
  ];

  const levels = [
    { id: "todos", name: "Todos os Níveis" },
    { id: "iniciante", name: "Iniciante" },
    { id: "intermediario", name: "Intermediário" },
    { id: "avancado", name: "Avançado" },
  ];

  const courses: Course[] = [
    {
      id: "1",
      title: "Instalador Solar Fotovoltaico Completo",
      category: "instalacao",
      level: "iniciante",
      duration: "40 horas",
      price: "R$ 1.497,00",
      image: "🔧",
      instructor: "Eng. Carlos Silva",
      rating: 4.9,
      students: 3420,
      description: "Aprenda do zero a instalar sistemas fotovoltaicos residenciais e comerciais com certificação reconhecida nacionalmente.",
      topics: ["Fundamentos de Energia Solar", "Dimensionamento de Sistemas", "Instalação Prática", "Normas e Segurança", "Certificação NR10"],
    },
    {
      id: "2",
      title: "Vendedor de Energia Solar de Alta Performance",
      category: "comercial",
      level: "iniciante",
      duration: "20 horas",
      price: "R$ 897,00",
      image: "💼",
      instructor: "João Vendas",
      rating: 4.8,
      students: 2150,
      description: "Domine técnicas de vendas consultivas e feche mais contratos de energia solar com métodos comprovados.",
      topics: ["Prospecção de Clientes", "Apresentação de Propostas", "Objeções e Fechamento", "CRM e Follow-up", "Casos de Sucesso"],
    },
    {
      id: "3",
      title: "Projetista de Sistemas Fotovoltaicos",
      category: "projeto",
      level: "intermediario",
      duration: "60 horas",
      price: "R$ 2.497,00",
      image: "📐",
      instructor: "Eng. Ana Projetos",
      rating: 4.9,
      students: 1890,
      description: "Aprenda a projetar sistemas fotovoltaicos de qualquer porte usando softwares profissionais como PVSyst e AutoCAD.",
      topics: ["Análise de Viabilidade", "Dimensionamento Avançado", "Softwares de Projeto", "Documentação Técnica", "Homologação"],
    },
    {
      id: "4",
      title: "Mercado Livre de Energia para Iniciantes",
      category: "mercado",
      level: "iniciante",
      duration: "15 horas",
      price: "R$ 697,00",
      image: "⚡",
      instructor: "Dr. Pedro Energia",
      rating: 4.7,
      students: 1560,
      description: "Entenda o funcionamento do Mercado Livre de Energia e identifique oportunidades de economia para empresas.",
      topics: ["Fundamentos do Mercado Livre", "ACL vs ACR", "Contratos de Energia", "Migração de Clientes", "Oportunidades de Negócio"],
    },
    {
      id: "5",
      title: "Gestão de Empresas de Energia Solar",
      category: "gestao",
      level: "avancado",
      duration: "30 horas",
      price: "R$ 1.797,00",
      image: "📊",
      instructor: "MBA Marcos Gestão",
      rating: 4.8,
      students: 980,
      description: "Aprenda a estruturar, gerenciar e escalar uma empresa de energia solar lucrativa e sustentável.",
      topics: ["Planejamento Estratégico", "Gestão Financeira", "Marketing Digital", "Gestão de Equipes", "Processos e Qualidade"],
    },
    {
      id: "6",
      title: "Manutenção Preventiva e Corretiva de Sistemas Fotovoltaicos",
      category: "instalacao",
      level: "intermediario",
      duration: "25 horas",
      price: "R$ 997,00",
      image: "🔧",
      instructor: "Téc. Roberto Manutenção",
      rating: 4.6,
      students: 1240,
      description: "Domine técnicas de manutenção, diagnóstico de falhas e otimização de performance de sistemas solares.",
      topics: ["Inspeção de Sistemas", "Diagnóstico de Falhas", "Limpeza e Manutenção", "Monitoramento", "Relatórios Técnicos"],
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = selectedCategory === "todos" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "todos" || course.level === selectedLevel;
    return matchesCategory && matchesLevel;
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Cursos e Capacitação Profissional
            </h1>
            <p className="text-xl text-gray-200">
              Desenvolva sua carreira no setor de energia com cursos práticos, certificações reconhecidas e instrutores experientes.
            </p>
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="bg-secondary py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-primary font-bold">
            <div className="text-center">
              <div className="text-3xl">50+</div>
              <div className="text-sm">Cursos Disponíveis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl">15.000+</div>
              <div className="text-sm">Alunos Formados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl">4.8★</div>
              <div className="text-sm">Avaliação Média</div>
            </div>
            <div className="text-center">
              <div className="text-3xl">95%</div>
              <div className="text-sm">Taxa de Empregabilidade</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-6">
            {/* Categorias */}
            <div>
              <h3 className="font-bold text-primary mb-3">Categorias:</h3>
              <div className="flex flex-wrap gap-2">
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

            {/* Níveis */}
            <div>
              <h3 className="font-bold text-primary mb-3">Nível:</h3>
              <div className="flex flex-wrap gap-2">
                {levels.map((lvl) => (
                  <button
                    key={lvl.id}
                    onClick={() => setSelectedLevel(lvl.id)}
                    className={`px-4 py-2 rounded-lg font-bold transition-all ${
                      selectedLevel === lvl.id
                        ? "bg-primary text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {lvl.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-heading font-bold text-primary">
              {filteredCourses.length} {filteredCourses.length === 1 ? "Curso Encontrado" : "Cursos Encontrados"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div key={course.id} className="card hover:shadow-xl transition-shadow">
                <div className="text-6xl text-center mb-4">{course.image}</div>
                
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2 py-1 text-xs font-bold rounded ${
                    course.level === "iniciante" ? "bg-green-100 text-green-800" :
                    course.level === "intermediario" ? "bg-yellow-100 text-yellow-800" :
                    "bg-red-100 text-red-800"
                  }`}>
                    {course.level.toUpperCase()}
                  </span>
                  <span className="text-sm text-gray-600">⏱️ {course.duration}</span>
                </div>
                
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  {course.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3">
                  {course.description}
                </p>
                
                <div className="mb-3">
                  <p className="text-sm font-bold text-gray-700 mb-1">O que você vai aprender:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {course.topics.slice(0, 3).map((topic, idx) => (
                      <li key={idx}>✓ {topic}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-yellow-500">⭐</span>
                  <span className="font-bold">{course.rating}</span>
                  <span className="text-gray-500 text-sm">({course.students.toLocaleString()} alunos)</span>
                </div>
                
                <div className="text-sm text-gray-600 mb-4">
                  Instrutor: <span className="font-bold">{course.instructor}</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-secondary">{course.price}</span>
                  <span className="text-sm text-gray-500">ou 12x sem juros</span>
                </div>
                
                <button className="w-full btn-primary">
                  Ver Detalhes do Curso
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary mb-12 text-center">
            Por Que Estudar na Brasil Mais Energia?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                Certificação Reconhecida
              </h3>
              <p className="text-gray-600">
                Certificados aceitos por empresas e órgãos reguladores em todo o Brasil.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">👨‍🏫</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                Instrutores Experientes
              </h3>
              <p className="text-gray-600">
                Aprenda com profissionais atuantes no mercado com anos de experiência prática.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                Empregabilidade
              </h3>
              <p className="text-gray-600">
                Acesso a vagas exclusivas no nosso portal de empregos para alunos certificados.
              </p>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                Conteúdo Prático
              </h3>
              <p className="text-gray-600">
                Cursos focados em aplicação real, com projetos práticos e estudos de caso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Pronto Para Transformar Sua Carreira?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de profissionais que já se capacitaram conosco e estão construindo carreiras de sucesso no setor de energia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato" className="btn-secondary bg-white text-primary hover:bg-gray-100">
              Falar com Consultor
            </Link>
            <Link href="/trabalhe-conosco" className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-primary">
              Ver Oportunidades de Emprego
            </Link>
          </div>
        </div>
      </section>

      <VoltMascot
        pose="pointing"
        message="Invista na sua educação e se torne um especialista em energia! Nossos cursos são práticos e focados no mercado."
        position="right"
        size="lg"
      />
    </>
  );
}

