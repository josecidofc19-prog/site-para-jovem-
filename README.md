# Correndo para Deus — Estudos Bíblicos

Site oficial de estudos bíblicos do ministério **Correndo para Deus** (AD. Ministério Correndo para Deus). 

Aplicação web **100% estática, rápida e sem necessidade de backend ou chaves de API**, desenvolvida com Vite, React, TypeScript e Tailwind CSS.

---

## 📖 Como adicionar um estudo novo

Para adicionar um novo estudo ao site:

1. **Copie o arquivo PDF original** diretamente para a pasta:
   `public/estudos/meu-novo-estudo.pdf`
   *(Importante: copie o arquivo original diretamente, sem abrir nem salvar de novo no computador para preservar sua integridade).*

2. **Acrescente o item na lista** em `src/data/studies.ts`:
   ```typescript
   {
     id: 'meu-novo-estudo',
     title: 'Título Oficial do Estudo',
     author: 'AD. Ministério Correndo para Deus - Coop. Renan',
     pageCount: 15,
     pdfFileName: 'meu-novo-estudo.pdf',
     // Campos opcionais (preenchidos SÓ quando informados):
     category: 'Fé',
     description: 'Descrição oficial se houver.',
     bibleReferences: ['João 3:16', 'Romanos 8:28'],
   }
   ```

---

## 🚀 Como publicar no GitHub Pages (3 a 5 passos)

1. **Faça o commit e envie para o GitHub**:
   ```bash
   git add .
   git commit -m "Publicação do site Correndo para Deus"
   git push origin main
   ```

2. **Abra o repositório no GitHub**:
   Acesse a aba **Settings** (Configurações) do seu repositório.

3. **Acesse as configurações do GitHub Pages**:
   No menu lateral esquerdo, clique em **Pages**.

4. **Selecione a fonte de publicação**:
   Em **Build and deployment** > **Source**, selecione a opção **GitHub Actions**.

5. **Pronto!**:
   O fluxo de automação `.github/workflows/deploy.yml` fará o build estático e publicará o site automaticamente em segundos.

---

## 💻 Como rodar localmente

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou bun

### Passos:
1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Abra no navegador:
   `http://localhost:3000`
