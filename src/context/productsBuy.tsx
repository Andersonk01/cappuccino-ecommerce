"use client";
import React, { useState } from "react";

import { TCappuccino } from "@/types/cappuccino";

type TContextProp = {
  product: TCappuccino[] | null;
  setProduct: React.Dispatch<React.SetStateAction<TCappuccino[] | null>>;
};

const ProductsBuyContext = React.createContext({} as TContextProp);

type Props = {
  children: React.ReactNode;
};

const ProductsBuyProvider = ({ children }: Props) => {
  const [product, setProduct] = useState<TCappuccino[] | null>(null);

  return (
    <ProductsBuyContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductsBuyContext.Provider>
  );
};

export { ProductsBuyContext, ProductsBuyProvider };
