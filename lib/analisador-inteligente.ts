/**
 * ANALISADOR INTELIGENTE DE FATURAS
 * Sistema que analisa o perfil do consumidor e recomenda a melhor solução
 * 
 * @author Manus AI
 * @date 2025-10-12
 */

// ============================================
// TIPOS E INTERFACES
// ============================================

export interface DadosFatura {
  // Identificação
  distribuidora: string;
  numeroInstalacao: string;
  numeroCliente: string;
  
  // Classificação
  grupoTarifario: 'A' | 'B';
  subgrupo: string; // A1, A2, A3, A3a, A4, B1, B2, B3
  classeConsumo: 'residencial' | 'comercial' | 'industrial' | 'rural' | 'poder_publico';
  modalidadeTarifaria: 'convencional' | 'branca' | 'azul' | 'verde';
  
  // Consumo
  consumoKwh: number;
  consumoPonta?: number;
  consumoForaPonta?: number;
  demandaContratada?: number;
  demandaRegistrada?: number;
  
  // Valores
  valorTotal: number;
  valorEnergia: number;
  valorTUSD: number; // Tarifa de Uso do Sistema de Distribuição
  valorTE: number; // Tarifa de Energia
  valorICMS: number;
  valorPIS: number;
  valorCOFINS: number;
  valorIluminacaoPublica: number;
  valorBandeira: number;
  
  // Tarifas
  tarifaKwh: number;
  tarifaTUSD: number;
  tarifaTE: number;
  
  // Histórico (se disponível)
  historicoConsumo?: number[];
  historicoValores?: number[];
  
  // Geração própria (se houver)
  energiaInjetada?: number;
  energiaCompensada?: number;
  creditosAnteriores?: number;
  
  // Dados adicionais
  mesReferencia: string;
  dataVencimento: string;
  diasFaturamento: number;
}

export interface PerfilConsumidor {
  tipo: 'residencial' | 'comercial' | 'industrial' | 'rural';
  porte: 'micro' | 'pequeno' | 'medio' | 'grande';
  consumoMedioMensal: number;
  gastoMedioMensal: number;
  potencialEconomia: number;
  grupoTarifario: 'A' | 'B';
  elegibilidadeMercadoLivre: boolean;
  proprietario: boolean;
  urgencia: 'baixa' | 'media' | 'alta';
}

export interface OpcaoSolucao {
  id: string;
  nome: string;
  descricao: string;
  economiaMensal: number;
  economiaAnual: number;
  economiaPercentual: number;
  investimentoInicial: number;
  paybackMeses: number;
  paybackAnos: number;
  roi25Anos: number;
  vantagens: string[];
  desvantagens: string[];
  requisitos: string[];
  prazoImplementacao: string;
  complexidade: 'baixa' | 'media' | 'alta';
  score: number; // 0-100
  recomendado: boolean;
}

export interface AnaliseCompleta {
  perfil: PerfilConsumidor;
  opcoes: OpcaoSolucao[];
  recomendacaoPrincipal: OpcaoSolucao;
  insights: string[];
  alertas: string[];
  proximosPassos: string[];
}

// ============================================
// FUNÇÕES DE ANÁLISE
// ============================================

/**
 * Identifica o perfil do consumidor com base nos dados da fatura
 */
export function identificarPerfil(dados: DadosFatura): PerfilConsumidor {
  const consumoMedio = dados.consumoKwh;
  const gastoMedio = dados.valorTotal;
  
  // Determinar porte
  let porte: 'micro' | 'pequeno' | 'medio' | 'grande';
  if (consumoMedio < 250) porte = 'micro';
  else if (consumoMedio < 500) porte = 'pequeno';
  else if (consumoMedio < 1500) porte = 'medio';
  else porte = 'grande';
  
  // Elegibilidade para Mercado Livre
  // Grupo A: sempre elegível
  // Grupo B: elegível se consumo > 500 kWh/mês (GD) ou > 3000 kWh/mês (ML)
  const elegibilidadeMercadoLivre = 
    dados.grupoTarifario === 'A' || 
    (dados.grupoTarifario === 'B' && consumoMedio >= 3000);
  
  return {
    tipo: dados.classeConsumo,
    porte,
    consumoMedioMensal: consumoMedio,
    gastoMedioMensal: gastoMedio,
    potencialEconomia: gastoMedio * 0.9, // Estimativa inicial
    grupoTarifario: dados.grupoTarifario,
    elegibilidadeMercadoLivre,
    proprietario: true, // Assumir true, será perguntado no formulário
    urgencia: 'media'
  };
}

