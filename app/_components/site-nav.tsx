import Link from "next/link";

type SiteNavProps = {
  /** Label of the page the visitor is on, highlighted in the menu. */
  current?: "inicio" | "paciente";
  /** Hides the Início link on the patient page. */
  compact?: boolean;
};

export function SiteNav({ current = "inicio", compact = false }: SiteNavProps) {
  return (
    <header className="nav">
      <Link className="wordmark" href="/" aria-label="Otávio Nutrição — página inicial">
        <span className="wordmark__mark" aria-hidden="true">
          O
        </span>
        <span className="wordmark__text">
          <span className="wordmark__name">Otávio</span>
          <span className="wordmark__role">nutrição clínica</span>
        </span>
      </Link>

      <nav className="nav__links" aria-label="Navegação principal">
        {!compact && (
          <Link
            href="/"
            className={`nav__link${current === "inicio" ? " is-current" : ""}`}
            aria-current={current === "inicio" ? "page" : undefined}
          >
            Início
          </Link>
        )}
        <Link
          href="/paciente"
          className={`nav__link nav__link--patient${current === "paciente" ? " is-current" : ""}`}
          aria-current={current === "paciente" ? "page" : undefined}
        >
          Área do paciente
        </Link>
        <Link className="button button--small nav__cta" href="/#agendar">
          <span className="nav__cta-full">Agendar consulta</span>
          <span className="nav__cta-short">Agendar</span>
        </Link>
      </nav>
    </header>
  );
}
