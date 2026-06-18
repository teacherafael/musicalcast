import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: "center", padding: "120px 0" }}>
      <div className="container">
        <div className="eyebrow" style={{ justifyContent: "center" }}>Erro 404</div>
        <h1 className="section-title">Essa página saiu de cartaz</h1>
        <p className="section-lead" style={{ margin: "0 auto 28px" }}>
          Não encontramos o que você procurava. Que tal voltar pro começo do espetáculo?
        </p>
        <Link href="/" className="btn btn-primary">Voltar para o início</Link>
      </div>
    </section>
  );
}
