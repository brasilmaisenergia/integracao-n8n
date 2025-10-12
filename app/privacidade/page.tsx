import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacidadePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Política de Privacidade</h1>
            <p className="text-xl opacity-90">Última atualização: 12 de outubro de 2025</p>
            <p className="text-lg opacity-80 mt-2">Em conformidade com a LGPD (Lei nº 13.709/2018)</p>
          </div>
        </section>

        {/* Conteúdo */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              
              <div className="bg-blue-50 border-l-4 border-primary p-6 mb-8">
                <h3 className="text-primary mt-0">🔒 Seu Compromisso com a Privacidade</h3>
                <p className="mb-0">
                  No Brasil Mais Energia, levamos a proteção dos seus dados pessoais muito a sério. 
                  Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos suas informações, 
                  em total conformidade com a Lei Geral de Proteção de Dados (LGPD).
                </p>
              </div>

              <h2>1. Informações Gerais</h2>
              
              <h3>1.1 Controlador de Dados</h3>
              <p>
                <strong>Brasil Mais Energia Ltda.</strong><br/>
                CNPJ: [INSERIR CNPJ]<br/>
                Endereço: [INSERIR ENDEREÇO COMPLETO]<br/>
                E-mail: privacidade@brasilmaisenergia.com<br/>
                DPO (Encarregado de Dados): [NOME DO DPO]<br/>
                E-mail do DPO: dpo@brasilmaisenergia.com
              </p>

              <h3>1.2 Aplicação desta Política</h3>
              <p>
                Esta política se aplica a todos os usuários do site www.brasilmaisenergia.com e de nossos serviços, 
                incluindo:
              </p>
              <ul>
                <li>Visitantes do site</li>
                <li>Usuários cadastrados</li>
                <li>Alunos de cursos EAD</li>
                <li>Compradores no marketplace</li>
                <li>Prestadores de serviço cadastrados</li>
                <li>Parceiros comerciais</li>
              </ul>

              <h2>2. Dados Pessoais que Coletamos</h2>

              <h3>2.1 Dados Fornecidos Diretamente por Você</h3>
              <p>Coletamos as seguintes informações quando você:</p>

              <h4>a) Cria uma conta:</h4>
              <ul>
                <li>Nome completo</li>
                <li>E-mail</li>
                <li>Telefone/WhatsApp</li>
                <li>CPF ou CNPJ</li>
                <li>Data de nascimento</li>
                <li>Endereço completo (CEP, rua, número, complemento, cidade, estado)</li>
                <li>Senha (armazenada de forma criptografada)</li>
              </ul>

              <h4>b) Solicita análise de fatura de energia:</h4>
              <ul>
                <li>Fatura de energia (PDF ou imagem)</li>
                <li>Número da instalação</li>
                <li>Distribuidora de energia</li>
                <li>Tipo de imóvel</li>
                <li>Consumo médio mensal</li>
              </ul>

              <h4>c) Compra um curso ou produto:</h4>
              <ul>
                <li>Dados de pagamento (processados por gateway seguro)</li>
                <li>Histórico de compras</li>
                <li>Notas fiscais</li>
              </ul>

              <h4>d) Se cadastra como prestador de serviço:</h4>
              <ul>
                <li>Documentos profissionais (certificados, licenças)</li>
                <li>Portfólio de trabalhos</li>
                <li>Referências profissionais</li>
              </ul>

              <h3>2.2 Dados Coletados Automaticamente</h3>
              <p>Quando você navega em nosso site, coletamos automaticamente:</p>
              <ul>
                <li>Endereço IP</li>
                <li>Tipo de navegador e versão</li>
                <li>Sistema operacional</li>
                <li>Páginas visitadas e tempo de permanência</li>
                <li>Links clicados</li>
                <li>Origem do acesso (site de referência)</li>
                <li>Cookies e tecnologias similares</li>
              </ul>

              <h3>2.3 Dados Sensíveis</h3>
              <p>
                <strong>NÃO</strong> coletamos dados sensíveis (origem racial, convicções religiosas, opiniões políticas, 
                dados genéticos, biométricos ou de saúde) sem seu consentimento explícito e específico.
              </p>

              <h2>3. Como Usamos Seus Dados</h2>

              <h3>3.1 Finalidades do Tratamento</h3>
              <p>Utilizamos seus dados pessoais para:</p>

              <h4>a) Execução de Contrato:</h4>
              <ul>
                <li>Processar sua inscrição em cursos</li>
                <li>Fornecer acesso ao conteúdo EAD</li>
                <li>Processar pagamentos e emitir notas fiscais</li>
                <li>Entregar produtos comprados no marketplace</li>
                <li>Conectar você com prestadores de serviço</li>
                <li>Emitir certificados de conclusão de cursos</li>
              </ul>

              <h4>b) Legítimo Interesse:</h4>
              <ul>
                <li>Melhorar nossos serviços e experiência do usuário</li>
                <li>Realizar análises estatísticas e de mercado</li>
                <li>Prevenir fraudes e garantir segurança</li>
                <li>Enviar comunicações sobre atualizações de serviços</li>
              </ul>

              <h4>c) Consentimento:</h4>
              <ul>
                <li>Enviar newsletters e materiais educativos</li>
                <li>Enviar ofertas personalizadas e promoções</li>
                <li>Realizar pesquisas de satisfação</li>
                <li>Compartilhar dados com parceiros (quando aplicável)</li>
              </ul>

              <h4>d) Cumprimento de Obrigação Legal:</h4>
              <ul>
                <li>Atender requisições de autoridades competentes</li>
                <li>Cumprir obrigações fiscais e contábeis</li>
                <li>Manter registros para fins de auditoria</li>
              </ul>

              <h2>4. Compartilhamento de Dados</h2>

              <h3>4.1 Com Quem Compartilhamos</h3>
              <p>Podemos compartilhar seus dados com:</p>

              <h4>a) Prestadores de Serviço (Operadores):</h4>
              <ul>
                <li><strong>Gateway de pagamento:</strong> Mercado Pago (para processar transações)</li>
                <li><strong>Plataforma de e-mail:</strong> [Nome do serviço] (para envio de comunicações)</li>
                <li><strong>Hospedagem:</strong> Vercel (para hospedar o site)</li>
                <li><strong>Analytics:</strong> Google Analytics (para análise de tráfego)</li>
                <li><strong>Automação:</strong> n8n (para workflows automatizados)</li>
              </ul>

              <h4>b) Parceiros Comerciais:</h4>
              <ul>
                <li>Fornecedores de produtos no marketplace (apenas dados necessários para entrega)</li>
                <li>Prestadores de serviço (apenas quando você solicita um serviço)</li>
                <li>Comercializadoras de energia (apenas com seu consentimento explícito)</li>
              </ul>

              <h4>c) Autoridades Legais:</h4>
              <p>
                Quando exigido por lei, ordem judicial ou requisição de autoridade competente.
              </p>

              <h3>4.2 Transferência Internacional</h3>
              <p>
                Alguns de nossos prestadores de serviço podem estar localizados fora do Brasil. 
                Nestes casos, garantimos que:
              </p>
              <ul>
                <li>O país de destino oferece nível adequado de proteção de dados</li>
                <li>Existem cláusulas contratuais específicas de proteção</li>
                <li>Você foi informado e consentiu com a transferência</li>
              </ul>

              <h2>5. Segurança dos Dados</h2>

              <h3>5.1 Medidas Técnicas</h3>
              <ul>
                <li><strong>Criptografia:</strong> Uso de SSL/TLS para transmissão de dados</li>
                <li><strong>Senhas:</strong> Armazenadas com hash bcrypt</li>
                <li><strong>Firewall:</strong> Proteção contra acessos não autorizados</li>
                <li><strong>Backups:</strong> Realizados diariamente</li>
                <li><strong>Monitoramento:</strong> 24/7 para detectar atividades suspeitas</li>
              </ul>

              <h3>5.2 Medidas Organizacionais</h3>
              <ul>
                <li>Acesso restrito aos dados apenas para funcionários autorizados</li>
                <li>Treinamento regular da equipe sobre proteção de dados</li>
                <li>Políticas internas de segurança da informação</li>
                <li>Contratos de confidencialidade com todos os colaboradores</li>
              </ul>

              <h3>5.3 Incidentes de Segurança</h3>
              <p>
                Em caso de incidente de segurança que possa acarretar risco aos seus direitos e liberdades, 
                você será notificado em até 72 horas, conforme exige a LGPD.
              </p>

              <h2>6. Retenção de Dados</h2>

              <h3>6.1 Prazos de Armazenamento</h3>
              <table className="min-w-full border">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2">Tipo de Dado</th>
                    <th className="border p-2">Prazo de Retenção</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">Dados de cadastro</td>
                    <td className="border p-2">Enquanto a conta estiver ativa + 5 anos</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Histórico de compras</td>
                    <td className="border p-2">5 anos (obrigação fiscal)</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Dados de navegação</td>
                    <td className="border p-2">12 meses</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Cookies</td>
                    <td className="border p-2">Conforme Política de Cookies</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Faturas de energia</td>
                    <td className="border p-2">Até conclusão do serviço + 1 ano</td>
                  </tr>
                </tbody>
              </table>

              <h3>6.2 Exclusão de Dados</h3>
              <p>
                Após o término do prazo de retenção, seus dados serão excluídos de forma segura e irreversível, 
                exceto quando houver obrigação legal de mantê-los.
              </p>

              <h2>7. Seus Direitos (LGPD)</h2>

              <p>De acordo com a LGPD, você tem os seguintes direitos:</p>

              <h3>7.1 Confirmação e Acesso</h3>
              <p>
                Direito de confirmar se tratamos seus dados e acessar todos os dados que temos sobre você.
              </p>

              <h3>7.2 Correção</h3>
              <p>
                Direito de solicitar a correção de dados incompletos, inexatos ou desatualizados.
              </p>

              <h3>7.3 Anonimização, Bloqueio ou Eliminação</h3>
              <p>
                Direito de solicitar a anonimização, bloqueio ou eliminação de dados desnecessários, 
                excessivos ou tratados em desconformidade.
              </p>

              <h3>7.4 Portabilidade</h3>
              <p>
                Direito de solicitar a portabilidade de seus dados a outro fornecedor de serviço, 
                em formato estruturado e interoperável.
              </p>

              <h3>7.5 Eliminação de Dados Tratados com Consentimento</h3>
              <p>
                Direito de solicitar a eliminação de dados tratados com base no seu consentimento.
              </p>

              <h3>7.6 Informação sobre Compartilhamento</h3>
              <p>
                Direito de saber com quais entidades públicas e privadas compartilhamos seus dados.
              </p>

              <h3>7.7 Revogação do Consentimento</h3>
              <p>
                Direito de revogar seu consentimento a qualquer momento, sem afetar a licitude do tratamento 
                realizado antes da revogação.
              </p>

              <h3>7.8 Como Exercer Seus Direitos</h3>
              <p>Para exercer qualquer um desses direitos, entre em contato:</p>
              <ul>
                <li><strong>E-mail:</strong> privacidade@brasilmaisenergia.com</li>
                <li><strong>E-mail do DPO:</strong> dpo@brasilmaisenergia.com</li>
                <li><strong>Formulário:</strong> <a href="/contato" className="text-secondary hover:underline">www.brasilmaisenergia.com/contato</a></li>
              </ul>
              <p>
                Responderemos sua solicitação em até <strong>15 dias</strong>, conforme estabelecido pela LGPD.
              </p>

              <h2>8. Cookies e Tecnologias Similares</h2>

              <h3>8.1 O Que São Cookies</h3>
              <p>
                Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita nosso site.
              </p>

              <h3>8.2 Tipos de Cookies que Usamos</h3>
              
              <h4>a) Cookies Essenciais (Necessários)</h4>
              <p>
                Necessários para o funcionamento básico do site. Não podem ser desativados.
              </p>

              <h4>b) Cookies de Desempenho</h4>
              <p>
                Coletam informações sobre como você usa o site para melhorar a performance.
              </p>

              <h4>c) Cookies de Funcionalidade</h4>
              <p>
                Lembram suas preferências e escolhas para personalizar sua experiência.
              </p>

              <h4>d) Cookies de Marketing</h4>
              <p>
                Usados para exibir anúncios relevantes. Requerem seu consentimento.
              </p>

              <h3>8.3 Gerenciar Cookies</h3>
              <p>
                Você pode gerenciar suas preferências de cookies através do banner de consentimento 
                ou das configurações do seu navegador.
              </p>

              <h2>9. Direitos das Crianças e Adolescentes</h2>
              <p>
                Nossos serviços não são direcionados a menores de 18 anos. Se você tem menos de 18 anos, 
                não deve usar nossos serviços sem o consentimento de seus pais ou responsáveis legais.
              </p>
              <p>
                Se tomarmos conhecimento de que coletamos dados de menores sem consentimento adequado, 
                excluiremos esses dados imediatamente.
              </p>

              <h2>10. Alterações nesta Política</h2>
              <p>
                Podemos atualizar esta Política de Privacidade periodicamente. Quando fizermos alterações 
                significativas, notificaremos você por e-mail ou através de aviso destacado em nosso site.
              </p>
              <p>
                A data da última atualização está sempre indicada no topo desta página.
              </p>

              <h2>11. Legislação e Foro</h2>
              <p>
                Esta Política de Privacidade é regida pela legislação brasileira, especialmente pela 
                Lei nº 13.709/2018 (LGPD) e pelo Marco Civil da Internet (Lei nº 12.965/2014).
              </p>
              <p>
                Qualquer disputa será resolvida no foro da comarca de [CIDADE], [ESTADO].
              </p>

              <h2>12. Autoridade Nacional de Proteção de Dados (ANPD)</h2>
              <p>
                Se você não estiver satisfeito com a forma como tratamos seus dados pessoais, 
                tem o direito de apresentar uma reclamação à Autoridade Nacional de Proteção de Dados (ANPD):
              </p>
              <ul>
                <li><strong>Site:</strong> <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">www.gov.br/anpd</a></li>
                <li><strong>E-mail:</strong> atendimento@anpd.gov.br</li>
              </ul>

              <h2>13. Contato</h2>
              <p>
                Para questões sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais:
              </p>
              <ul>
                <li><strong>Controlador:</strong> Brasil Mais Energia Ltda.</li>
                <li><strong>E-mail:</strong> privacidade@brasilmaisenergia.com</li>
                <li><strong>DPO:</strong> [NOME DO DPO]</li>
                <li><strong>E-mail do DPO:</strong> dpo@brasilmaisenergia.com</li>
                <li><strong>Telefone:</strong> (11) 3000-0000</li>
                <li><strong>Endereço:</strong> [Endereço completo]</li>
              </ul>

              <div className="bg-secondary/10 border-l-4 border-secondary p-6 mt-8">
                <p className="font-semibold mb-2">⚡ Compromisso</p>
                <p className="text-sm mb-0">
                  No Brasil Mais Energia, a proteção da sua privacidade não é apenas uma obrigação legal, 
                  mas um compromisso ético. Trabalhamos continuamente para garantir que seus dados estejam 
                  seguros e sejam tratados com o máximo respeito e transparência.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

