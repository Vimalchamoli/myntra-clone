import ProductCard from "./ProductCard";

function Section({ title, items }) {
  return (
    <div className="px-6 mt-10">
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Section;
