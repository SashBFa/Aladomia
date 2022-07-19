import Image from "next/image";
import Link from "next/link";
import { twoDecimals } from "../../utils/formatNbr";

interface productProps {
  product: {
    name: string;
    price: number;
    slug: string;
    image: {
      data: {
        id: number;
        attributes: {
          url: string;
          width: number;
          height: number;
        };
      };
    };
  };
}

const CardProduct = ({ product }: productProps) => {
  return (
    <Link href={`/products/${product.slug}`}>
      <a className="border m-4 p-4 shadow flex flex-col items-center">
        <h2>{product.name}</h2>
        <Image
          src={
            process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL +
            product.image.data.attributes.url
          }
          width={150}
          height={200}
          alt={product.name}
        />
        <p>{twoDecimals(product.price)} €</p>
      </a>
    </Link>
  );
};

export default CardProduct;
