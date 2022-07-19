import CardProduct from "../components/shop/CardProduct";
import Meta from "../components/template/Meta";
import { gql } from "@apollo/client";
import client from "../utils/apolloClient";

interface productsProps {
  products: {
    id: number;
    attributes: {
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
  }[];
}

const shop = ({ products }: productsProps) => {
  return (
    <>
      <Meta />
      <ul className="flex flex-wrap">
        {products &&
          products.map((product) => (
            <li key={product.id}>
              <CardProduct product={product.attributes} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default shop;

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query productList {
        products {
          data {
            id
            attributes {
              name
              price
              slug
              image {
                data {
                  id
                  attributes {
                    url
                    width
                    height
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      products: data.products.data,
    },
  };
};
