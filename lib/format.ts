// Funções utilitárias de formatação e segurança.

// Transforma um texto em "slug" pra usar na URL do episódio.
// Ex.: "A Chorus Line completa 50 anos!" -> "a-chorus-line-completa-50-anos"
export function slugify(text: string): string {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80)
    .replace(/^-|-$/g, "");
}

// Formata a data de publicação em português. Ex.: "13 de junho de 2025"
export function formatDate(input: string | undefined): string {
  if (!input) return "";
  const d = new Date(input);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

// Versão curta da data. Ex.: "13 jun 2025"
export function formatDateShort(input: string | undefined): string {
  if (!input) return "";
  const d = new Date(input);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" }).replace(".", "");
}

// Normaliza a duração do feed (pode vir como "3600", "58:20" ou "1:02:33")
// e devolve algo legível: "1h02", "58min".
export function formatDuration(input: string | number | undefined): string {
  if (input === undefined || input === null || input === "") return "";
  let totalSeconds = 0;
  const str = String(input).trim();

  if (str.includes(":")) {
    const parts = str.split(":").map((p) => parseInt(p, 10) || 0);
    if (parts.length === 3) totalSeconds = parts[0] * 3600 + parts[1] * 60 + parts[2];
    else if (parts.length === 2) totalSeconds = parts[0] * 60 + parts[1];
    else totalSeconds = parts[0];
  } else {
    totalSeconds = parseInt(str, 10) || 0;
  }

  if (totalSeconds <= 0) return "";
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  if (hours > 0) return `${hours}h${String(minutes).padStart(2, "0")}`;
  return `${minutes}min`;
}

// Remove todas as tags HTML e devolve só o texto (usado nos cards e resumos).
export function stripHtml(html: string | undefined): string {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

// Corta o texto num tamanho máximo, sem cortar palavra no meio.
export function truncate(text: string, max = 180): string {
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/\s+\S*$/, "") + "…";
}

// Sanitização leve do HTML da descrição antes de exibir na página do episódio.
// Remove scripts/styles, atributos de evento (onclick etc.) e URLs javascript:.
export function sanitizeHtml(html: string | undefined): string {
  if (!html) return "";
  return html
    .replace(/<\s*(script|style|iframe|object|embed)[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi, "")
    .replace(/<\s*(script|style|iframe|object|embed)[^>]*\/?>/gi, "")
    .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/(href|src)\s*=\s*("|')\s*javascript:[^"']*\2/gi, "$1=$2#$2");
}
