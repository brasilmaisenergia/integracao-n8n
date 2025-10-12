# Documentação Técnica - Brasil Mais Energia

## 1. Visão Geral

Este documento fornece uma visão geral da arquitetura, tecnologias e componentes do site Brasil Mais Energia.

## 2. Tecnologias Utilizadas

-   **Framework:** Next.js 15.5.4 (com Turbopack)
-   **Linguagem:** TypeScript
-   **Estilização:** Tailwind CSS 4.1.14
-   **Hospedagem:** Vercel
-   **Controle de Versão:** Git / GitHub
-   **Automação:** n8n

## 3. Estrutura do Projeto

```
/app
  /cursos
    page.tsx       # Página de Cursos
  /marketplace
    page.tsx       # Página do Marketplace
  /para-sua-casa
    page.tsx       # Página Para Sua Casa (com formulário)
  /para-sua-empresa
    page.tsx       # Página Para Sua Empresa (com formulário)
  globals.css      # Estilos globais (Tailwind)
  layout.tsx       # Layout principal
  page.tsx         # Página inicial (Home)
/components
  Footer.tsx       # Componente do rodapé
  Navbar.tsx       # Componente da barra de navegação
  VoltMascot.tsx   # Componente do mascote Volt
/public
  /images          # Imagens (logo, mascote, etc)
/tailwind.config.ts  # Configuração do Tailwind CSS
/next.config.ts      # Configuração do Next.js
/package.json        # Dependências e scripts
```

## 4. Componentes Principais

-   **Navbar:** Barra de navegação responsiva com menus dropdown para os stakeholders.
-   **Footer:** Rodapé completo com links e informações de contato.
-   **VoltMascot:** Componente do mascote animado que aparece em páginas específicas para dar dicas e interagir com o usuário.
-   **Formulários:** Formulários reativos em "Para Sua Casa" e "Para Sua Empresa" que enviam os dados para webhooks do n8n.

## 5. Integração com n8n

Os formulários do site são integrados com o n8n através de webhooks. Quando um usuário preenche e envia um formulário, os dados são enviados para a URL do webhook correspondente no n8n para processamento e automação.

-   **Webhook Casa:** `https://brasilmaisenergia.app.n8n.cloud/webhook/formulario-casa`
-   **Webhook Empresa:** `https://brasilmaisenergia.app.n8n.cloud/webhook/formulario-empresa`

**Importante:** Estas são as URLs de desenvolvimento. Para produção, substitua pelas URLs corretas do seu workflow no n8n.

## 6. Próximos Passos

Consulte o arquivo `PROXIMOS_PASSOS.md` para ver o roadmap de desenvolvimento e futuras implementações.

