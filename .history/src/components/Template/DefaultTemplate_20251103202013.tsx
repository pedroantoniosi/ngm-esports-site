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
  return (
    <section className={`default-container ${className || ""}`}>
      <Container>
        <header className="default-header">
          <h2 className="default-title py-1">{title}</h2>
        </header>

        <div className="default-content grid grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="card col text-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full rounded-xl"
              />
              <div className="card-caption">
                <h2>product.category</h2>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DefaultTemplate;
