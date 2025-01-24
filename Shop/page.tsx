"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Product } from "../../../types/product";
import { client } from "@/sanity/lib/client";
import { allproducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export default function Header() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Product[] = await client.fetch(allproducts);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.title}</h2>
          {product.productImage && (
            <Image
              src={urlFor(product.productImage).url()}
              alt={product.title}
              width={200}
              height={200}
              priority
            />
          )}
        </div>
      ))}
    </div>
  );
}
