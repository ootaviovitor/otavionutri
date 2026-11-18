# Otávio Nutrição

Página única do nutricionista Otávio Costa Garcia — **www.otavionutri.com.br**.

Página de manutenção com a marca, o aviso **"Site em manutenção"**,
a arte dos corredores e o botão **"Quero uma pré-consulta gratuita"**, que abre o chat no Typebot.

Stack: Next.js 16 (App Router), React 19, TypeScript e CSS puro com tokens.

## Rodar localmente

Requer Node 20.9.0 ou mais recente.

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
  layout.tsx                    ← fonte, metadados, idioma e tema inicial
  theme-picker.tsx              ← seletor de tema no cabeçalho
  globals.css                   ← composição responsiva, foco e interação do botão
  tokens.css                    ← paleta, texto e movimento da tela
  base.css                      ← estilos básicos
  icon.svg                      ← favicon
lib/site.ts                     ← nome e link do chat de pré-consulta
public/images/
  simbolo-nutri.png             ← símbolo em uso (2001 × 1601, fundo transparente)
  logo-otavio-costa-garcia.png   ← logotipo completo original
  corredores-pista.webp         ← arte em uso (1024 × 1024, fundo transparente)
  dois-corredores-em-movimento.png ← arte original com a frase
```

## O que trocar

1. **Link do chat** — em `lib/site.ts`, `preConsultationUrl`. Hoje aponta para
   `https://typebot.co/pre-consulta-drotavio`.
2. **Arte** — a versão em uso está em `public/images/corredores-pista.webp`.
   Ao substituí-la, atualize o caminho e as dimensões em `app/page.tsx` conforme necessário.
3. **Símbolo** — está em `public/images/simbolo-nutri.png`. Ao substituir a imagem, atualize
   o caminho e as dimensões em `app/page.tsx` conforme necessário.
4. **Textos** — o aviso, a frase de apoio, o botão e o rodapé estão em `app/page.tsx`.
   O título e a descrição para busca e redes ficam em `app/layout.tsx`.
5. **Cores** — a paleta está em `app/tokens.css`. Fundo `#EAE8E4`, tinta `#14100B`
   e laranja da marca `#CC8C44`.

## Como a tela se comporta

- A partir de 48 rem, o texto e a arte ficam lado a lado.
- Em telas estreitas, o aviso e o link aparecem antes da arte. O rótulo do botão pode quebrar
  em linhas e o crédito acompanha a altura do conteúdo.
- O seletor no cabeçalho usa os ícones de monitor, sol e lua para **Sistema**, **Claro** e
  **Escuro**. Sistema acompanha a preferência do dispositivo. A escolha manual é salva no navegador.
- O botão é preto no claro e amarelo no escuro. No escuro, um reflexo cruza a superfície
  ao interagir. Com movimento reduzido, a resposta aparece na cor e no foco.

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
