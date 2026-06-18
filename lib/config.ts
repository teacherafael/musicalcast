// ============================================================================
//  CONFIGURAÇÃO DO SITE — edite este arquivo pra mudar o conteúdo
// ============================================================================
//  Quase tudo que você vai querer trocar (links, equipe, contato) está aqui.
//  Não precisa mexer no resto do código.
// ============================================================================

// URL do feed RSS do podcast (Spotify for Podcasters / Anchor)
export const RSS_URL = "https://anchor.fm/s/11243f234/podcast/rss";

// Endereço final do site (usado pra SEO / compartilhamento)
export const SITE_URL = "https://www.musicalcast.com.br";

export const SITE = {
  name: "Musical Cast",
  tagline: "O primeiro podcast sobre musicais do Brasil",
  description:
    "Desde 2015, bate-papos divertidos e informativos sobre o universo do teatro musical e produções da Broadway, do West End, do Brasil e do cinema.",
};

// "Onde ouvir" — confira/atualize os links conforme suas páginas oficiais.
// Pra esconder uma plataforma, é só apagar a linha dela.
export const PLATFORMS: { name: string; href: string; icon: string }[] = [
  { name: "Spotify", href: "https://open.spotify.com/show/SEU_ID_AQUI", icon: "spotify" },
  { name: "Apple Podcasts", href: "https://podcasts.apple.com/br/podcast/musical-cast/id994604243", icon: "apple" },
  { name: "YouTube", href: "https://www.youtube.com/c/MusicalCast", icon: "youtube" },
  { name: "Deezer", href: "https://www.deezer.com/br/show/SEU_ID_AQUI", icon: "deezer" },
  { name: "Amazon Music", href: "https://music.amazon.com.br/podcasts/SEU_ID_AQUI", icon: "amazon" },
];

// Link de apoio (Catarse) e texto do Clube do Musical
export const SUPPORT = {
  catarseUrl: "https://www.catarse.me/musicalcast",
  clubeTexto:
    "Com o projeto de assinatura no Catarse, você ajuda a aprimorar os episódios e a manter a frequência e a qualidade do podcast. Além disso, entra num grupo exclusivo no WhatsApp pra participar do \"Clube do Musical\": um encontro online mensal pra debater um musical escolhido — e que ainda vira episódio!",
};

// Equipe. Pra colocar foto: salve a imagem em /public/equipe/ (ex.: rafael.jpg)
// e preencha o campo "photo" com "/equipe/rafael.jpg". Sem foto, aparecem as iniciais.
export const TEAM: { name: string; role: string; instagram: string; photo?: string }[] = [
  { name: "Rafael Nogueira", role: "Criador, produtor e apresentador", instagram: "rafamusicalcast" },
  { name: "Letícia Saggese", role: "Co-apresentadora e criadora de conteúdo", instagram: "msletsaggese" },
  { name: "Diego Galatti", role: "Bancada e criador de conteúdo", instagram: "diegogalatti" },
  { name: "Gabe Queiroz", role: "Bancada e criador de conteúdo", instagram: "queiroz.gabe" },
  { name: "Julio Velloso", role: "Criador de conteúdo", instagram: "vellosojulio" },
  { name: "Bruno Bernardo", role: "Criador de conteúdo", instagram: "brunoabernardo" },
  { name: "Bruno Leão", role: "Bancada e criador de conteúdo", instagram: "brucleao" },
];

export const SPECIAL_GUESTS = ["Alene Botareli", "Alexandre Furtado", "Glauver Souza"];

export const CONTACT = {
  email: "musicalcastbr@gmail.com",
  instagram: "https://instagram.com/musicalcast",
  facebook: "https://facebook.com/musicalcast",
  youtube: "https://www.youtube.com/c/MusicalCast",
};
