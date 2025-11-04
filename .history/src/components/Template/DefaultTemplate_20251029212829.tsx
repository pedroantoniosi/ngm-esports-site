// src/components/Template/DefaultTemplate.tsx
import Container from "../Container/Index";
import type { Product } from "../../api/types";

type DefaultTemplateProps = {
  title?: string;
  products?: Product[];
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
            <div key={product.id} className="col text-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full rounded-xl"
              />
              <h3 className="mt-2 font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DefaultTemplate;
