import Link from "next/link";
import { Portrait } from "./_components/portrait";
import { SiteNav } from "./_components/site-nav";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <main>
      <div className="shell">
        <section className="panel hero" id="agendar">
          <SiteNav current="inicio" />

          <div className="hero__body">
            <div className="hero__copy">
              <p className="tags">
                <span className="tag">Nutrição clínica</span>
                <span className="tag">Acompanhamento individual</span>
              </p>

              <h1 className="hero__title">
                Constância
                <span className="hero__title-accent">vence a dieta.</span>
              </h1>

              <p className="hero__lede">
                Plano alimentar individual, ajustado à sua rotina a cada consulta.
              </p>

              <div className="hero__actions">
                <Link className="button" href={site.bookingUrl}>
                  Agendar minha consulta
                </Link>
              </div>
            </div>

            <div className="hero__media">
              <span className="hero__halo" aria-hidden="true" />
              <Portrait />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
