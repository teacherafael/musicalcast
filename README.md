# Musical Cast — site

Site do Musical Cast em Next.js, pronto pra publicar na Vercel. Os episódios
são puxados automaticamente do feed RSS do podcast (Spotify for Podcasters /
Anchor) — quando você publica um episódio novo, ele aparece sozinho no site.

## O que já vem pronto

- Página inicial com apresentação, "onde ouvir", último episódio e os mais recentes
- Página `/episodios` com a lista completa e busca por título/assunto
- Uma página própria por episódio (`/episodios/...`) com player de áudio — ótimo pro Google indexar
- Seção da equipe, bloco do Clube do Musical / Catarse e rodapé com contato
- Identidade visual azul + dourado, responsivo no celular
- SEO automático (sitemap.xml, robots.txt, prévia ao compartilhar links)

## Como publicar na Vercel (passo a passo)

1. Crie um repositório no GitHub e suba esta pasta (sem `node_modules` e `.next`).
2. Acesse https://vercel.com, faça login com o GitHub e clique em **Add New → Project**.
3. Selecione o repositório. A Vercel detecta o Next.js sozinho — é só clicar em **Deploy**.
4. Quando terminar, em **Settings → Domains**, adicione `www.musicalcast.com.br`
   e siga as instruções pra apontar o DNS pra Vercel.

A cada `git push`, a Vercel publica a nova versão automaticamente.

## Como rodar no seu computador (opcional)

Precisa do Node.js 20.9 ou mais novo.

```bash
npm install
npm run dev
```

Depois abra http://localhost:3000

## Como editar o conteúdo

Quase tudo que você vai querer trocar está em **`lib/config.ts`**:

- `RSS_URL` — o endereço do feed RSS (já está preenchido)
- `PLATFORMS` — os links de Spotify, Apple, YouTube etc. (confira/atualize)
- `TEAM` — os integrantes da equipe e seus Instagrams
- `SUPPORT` — o link do Catarse e o texto do Clube do Musical
- `CONTACT` — e-mail e redes sociais

### Fotos da equipe

Por enquanto a equipe aparece com as iniciais. Pra colocar foto:
1. salve a imagem em `public/equipe/` (ex.: `public/equipe/rafael.jpg`);
2. em `lib/config.ts`, adicione `photo: "/equipe/rafael.jpg"` no integrante.

### Cores

As cores ficam todas no começo do arquivo `app/globals.css`, em `:root`
(`--navy`, `--gold` etc.). Pra mudar o tom do site, é só trocar esses valores.

## Como o RSS funciona

O site lê o feed no máximo a cada 1 hora (`revalidate`). Ou seja: episódio novo
publicado no Spotify aparece no site em até ~1 hora, sem você fazer nada.
A lógica de leitura está em `lib/podcast.ts`.
