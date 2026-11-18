# Otávio Nutrição

Página única do nutricionista Otávio Costa Garcia — **www.otavionutri.com.br**.

Uma tela só, sobre papel claro: a logo centralizada, a arte dos dois corredores, uma frase, o botão
**"Quero uma pré-consulta gratuita"** — que abre o chat de pré-consulta no Typebot — e uma linha de
crédito no rodapé. Sem navbar, sem formulário, sem rolagem em pé.

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
  page.tsx                      ← a tela inteira (logo, arte, frase, botão)
  layout.tsx                    ← fonte, metadados, idioma, themeColor
  globals.css                   ← estilos da tela (papel claro, pilha centralizada)
  tokens.css                    ← cores, tipografia, espaçamentos
  base.css                      ← reset, foco visível, movimento reduzido
  icon.svg                      ← favicon
lib/site.ts                     ← nome e link do chat de pré-consulta
public/images/
  logo-otavio-costa-garcia.png  ← logo (2001 × 902, laranja sobre transparente)
  dois-corredores-em-movimento.png ← arte com a frase (1536 × 1024, fundo transparente)
```

## O que trocar

1. **Link do chat** — em `lib/site.ts`, `preConsultationUrl`. Hoje aponta para
   `https://typebot.co/pre-consulta-drotavio`.
2. **Arte** — substitua `public/images/dois-corredores-em-movimento.png` mantendo o caminho e as
   proporções (ou atualize `width`/`height` em `app/page.tsx`). O arquivo é um recorte com fundo
   transparente: a frase "Estamos melhorando este ambiente" faz parte da imagem, por isso não há
   texto solto por cima dela. O `<h1>` existe só para leitores de tela e buscadores.
3. **Logo** — mesma ideia: `public/images/logo-otavio-costa-garcia.png`, com fundo transparente.
4. **Textos** — a frase de apoio e o rótulo do botão estão em `app/page.tsx`; o crédito do rodapé
   também. O título e a descrição para busca/redes ficam em `app/layout.tsx`.
5. **Cores** — a paleta do projeto está em `app/tokens.css`. Esta tela usa um papel claro próprio
   (`--stage-*` no topo de `app/globals.css`): fundo `#EAE8E4`, tinta `#14100B`, laranja da marca
   `#CC8C44`.

## Como a tela se comporta

- **Desktop:** pilha centralizada — logo, arte, frase, botão — com o crédito no rodapé da tela.
- **Tablet e celular:** a arte encolhe para 80% da largura (até 360 px) e a frase ganha largura menor
  para manter poucas linhas.
- **Celular na horizontal / janelas baixas** (`max-height: 640px`): a pilha compacta, a arte usa a
  altura disponível e o crédito entra no fluxo, para nada ficar cortado.
- O botão cabe em uma linha de 320 px a 2560 px, o texto do botão é escuro sobre o laranja (contraste
  6,4:1; branco sobre esse laranja ficaria em 2,6:1), o foco do teclado é visível e quem pede
  `prefers-reduced-motion` não vê animação de entrada.

## Publicar no GitHub

```bash
git init
git add .
git commit -m "splash com a arte dos corredores e botão de pré-consulta"
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

- Destino depois do chat: página de obrigado, WhatsApp ou agenda.
- Quando o site voltar, trocar esta tela pela página completa (sobre, como funciona, resultados, contato).
