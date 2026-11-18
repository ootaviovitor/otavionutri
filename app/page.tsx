import Image from "next/image";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <main className="stage">
      <div className="stage__stack">
        <Image
          className="brand"
          src="/images/logo-otavio-costa-garcia.png"
          width={2001}
          height={902}
          alt="Otávio Costa Garcia — Nutricionista Esportivo"
          priority
        />

        <Image
          className="art"
          src="/images/dois-corredores-em-movimento.png"
          width={1536}
          height={1024}
          alt=""
          priority
          sizes="(max-width: 60rem) 80vw, 27vw"
        />

        <h1 className="visually-hidden">Estamos melhorando este ambiente</h1>

        <p className="note">
          O site está em manutenção. Enquanto isso, você pode conversar sobre seus
          objetivos antes de agendar uma consulta.
        </p>

        <a className="cta" href={site.preConsultationUrl}>
          Quero uma pré-consulta gratuita
        </a>
      </div>

      <footer className="stage__foot">
        Otávio Costa Garcia | Nutricionista Esportivo · CRN 11 - 5161
      </footer>
    </main>
  );
}
