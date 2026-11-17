import { existsSync } from "node:fs";
import { join } from "node:path";

/**
 * Retrato da primeira dobra.
 *
 * Se `public/otavio.jpg` existir, ele é usado. Enquanto não existir, o arco
 * mostra o monograma — sem imagem quebrada. A checagem roda no build, então
 * basta subir a foto e publicar de novo.
 */
export function Portrait() {
  const hasPhoto = existsSync(join(process.cwd(), "public", "otavio.jpg"));

  return (
    <figure className="portrait">
      {hasPhoto ? (
        <img
          src="/otavio.jpg"
          alt="Retrato de Otávio, nutricionista"
          width={800}
          height={1000}
        />
      ) : (
        <span className="portrait__monogram" aria-hidden="true">
          O
        </span>
      )}
    </figure>
  );
}
