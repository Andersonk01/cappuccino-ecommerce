"use client";
import { Card } from "@/components/Card";
import { useContext } from "react";

import { ProductsBuyContext } from "@/context/productsBuy";
import { products } from "@/data/products";

export default function Home() {
  const { product } = useContext(ProductsBuyContext);

  const data = product;

  return (
    <main className="place-items-center flex min-h-screen flex-col items-center justify-between p-2 md:p-4">
      <div className="w-full">
        <h1 className="w-full text-2xl font-bold text-start border-b-2 border-gray-400 pb-2 mb-4">
          Minhas Compras
        </h1>

        <div className="flex gap-1 flex-wrap items-center justify-center p-4 md:justify-start ">
          {data === null ? (
            <p className="text-2x2 text-center ">
              Nenhum produto adicionado...
            </p>
          ) : (
            data.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                description={item.description}
                isActive
              />
            ))
          )}
        </div>
      </div>
      <div className="mt-4">
        <h1 className="w-full text-2xl font-bold text-start mb-4">
          Produtos com valor abaixo de 6 reais:
        </h1>
        <span className=" flex gap-1 flex-wrap items-center justify-center md:justify-start">
          {products
            .filter((item) => item.price < 5)
            .map((item) => (
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                description={item.description}
              />
            ))}
        </span>
      </div>
    </main>
  );
}
