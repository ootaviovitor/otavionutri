# Otávio Nutrição

Landing page do nutricionista Otávio — **www.otavionutri.com.br**.

Primeira rodada: só a primeira dobra (navbar + hero) e uma página de espera para a área do paciente.
Stack: Next.js 16 (App Router), React 19, TypeScript e CSS puro com tokens.

O que já está pronto:

- Navbar com link para a área do paciente e botão de agendamento.
- Hero escuro com a paleta enviada, título em duas linhas e arco para o retrato.
- Rota `/paciente` (página de espera, pronta para receber login e downloads).
- Metadados e domínio canônico em `https://www.otavionutri.com.br`.
- Layout de 320 px a 1920 px, foco visível e respeito a `prefers-reduced-motion`.

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
  page.tsx              ← a primeira dobra (navbar + hero)
  paciente/page.tsx     ← área do paciente (por enquanto, página de espera)
  layout.tsx            ← fontes, metadados, idioma
  globals.css           ← estilos da página
  tokens.css            ← cores, tipografia, espaçamentos
  base.css              ← reset e regras base
  _components/site-nav.tsx
  icon.svg              ← favicon
lib/site.ts             ← link do botão de agendamento
public/otavio.jpg       ← sua foto (ainda não existe)
```

## O que trocar quando tiver o material

1. **Foto** — crie a pasta `public/` e salve o retrato como `public/otavio.jpg`, proporção **4:5**
   (ex.: 1200 × 1500 px), rosto no terço superior, fundo neutro.
   O componente confere o arquivo no build: se ele existir, a foto entra no arco; se não, o arco mostra
   o monograma "O". Nenhum outro ajuste é necessário — e nunca aparece imagem quebrada.
2. **Link do agendamento** — em `lib/site.ts`, troque `bookingUrl` pelo seu link (Calendly, Doctoralia, WhatsApp).
   Hoje ele aponta para `#agendar`, um âncora provisória.
3. **Textos** — em `app/page.tsx`. O título "Constância vence a dieta." é provisório e foi escrito para ser substituído.
   As etiquetas "Nutrição clínica" e "Acompanhamento individual" também.
4. **Cores** — a paleta enviada está em `app/tokens.css` (`--color-*`). O resto do CSS consome só esses tokens.
   As fontes são Instrument Serif (título) e DM Sans (texto), carregadas pelo `next/font`.

## Publicar no GitHub

```bash
git init
git add .
git commit -m "primeira dobra da landing page"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/otavio-nutri.git
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

- Conteúdo das próximas seções (sobre, como funciona, resultados, contato).
- Link real de agendamento.
- Área do paciente com login e downloads (a rota `/paciente` já existe).
