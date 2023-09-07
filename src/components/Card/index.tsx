"use client";
import { TCappuccino } from "@/types/cappuccino";
import { ProductsBuyContext } from "@/context/productsBuy";
import { useContext, useState } from "react";
import Image from "next/image";

type TIsActive = TCappuccino & {
  isActive?: boolean;
};

export const Card = ({
  id,
  name,
  price,
  description = "",
  isActive,
}: TIsActive) => {
  const { product, setProduct } = useContext(ProductsBuyContext);

  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleSetContext = ({ id, name, price, description }: TCappuccino) => {
    if (product && product.some((item) => item.id === id)) {
      setProduct((prev) => (prev ?? []).filter((item) => item.id !== id));
    } else {
      setProduct((prev) => [...(prev ?? []), { id, name, price, description }]);
      // setIsClicked(false);
    }
    setIsClicked(!isClicked);
  };

  const buttonClass = isClicked
    ? "tracking-wider bg-green-400 text-white px-4 py-2 text-base font-semibold w-full"
    : "tracking-wider bg-yellow-400 text-black px-4 py-2 text-base font-semibold w-full";

  return (
    <div
      key={id}
      className=" text-center text-black-500 flex flex-col justify-between items-center overflow-hidden hover:bg-gray-400 hover:text-white h-min-content h-[480px] max-w-[260px] "
    >
      <Image
        width={300}
        height={300}
        src={`/cappuccino${id}.jpg`}
        alt="cappuccino"
        className="object-cover h-60 w-full"
      />

      <h2 className="text-xl m-2">{name}</h2>
      <p className="text-base m-2">{description}</p>
      <span className="font-mono text-xl mb-4 border-b-2 border-blue-500">
        {price}
      </span>

      {isActive ? (
        <button
          onClick={() => handleSetContext({ id, name, price, description })}
          className="tracking-wider bg-green-400 text-white px-4 py-2 text-base font-semibold w-full"
        >
          Adicionado
        </button>
      ) : (
        <button
          onClick={() => handleSetContext({ id, name, price, description })}
          className={buttonClass}
        >
          {isClicked ? "Adicionado" : "Adicionar"}
        </button>
      )}
    </div>
  );
};
