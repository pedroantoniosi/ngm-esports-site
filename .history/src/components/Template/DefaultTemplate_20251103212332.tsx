// src/components/Template/DefaultTemplate.tsx
import Container from "../Container/Index";
import type { Product } from "../../api/types";

type DefaultTemplateProps = {
  title?: string;
  products: Product[];
  className?: string;
};

const DefaultTemplate = ({
  title,
  products,
  className,
}: DefaultTemplateProps) => {
  // Filtra para obter apenas o primeiro produto (menor id) de cada categoria
  const uniqueProducts = Array.from(
    new Map(
      // Primeiro ordena os produtos pelo id
      products
        .sort((a, b) => a.id - b.id)
        // Depois cria pares [categoria, produto]
        .map((p) => [p.category, p])
    ).values()
  );

  return (
    <section className={`default-container ${className || ""}`}>
      <Container>
        {title && (
          <header className="default-header">
            <h2 className="default-title py-1">{title}</h2>
          </header>
        )}

        {/* Aqui todos os produtos ficam dentro de um único default-content */}
        <div className="default-content grid-3">
          {uniqueProducts.map((product) => (
            <div key={product.id} className="card col text-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full rounded-xl"
              />
              <div className="card-caption">
                <h2>{product.category}</h2>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DefaultTemplate;
