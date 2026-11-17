import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "../_components/site-nav";

export const metadata: Metadata = {
  title: "Área do paciente",
  description: "Materiais, orientações e downloads para pacientes de Otávio Nutrição.",
  robots: { index: false, follow: false },
};

export default function PatientAreaPage() {
  return (
    <main>
      <div className="shell">
        <section className="panel doc">
          <SiteNav current="paciente" compact />

          <div className="doc__body">
            <h1 className="doc__title">Área do paciente</h1>
            <p className="doc__text">
              Em breve, seus materiais, orientações e downloads ficam aqui.
            </p>
            <Link className="doc__link" href="/">
              Voltar para o início
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
