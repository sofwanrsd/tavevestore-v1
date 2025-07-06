import { notFound } from "next/navigation";
import products from "@/data/products";
import ProductClient from "./ProductClient";

// SSG Dynamic Route Generator
export async function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

// Fix: Destructure dengan explicit await
export default async function ProductDetailPage(context) {
  const { params } = context; // <--- ini fixnya
  const product = products.find((p) => p.id === params.id);

  if (!product) return notFound();

  return <ProductClient product={product} />;
}
