import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre — Musical Cast",
  description:
    "Criado em abril de 2015 por Rafael Nogueira, o Musical Cast é o primeiro podcast brasileiro sobre teatro musical. Mais de 270 episódios e 1000 musicais do Brasil, da Broadway e do West End.",
  alternates: { canonical: "https://www.musicalcast.com.br/sobre" },
  openGraph: {
    title: "Sobre — Musical Cast",
    description:
      "Criado em abril de 2015 por Rafael Nogueira, o Musical Cast é o primeiro podcast brasileiro sobre teatro musical.",
    url: "https://www.musicalcast.com.br/sobre",
    type: "website",
  },
};

const eyebrow: React.CSSProperties = {
  color: "var(--gold)",
  fontFamily: "var(--font-display), sans-serif",
  fontWeight: 700,
  fontSize: 14,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  marginBottom: 12,
};

const prose: React.CSSProperties = {
  fontSize: 18,
  lineHeight: 1.75,
  color: "rgba(255,255,255,0.86)",
  marginBottom: 22,
};

export default function SobrePage() {
  return (
    <main
      className="container"
      style={{ maxWidth: 760, paddingTop: 72, paddingBottom: 88 }}
    >
      <p style={eyebrow}>Sobre</p>
      <h1
  style={{
    fontFamily: "var(--font-display), sans-serif",
    fontSize: 40,
    fontWeight: 800,
    lineHeight: 1.15,
    marginBottom: 28,
  }}
>
  A história do <span style={{ color: "#F4B53F" }}>Musical</span> Cast
</h1>

      <p style={prose}>
        Criado em abril de 2015 por Rafael Nogueira, o Musical Cast nasceu da
        vontade de sair um pouco do óbvio dos musicais de sempre e poder falar e
        mostrar que o mundo do teatro musical tem uma vasta quantidade de
        material que muitas pessoas não conheciam e precisavam conhecer. Assim,
        reuniu várias pessoas de diferentes partes do Brasil para falar sobre a
        nossa paixão: teatro musical.
      </p>

      <p style={prose}>
        Depois de todo esse tempo, o Musical Cast se consolidou no meio teatral
        como uma importante fonte de informação e também de análise, sempre de
        uma forma descontraída e alegre. Já somamos mais de 270 episódios e
        abordamos mais de 1000 musicais, incluindo do Brasil, da Broadway e do
        West End. São horas e horas de muito papo sobre musicais.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          marginTop: 44,
          borderTop: "1px solid var(--line)",
          paddingTop: 36,
        }}
      >
        {[
          { n: "2015", l: "No ar desde" },
          { n: "+270", l: "Episódios" },
          { n: "+1000", l: "Musicais abordados" },
        ].map((s) => (
          <div key={s.l} style={{ flex: "1 1 150px" }}>
            <div
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontSize: 34,
                fontWeight: 800,
                color: "var(--gold)",
                lineHeight: 1,
              }}
            >
              {s.n}
            </div>
            <div
              style={{
                marginTop: 8,
                fontSize: 14,
                color: "rgba(255,255,255,0.7)",
              }}
            >
              {s.l}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 48 }}>
        <a href="/episodios" className="nav-cta">
          Ouça os episódios
        </a>
      </div>
    </main>
  );
}
