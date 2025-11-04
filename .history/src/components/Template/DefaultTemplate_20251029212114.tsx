import Container from "../Container/Index";
import { ShopCategory } from "@/api/shopApi";

type DefaultTemplateProps = {
  title: string;
  categories?: ShopCategory[];
  className?: string;
};

const DefaultTemplate = ({
  title,
  categories = [],
  className,
}: DefaultTemplateProps) => {
  return (
    <section className={`default-container ${className || ""}`}>
      <Container>
        <header className="default-header">
          <h2 className="default-title py-1">{title}</h2>
        </header>

        <div className="default-content grid grid-cols-3 gap-4">
          {categories.map((cat) => {
            const firstItem = cat.items[0];
            return (
              <div key={cat.name} className="category-card text-center">
                <img
                  src={firstItem.image}
                  alt={firstItem.name}
                  className="w-full rounded-xl object-cover"
                />
                <h3 className="mt-2 text-lg font-semibold">{cat.name}</h3>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default DefaultTemplate;
