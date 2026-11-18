import Image from "next/image";
import { site } from "@/lib/site";

function ChatIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M12 3.6c-4.6 0-8.4 3.2-8.4 7.2 0 1.4.5 2.8 1.4 3.9L3.6 20l4.9-1.9c1.1.5 2.3.8 3.5.8 4.6 0 8.4-3.2 8.4-7.2S16.6 3.6 12 3.6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="8.6" cy="10.9" r="1.15" fill="currentColor" />
      <circle cx="12" cy="10.9" r="1.15" fill="currentColor" />
      <circle cx="15.4" cy="10.9" r="1.15" fill="currentColor" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main className="stage">
      <Image
        className="stage__image"
        src="/images/corredor-linhas-de-pista.png"
        alt=""
        fill
        priority
        sizes="100vw"
      />
      <div className="stage__veil" aria-hidden="true" />

      <div className="stage__content">
        <h1 className="visually-hidden">
          Pré-consulta gratuita com o nutricionista Otávio
        </h1>

        <a className="cta" href={site.preConsultationUrl}>
          <span className="cta__icon">
            <ChatIcon />
          </span>
          <span>Quero uma pré-consulta gratuita</span>
        </a>
      </div>
    </main>
  );
}
