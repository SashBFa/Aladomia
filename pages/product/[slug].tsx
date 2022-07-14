import { Alert } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import Meta from "../../components/Meta";
import data from "../../utils/data";
import { Store } from "../../utils/Store";

interface existItemProps {
  slug: string;
}

const ProductScreen = () => {
  const [stockAlert, setStockAlert] = useState<boolean>(false);
  const { state, dispatch } = useContext(Store);
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);

  if (!product) {
    return <div>Product Not Found</div>;
  }

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find(
      (x: existItemProps) => x.slug === product.slug
    );
    const quantity: number = existItem ? existItem.quantity + 1 : 1;
    if (product.countInStock < quantity) {
      setStockAlert(true);
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
  };

  return (
    <>
      <Meta title={product.name} description={product.description} />
      {stockAlert && (
        <Alert severity="error">
          Désolé, nous n&apos;avons plus asser de cet article en stock
        </Alert>
      )}
      <div className="py-2">
        <Link href="/shop">back to shop</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
            priority
          />
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li>Category: {product.category}</li>
            <li>Brand: {product.brand}</li>
            <li>
              {product.rating} of {product.numReviews} reviews
            </li>
            <li>Description: {product.description}</li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>{product.price}€</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Status</div>
              <div>
                {product.countInStock > 0 ? "En stock" : "Indisponible"}
              </div>
            </div>
            <button
              className="primary-button w-full"
              onClick={addToCartHandler}
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductScreen;
