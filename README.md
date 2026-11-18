# Otávio Nutrição

Página única do nutricionista Otávio — **www.otavionutri.com.br**.

Uma tela só: a foto de fundo, o nome nas metatags e um botão — **"Quero uma pré-consulta gratuita"** — que abre
o chat de pré-consulta no Typebot. Sem navbar, sem rolagem, sem formulário.

Stack: Next.js 16 (App Router), React 19, TypeScript e CSS puro com tokens.

## Rodar localmente

Requer Node 20 ou mais recente.

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

Outros comandos: `npm run build` e `npm start`.

## Estrutura

```
app/
  page.tsx                   ← a tela inteira (imagem de fundo + botão)
  layout.tsx                 ← fonte, metadados, idioma
  globals.css                ← estilos da tela, incluindo o véu sobre a foto
  tokens.css                 ← cores, tipografia, espaçamentos
  base.css                   ← reset, foco visível, movimento reduzido
  icon.svg                   ← favicon
lib/site.ts                  ← link do chat de pré-consulta
public/images/
  corredor-linhas-de-pista.png ← foto de fundo (1536 × 1024)
```

## O que trocar

1. **Link do chat** — em `lib/site.ts`, `preConsultationUrl`. Hoje aponta para
   `https://typebot.co/pre-consulta-drotavio`.
2. **Foto** — substitua `public/images/corredor-linhas-de-pista.png` mantendo o caminho (ou atualize o `src`
   em `app/page.tsx`). Formato paisagem ajuda: a imagem é recortada por `object-fit: cover`.
   **Atenção:** o arquivo atual tem um texto de template ("Estamos melhorando este ambiente") no terço
   esquerdo. O `.stage__veil` em `app/globals.css` afunda essa área até ficar imperceptível, mas o ideal é
   trocar por uma versão sem o texto.
3. **Textos** — o botão está em `app/page.tsx`; o título invisível (leitor de tela) também.
   O título e a descrição para busca/redes ficam em `app/layout.tsx`.
4. **Cores** — a paleta está em `app/tokens.css` (`--color-*`). O resto do CSS consome só esses tokens.

## Como a tela se comporta

- **Desktop:** foto inteira, com o terço esquerdo escurecido; o botão fica no centro.
- **Celular:** o recorte mostra a corredora e o botão desce para a base, acima da margem de segurança.
- O botão cabe em uma linha de 320 px a 1920 px, o foco do teclado é visível e quem pede
  `prefers-reduced-motion` não vê animação de entrada.

## Publicar no GitHub

```bash
git init
git add .
git commit -m "splash com foto e botão de pré-consulta"
git branch -M main
git remote add origin https://github.com/ootaviovitor/otavionutri.git
git push -u origin main
```

## Publicar na Vercel

1. Em [vercel.com/new](https://vercel.com/new), importe o repositório do GitHub.
2. A Vercel detecta o Next.js sozinha — não precisa mudar build nem output.
3. Deploy. O site fica no ar em um endereço `*.vercel.app`.

## Domínio www.otavionutri.com.br

1. No projeto da Vercel: **Settings → Domains → Add**, adicione `www.otavionutri.com.br` e também `otavionutri.com.br`.
2. Escolha o `www` como domínio principal; a Vercel cria o redirecionamento do domínio sem `www`.
3. No Registro.br (ou onde o domínio foi registrado), aponte o DNS com os registros que a Vercel mostrar na tela.
   Normalmente são:
   - `www` → **CNAME** `cname.vercel-dns.com`
   - `@` (apex) → **A** `76.76.21.21`
4. Espere a propagação (de minutos a algumas horas). O certificado HTTPS é emitido pela própria Vercel.
5. Se for usar e-mail no domínio depois, prefira configurar o DNS pelo nameserver da Vercel para não misturar com os registros MX.

## Próximos passos

- Foto sem o texto de template.
- Destino depois do chat: página de obrigado, WhatsApp ou agenda.
- Se a página crescer, dividir em seções (sobre, como funciona, resultados, contato).
