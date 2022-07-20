import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  const imgProduct = product.image.data.attributes;

  return (
    <Link href={`/products/${product.slug}`}>
      <a className="m-4 p-4 shadow-md flex flex-col">
        <div className="w-80 h-96 rounded-md overflow-hidden flex items-center justify-center mb-2 shadow">
          <Image
            src={process.env.NEXT_PUBLIC_STRAPI_IMAGE_URL + imgProduct.url}
            width={imgProduct.width}
            height={imgProduct.height}
            alt={product.name}
            className="-z-20"
          />
        </div>
        <div className="flex justify-between px-4">
          <div className="flex flex-col">
            <h2 className="text-xl">{product.name}</h2>
            <p className="text-gray-500">€{twoDecimals(product.price)} EUR</p>
          </div>
          <Link href={`/products/${product.slug}`}>
            <button className="text-white bg-amber-400 w-12 h-12 rounded-sm text-xl shadow-md">
              <FontAwesomeIcon icon={faInfo} />
            </button>
          </Link>
        </div>
      </a>
    </Link>
  );
};

export default CardProduct;
