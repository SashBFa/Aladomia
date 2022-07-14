/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

interface cardProps {
  product: {
    name: string;
    slug: string;
    category: string;
    image: string;
    price: number;
    brand: string;
    rating: number;
    numReviews: number;
    countInStock: number;
    description: string;
  };
}

const CardItem = ({ product }: cardProps) => {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>{product.price}€</p>
        <button className="primary-button" type="button">
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default CardItem;