/**
 * Calcula opção: Geração Distribuída (Cooperativa/Associação)
 */
function calcularOpcaoGD(perfil: PerfilConsumidor, dados: DadosFatura): OpcaoSolucao {
  // GD geralmente oferece 10-20% de economia
  const economiaPercentual = 15;
  const economiaMensal = perfil.gastoMedioMensal * (economiaPercentual / 100);
  const economiaAnual = economiaMensal * 12;
  
  // Investimento inicial: taxa de adesão (varia, mas geralmente baixa)
  const investimentoInicial = 500; // Taxa de adesão média
  
  const paybackMeses = investimentoInicial / economiaMensal;
  const paybackAnos = paybackMeses / 12;
  
  // ROI em 25 anos
  const economiaTotal25Anos = economiaAnual * 25;
  const roi25Anos = ((economiaTotal25Anos - investimentoInicial) / investimentoInicial) * 100;
  
  // Score baseado em múltiplos fatores
  let score = 70; // Base
  if (perfil.porte === 'micro' || perfil.porte === 'pequeno') score += 15;
  if (!perfil.proprietario) score += 10;
  if (perfil.urgencia === 'alta') score += 5;
  
  return {
    id: 'gd',
    nome: 'Geração Distribuída (Cooperativa)',
    descricao: 'Participe de uma cooperativa ou associação de energia solar e economize sem investimento em equipamentos.',
    economiaMensal,
    economiaAnual,
    economiaPercentual,
    investimentoInicial,
    paybackMeses,
    paybackAnos,
    roi25Anos,
    vantagens: [
      'Sem investimento em equipamentos',
      'Sem manutenção ou preocupações técnicas',
      'Economia imediata na conta de luz',
      'Pode ser usado por inquilinos',
      'Flexibilidade para cancelar',
      'Créditos de energia renovável'
    ],
    desvantagens: [
      'Economia menor que sistema próprio',
      'Dependência da cooperativa',
      'Pode haver fila de espera',
      'Economia limitada (geralmente 10-20%)',
      'Não agrega valor ao imóvel'
    ],
    requisitos: [
      'Conta de luz ativa',
      'CPF/CNPJ regular',
      'Aceitar termos da cooperativa'
    ],
    prazoImplementacao: '15-30 dias',
    complexidade: 'baixa',
    score: Math.min(score, 100),
    recomendado: false
  };
}

/**
 * Calcula opção: Mercado Livre de Energia
 */
function calcularOpcaoMercadoLivre(perfil: PerfilConsumidor, dados: DadosFatura): OpcaoSolucao | null {
  // Apenas para elegíveis
  if (!perfil.elegibilidadeMercadoLivre) return null;
  
  // Mercado Livre oferece 15-30% de economia
  const economiaPercentual = 20;
  const economiaMensal = perfil.gastoMedioMensal * (economiaPercentual / 100);
  const economiaAnual = economiaMensal * 12;
  
  // Investimento inicial: taxas de migração e consultoria
  const investimentoInicial = 2000;
  
  const paybackMeses = investimentoInicial / economiaMensal;
  const paybackAnos = paybackMeses / 12;
  
  const economiaTotal25Anos = economiaAnual * 25;
  const roi25Anos = ((economiaTotal25Anos - investimentoInicial) / investimentoInicial) * 100;
  
  let score = 75;
  if (perfil.grupoTarifario === 'A') score += 15;
  if (perfil.porte === 'grande') score += 10;
  
  return {
    id: 'mercado_livre',
    nome: 'Mercado Livre de Energia',
    descricao: 'Migre para o mercado livre e escolha seu fornecedor de energia, obtendo tarifas mais competitivas.',
    economiaMensal,
    economiaAnual,
    economiaPercentual,
    investimentoInicial,
    paybackMeses,
    paybackAnos,
    roi25Anos,
    vantagens: [
      'Economia significativa (15-30%)',
      'Escolha do fornecedor',
      'Contratos flexíveis',
      'Previsibilidade de custos',
      'Energia de fontes renováveis',
      'Sem investimento em equipamentos'
    ],
    desvantagens: [
      'Apenas para Grupo A ou alto consumo',
      'Processo burocrático de migração',
      'Necessita gestão contratual',
      'Multas por rescisão antecipada',
      'Volatilidade de preços no mercado spot'
    ],
    requisitos: [
      'Grupo A ou consumo > 3.000 kWh/mês',
      'Análise de viabilidade',
      'Contrato com comercializadora',
      'Adequação do medidor'
    ],
    prazoImplementacao: '60-90 dias',
    complexidade: 'media',
    score: Math.min(score, 100),
    recomendado: false
  };
}

