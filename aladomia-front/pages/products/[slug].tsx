import Meta from "../../components/template/Meta";
import { gql } from "@apollo/client";
import client from "../../utils/apolloClient";

interface articleProps {
  article: {
    id: number;
    attributes: {
      name: string;
      price: number;
      slug: string;
      content: string;
      meta_title: string;
      meta_description: string;
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
  };
}

const Product = ({ article }: articleProps) => {
  const product = article.attributes;
  return (
    <>
      <Meta title={product.meta_title} description={product.meta_description} />
      <h2>{product.name}</h2>
    </>
  );
};

export default Product;

export const getStaticProps = async (context: any) => {
  const { data } = await client.query({
    query: gql`
      query product($slug: String!) {
        products(filters: { slug: { eq: $slug } }) {
          data {
            id
            attributes {
              name
              content
              meta_title
              meta_description
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
    variables: { slug: context.params.slug },
  });

  return {
    props: {
      article: data.products.data[0],
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query slugList {
        products {
          data {
            id
            attributes {
              slug
            }
          }
        }
      }
    `,
  });

  const slugs = data.products.data.map(
    (element: any) => element.attributes.slug
  );
  const paths = slugs.map((slug: string) => ({
    params: { slug: slug },
  }));

  return {
    paths,
    fallback: false,
  };
};
