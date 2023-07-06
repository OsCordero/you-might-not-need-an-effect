import HomeButton from "@/components/HomeButton";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Page = () => {
  const [product, setProduct] = useState({
    name: "apple",
    description: "red",
    isInCart: false,
  });
  return (
    <div className="flex flex-col items-center justify-center space-y-4 mt-40">
      <HomeButton />
      <ProductPage
        product={product}
        addToCart={(product) => {
          setProduct({ ...product, isInCart: true });
        }}
      />
    </div>
  );
};
export default Page;

function ProductPage({
  product,
  addToCart,
}: {
  product: Product;
  addToCart: (product: Product) => void;
}) {
  // 🔴 Avoid: Event-specific logic inside an Effect
  useEffect(() => {
    if (product.isInCart) {
      alert(`Added ${product.name} to the shopping cart!`);
    }
  }, [product]);

  function handleBuyClick() {
    addToCart(product);
  }

  function handleCheckoutClick() {
    addToCart(product);
    // navigateTo("/checkout");
  }

  return (
    <>
      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <Button onClick={handleBuyClick} className="mr-2 mt-4">
          Buy
        </Button>
        <Button onClick={handleCheckoutClick} variant="outline">
          Buy and Checkout
        </Button>
      </div>
    </>
  );
}

type Product = {
  name: string;
  description: string;
  isInCart: boolean;
};
