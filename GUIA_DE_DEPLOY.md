# Guia de Deploy - Brasil Mais Energia

Este guia detalha os passos para fazer o deploy do site Brasil Mais Energia no Vercel a partir do código-fonte.

## Pré-requisitos

- Conta no [GitHub](https://github.com)
- Conta no [Vercel](https://vercel.com) (conectada ao GitHub)
- `git` e `node.js` instalados localmente

## Passos para o Deploy

1.  **Download e Extração do Código:**
    -   Faça o download do arquivo `brasil-mais-energia-website-final.zip`.
    -   Extraia o conteúdo em uma pasta no seu computador.

2.  **Inicializar Repositório Git e Fazer Push:**
    -   Abra o terminal na pasta do projeto.
    -   Execute os seguintes comandos para inicializar um repositório Git, fazer o commit e enviar para o GitHub:

    ```bash
    git init
    git add .
    git commit -m "Deploy inicial do site Brasil Mais Energia"
    git branch -M main
    git remote add origin <URL_DO_SEU_REPOSITORIO_NO_GITHUB>
    git push -u origin main
    ```

3.  **Deploy no Vercel:**
    -   Acesse sua conta no Vercel.
    -   Clique em "Add New..." -> "Project".
    -   Selecione o repositório do GitHub que você acabou de criar.
    -   O Vercel irá detectar automaticamente que é um projeto Next.js e configurar o build.
    -   Clique em "Deploy".

4.  **Configurar Webhooks do n8n:**
    -   Após o deploy, o Vercel fornecerá a URL final do seu site (ex: `https://seu-projeto.vercel.app`).
    -   No código-fonte, nos arquivos `app/para-sua-casa/page.tsx` e `app/para-sua-empresa/page.tsx`, substitua as URLs dos webhooks do n8n pelas suas URLs de produção.
    -   Faça um novo commit e push para o GitHub. O Vercel fará o deploy automaticamente.

## Documentação Adicional

-   **Documentação Técnica:** `DOCUMENTACAO_TECNICA.md` (inclusa no ZIP)
-   **Próximos Passos:** `PROXIMOS_PASSOS.md` (incluso no ZIP)