/**
 * Calcula opção: Sistema Fotovoltaico Próprio
 */
function calcularOpcaoSistemaProprio(perfil: PerfilConsumidor, dados: DadosFatura): OpcaoSolucao {
  // Sistema próprio oferece 85-95% de economia
  const economiaPercentual = 90;
  const economiaMensal = perfil.gastoMedioMensal * (economiaPercentual / 100);
  const economiaAnual = economiaMensal * 12;
  
  // Dimensionamento: ~150 kWh por kWp instalado/mês
  const potenciaNecessariaKwp = perfil.consumoMedioMensal / 150;
  
  // Custo médio: R$ 5.000 por kWp instalado
  const custoKwp = 5000;
  const investimentoInicial = potenciaNecessariaKwp * custoKwp;
  
  const paybackMeses = investimentoInicial / economiaMensal;
  const paybackAnos = paybackMeses / 12;
  
  const economiaTotal25Anos = economiaAnual * 25;
  const roi25Anos = ((economiaTotal25Anos - investimentoInicial) / investimentoInicial) * 100;
  
  let score = 85;
  if (perfil.proprietario) score += 10;
  if (perfil.porte === 'medio' || perfil.porte === 'grande') score += 5;
  if (paybackAnos <= 5) score += 5;
  
  return {
    id: 'sistema_proprio',
    nome: 'Sistema Fotovoltaico Próprio',
    descricao: 'Instale painéis solares no seu imóvel e produza sua própria energia, economizando até 95% na conta de luz.',
    economiaMensal,
    economiaAnual,
    economiaPercentual,
    investimentoInicial,
    paybackMeses,
    paybackAnos,
    roi25Anos,
    vantagens: [
      'Maior economia possível (85-95%)',
      'Valorização do imóvel (até 30%)',
      'Independência energética',
      'Vida útil de 25+ anos',
      'Baixíssima manutenção',
      'Proteção contra aumento de tarifas',
      'Sustentabilidade ambiental',
      'ROI excelente no longo prazo'
    ],
    desvantagens: [
      'Investimento inicial alto',
      'Requer ser proprietário do imóvel',
      'Necessita espaço adequado (telhado/solo)',
      'Payback de 4-7 anos',
      'Depende de financiamento (se não tiver capital)',
      'Requer homologação na distribuidora'
    ],
    requisitos: [
      'Ser proprietário do imóvel',
      'Telhado ou área com boa insolação',
      'Estrutura adequada para instalação',
      'Aprovação do projeto pela distribuidora',
      'Capital próprio ou financiamento'
    ],
    prazoImplementacao: '45-60 dias',
    complexidade: 'media',
    score: Math.min(score, 100),
    recomendado: false
  };
}

/**
 * Calcula opção: Sistema Híbrido (Solar + Bateria)
 */
