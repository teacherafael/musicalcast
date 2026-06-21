/** @type {import('next').NextConfig} */

// Só liga a CSP em produção. Em dev o Turbopack precisa de eval pra recarregar,
// e a CSP estrita travaria o npm run dev.
const isProd = process.env.NODE_ENV === "production";

// Content-Security-Policy montada por partes pra ficar legível.
// Imagens e áudio vêm de servidores externos (Anchor/Spotify), por isso https: liberado.
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "img-src 'self' data: https:",
  "media-src 'self' https:",
  "font-src 'self' https://fonts.gstatic.com",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "script-src 'self' 'unsafe-inline'",
  "connect-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
];

// Adiciona a CSP só quando está em produção.
if (isProd) {
  securityHeaders.unshift({ key: "Content-Security-Policy", value: csp });
}

const nextConfig = {
  // As capas dos episódios vêm de servidores externos (Anchor/Spotify).
  // Usamos a tag <img> normal, então não precisa configurar domínios aqui.

  // Mantém o jsdom (usado pelo DOMPurify no servidor) fora do bundle do Next.
  serverExternalPackages: ["isomorphic-dompurify"],

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;