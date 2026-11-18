import Image from "next/image";
import { site } from "@/lib/site";
import { ThemePicker } from "./theme-picker";

export default function HomePage() {
  return (
    <div className="stage">
      <header className="stage__header">
        <Image
          className="brand"
          src="/images/simbolo-nutri.png"
          width={2001}
          height={1601}
          alt="Otávio Costa Garcia — Nutricionista Esportivo"
          loading="eager"
          sizes="(min-width: 48rem) 64px, 56px"
        />
        <ThemePicker />
      </header>

      <main className="stage__main">
        <div className="stage__copy">
          <h1>Site em manutenção</h1>

          <p className="note">
            Enquanto isso, você pode conversar sobre seus objetivos antes de
            agendar uma consulta.
          </p>

          <a className="cta" href={site.preConsultationUrl}>
            <span className="cta__label">Quero uma pré-consulta gratuita</span>
            <span className="cta__icon" aria-hidden="true">
              <span className="cta__arrow" />
            </span>
          </a>
        </div>

        <Image
          className="art"
          src="/images/corredores-pista.webp"
          width={1024}
          height={1024}
          alt=""
          loading="eager"
          sizes="(min-width: 48rem) and (max-height: 35rem) min(46vw, 64svh), (min-width: 81rem) 36rem, (min-width: 48rem) 46vw, (min-width: 29rem) 26rem, calc(100vw - 40px)"
        />
      </main>

      <footer className="stage__foot">
        <span>Otávio Costa Garcia · Nutricionista Esportivo</span>
        <span>CRN 11 - 5161</span>
      </footer>
    </div>
  );
}