function calcularOpcaoHibrido(perfil: PerfilConsumidor, dados: DadosFatura): OpcaoSolucao {
  // Híbrido oferece mesma economia do sistema próprio + backup
  const economiaPercentual = 90;
  const economiaMensal = perfil.gastoMedioMensal * (economiaPercentual / 100);
  const economiaAnual = economiaMensal * 12;
  
  const potenciaNecessariaKwp = perfil.consumoMedioMensal / 150;
  
  // Custo: sistema solar + baterias (mais caro)
  const custoKwp = 5000;
  const custoSolar = potenciaNecessariaKwp * custoKwp;
  const custoBaterias = custoSolar * 0.5; // Baterias adicionam ~50% ao custo
  const investimentoInicial = custoSolar + custoBaterias;
  
  const paybackMeses = investimentoInicial / economiaMensal;
  const paybackAnos = paybackMeses / 12;
  
  const economiaTotal25Anos = economiaAnual * 25;
  const roi25Anos = ((economiaTotal25Anos - investimentoInicial) / investimentoInicial) * 100;
  
  let score = 70;
  if (perfil.tipo === 'comercial' || perfil.tipo === 'industrial') score += 15;
  if (perfil.porte === 'grande') score += 10;
  
  return {
    id: 'sistema_hibrido',
    nome: 'Sistema Híbrido (Solar + Bateria)',
    descricao: 'Sistema solar com armazenamento em baterias para backup de energia e maior independência da rede.',
    economiaMensal,
    economiaAnual,
    economiaPercentual,
    investimentoInicial,
    paybackMeses,
    paybackAnos,
    roi25Anos,
    vantagens: [
      'Todas as vantagens do sistema próprio',
      'Backup de energia (sem quedas)',
      'Uso de energia armazenada à noite',
      'Maior independência da rede',
      'Ideal para locais com quedas frequentes',
      'Pode vender excedente'
    ],
    desvantagens: [
      'Investimento inicial muito alto',
      'Baterias têm vida útil menor (10-15 anos)',
      'Manutenção mais complexa',
      'Payback mais longo',
      'Requer mais espaço'
    ],
    requisitos: [
      'Todos os requisitos do sistema próprio',
      'Espaço adicional para baterias',
      'Instalação elétrica adequada',
      'Maior investimento inicial'
    ],
    prazoImplementacao: '60-90 dias',
    complexidade: 'alta',
    score: Math.min(score, 100),
    recomendado: false
  };
}

/**
 * Análise completa e recomendação inteligente
 */
export function analisarERecomendar(dados: DadosFatura, proprietario: boolean = true, urgencia: 'baixa' | 'media' | 'alta' = 'media'): AnaliseCompleta {
  // 1. Identificar perfil
  const perfil = identificarPerfil(dados);
  perfil.proprietario = proprietario;
  perfil.urgencia = urgencia;
  
  // 2. Calcular todas as opções
  const opcoes: OpcaoSolucao[] = [];
  
  // GD - sempre disponível
  opcoes.push(calcularOpcaoGD(perfil, dados));
  
  // Mercado Livre - apenas se elegível
  const opcaoML = calcularOpcaoMercadoLivre(perfil, dados);
  if (opcaoML) opcoes.push(opcaoML);
  
  // Sistema Próprio - sempre disponível
  opcoes.push(calcularOpcaoSistemaProprio(perfil, dados));
  
  // Sistema Híbrido - sempre disponível
  opcoes.push(calcularOpcaoHibrido(perfil, dados));
  
  // 3. Ordenar por score
  opcoes.sort((a, b) => b.score - a.score);
  
  // 4. Marcar recomendação principal
  opcoes[0].recomendado = true;
  const recomendacaoPrincipal = opcoes[0];
  
  // 5. Gerar insights
  const insights: string[] = [];
  
  if (perfil.grupoTarifario === 'A') {
    insights.push('🎯 Você é Grupo A! Tem acesso ao Mercado Livre de Energia com excelentes condições.');
  }
  
  if (perfil.consumoMedioMensal > 500) {
    insights.push('⚡ Seu consumo é alto! Um sistema próprio pode gerar economia de até R$ ' + 
      Math.round(perfil.gastoMedioMensal * 0.9).toLocaleString('pt-BR') + '/mês.');
  }
  
  if (perfil.proprietario) {
    insights.push('🏠 Como proprietário, você pode instalar um sistema próprio e valorizar seu imóvel em até 30%.');
  } else {
    insights.push('🏢 Como não-proprietário, Geração Distribuída é sua melhor opção (sem investimento em equipamentos).');
  }
  
  const melhorPayback = Math.min(...opcoes.map(o => o.paybackAnos));
  if (melhorPayback <= 5) {
    insights.push('💰 Payback excelente! Você recupera o investimento em menos de 5 anos.');
  }
  
  // 6. Gerar alertas
  const alertas: string[] = [];
  
  if (dados.valorBandeira > 50) {
    alertas.push('⚠️ Você está pagando bandeira tarifária alta. Energia solar elimina esse custo!');
  }
  
  if (perfil.gastoMedioMensal > 500 && !perfil.proprietario) {
    alertas.push('💡 Com esse gasto, considere negociar com o proprietário a instalação de painéis solares.');
  }
  
  if (perfil.consumoMedioMensal < 150) {
    alertas.push('ℹ️ Seu consumo é baixo. Geração Distribuída pode ser mais vantajosa que sistema próprio.');
  }
  
  // 7. Próximos passos
  const proximosPassos: string[] = [
    '1. Analise as opções apresentadas e compare vantagens/desvantagens',
    '2. Solicite orçamentos detalhados das soluções de seu interesse',
    '3. Simule o financiamento (se necessário) para sistema próprio',
    '4. Agende uma visita técnica gratuita para avaliação do seu imóvel',
    '5. Tire suas dúvidas com nossos consultores especializados'
  ];
  
  return {
    perfil,
    opcoes,
    recomendacaoPrincipal,
    insights,
    alertas,
    proximosPassos
  };
}

