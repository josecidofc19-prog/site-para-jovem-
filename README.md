# Correndo para Deus — Estudos Bíblicos para Jovens

Site oficial de estudos bíblicos do ministério **Correndo para Deus** (AD. Ministério Correndo para Deus). 

Aplicação web **100% estática, rápida e sem necessidade de backend ou chaves de API**, desenvolvida com Vite, React, TypeScript e Tailwind CSS.

---

## 📖 Como adicionar um estudo novo

Todos os estudos do site ficam centralizados em um **único arquivo de dados**:
`src/data/estudos.ts`

Para publicar um estudo novo, **basta adicionar um novo item no início da lista `ESTUDOS`**. Nenhuma outra linha de código precisa ser alterada!

### Exemplo de estrutura:

```typescript
{
  id: 'meu-novo-estudo',
  identificador: 'Estudo 07',
  titulo: 'Título Oficial do Estudo',
  autor: 'AD. Ministério Correndo para Deus — Coop. Renan',
  categoria: 'Vida cristã', // 'Bíblia' | 'Fé' | 'Oração' | 'Vida cristã' | 'Jovens' | 'Espírito Santo'
  paginas: 10,
  data: '2024-12-01',
  icone: 'book', // 'book' | 'flame' | 'heart' | 'cross' | 'crown' | 'leaf'
  descricao: 'Breve descrição de prévia do estudo extraída fielmente do PDF.',
  assuntos: [
    'Primeiro assunto prático',
    'Segundo assunto doutrinário',
  ],
  palavrasChave: ['fé', 'oração', 'vida cristã'],
  referencias: ['Mateus 5:28', 'Provérbios 4:23'],
  arquivoPdf: '/estudos/Meu novo estudo.pdf',
  slides: [
    {
      numero: 1,
      titulo: 'Título do Slide 1',
      conteudo: ['Texto fiel do slide conforme o PDF.'],
      referencias: ['Mateus 5:28'],
    },
  ],
  destaqueFinal: '“Citação final de edificação do autor.” — Coop. Renan',
}
```

---

## 💻 Como rodar localmente

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou bun

### Passos:
1. Clone o repositório:
   ```bash
   git clone https://github.com/SEU-USUARIO/correndo-para-deus.git
   cd correndo-para-deus
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse no navegador em `http://localhost:3000`.

---

## 🚀 Como publicar no GitHub Pages (Passo a Passo)

O repositório já está configurado com `base: './'` no `vite.config.ts`, script de roteamento SPA em `public/404.html` e automação em `.github/workflows/deploy.yml`.

Para ativar a publicação automática:

1. **Envie o código para o GitHub**:
   Faça o `git push` para a branch `main` do seu repositório no GitHub.

2. **Abra as configurações do repositório**:
   No GitHub, acesse a aba **Settings** (Configurações) do seu repositório.

3. **Acesse a seção Pages**:
   No menu lateral esquerdo, clique em **Pages** (dentro de *Code and automation*).

4. **Selecione a fonte GitHub Actions**:
   No campo **Build and deployment > Source**, selecione a opção **GitHub Actions**.

5. **Pronto!**:
   A cada `git push` na branch `main`, a ação do GitHub Actions compilará e publicará o site automaticamente na URL `https://seu-usuario.github.io/seu-repositorio/`.

---

## 🎨 Características do Projeto

- **Fidelidade Bíblica Total**: Não resume, não parafraseia e não altera os estudos originais.
- **100% Estático**: Sem banco de dados, sem backend e sem consumo de IA externa.
- **Design Sóbrio e Jovem**: Paleta baseada no azul-escuro (`#283A8F`) e amarelo (`#FFFF00`) com fonte Montserrat.
- **Tema Claro e Escuro**: Alternância acessível com persistência local.
- **Foco Mobile**: Otimizado para leitura confortável no celular e compartilhamento direto no WhatsApp.
- **SEO & Redes Sociais**: Meta tags OpenGraph, Twitter Cards, imagem de compartilhamento 1200x630 e sitemap.xml.
