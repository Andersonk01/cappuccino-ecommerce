import { Card } from "@/components/Card";
import { products } from "@/data/products";

export default function Home() {
  const data = products;

  return (
    <main className="place-items-center flex min-h-screen flex-col items-center justify-between p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {data.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </main>
  );
}