/**
 * Formata análise para apresentação ao usuário
 */
export function formatarAnalise(analise: AnaliseCompleta): string {
  let texto = `
# 📊 Análise Personalizada de Economia de Energia

## 👤 Seu Perfil
- **Tipo:** ${analise.perfil.tipo}
- **Porte:** ${analise.perfil.porte}
- **Consumo médio:** ${analise.perfil.consumoMedioMensal.toLocaleString('pt-BR')} kWh/mês
- **Gasto médio:** R$ ${analise.perfil.gastoMedioMensal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}/mês
- **Grupo tarifário:** ${analise.perfil.grupoTarifario}

## 💡 Insights Importantes
${analise.insights.map(i => `- ${i}`).join('\n')}

${analise.alertas.length > 0 ? `\n## ⚠️ Alertas\n${analise.alertas.map(a => `- ${a}`).join('\n')}` : ''}

## 🎯 Recomendação Principal: ${analise.recomendacaoPrincipal.nome}

${analise.recomendacaoPrincipal.descricao}

**Economia mensal:** R$ ${analise.recomendacaoPrincipal.economiaMensal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} (${analise.recomendacaoPrincipal.economiaPercentual}%)
**Investimento:** R$ ${analise.recomendacaoPrincipal.investimentoInicial.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
**Payback:** ${analise.recomendacaoPrincipal.paybackAnos.toFixed(1)} anos
**ROI (25 anos):** ${analise.recomendacaoPrincipal.roi25Anos.toFixed(0)}%

## 📋 Todas as Opções Disponíveis

${analise.opcoes.map((opcao, index) => `
### ${index + 1}. ${opcao.nome} ${opcao.recomendado ? '⭐ RECOMENDADO' : ''}
${opcao.descricao}

**Economia:** R$ ${opcao.economiaMensal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}/mês (${opcao.economiaPercentual}%)
**Investimento:** R$ ${opcao.investimentoInicial.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
**Payback:** ${opcao.paybackAnos.toFixed(1)} anos
**Prazo:** ${opcao.prazoImplementacao}
**Complexidade:** ${opcao.complexidade}

✅ **Vantagens:**
${opcao.vantagens.map(v => `  - ${v}`).join('\n')}

❌ **Desvantagens:**
${opcao.desvantagens.map(d => `  - ${d}`).join('\n')}

📋 **Requisitos:**
${opcao.requisitos.map(r => `  - ${r}`).join('\n')}
`).join('\n---\n')}

## 🚀 Próximos Passos

${analise.proximosPassos.map(p => `${p}`).join('\n')}

---

**Quer uma análise ainda mais detalhada?** Fale com nossos consultores!
`;
  
  return texto;
}

