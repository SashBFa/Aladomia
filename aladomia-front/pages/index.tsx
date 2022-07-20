import Banner from "../components/home/Banner";
import Meta from "../components/template/Meta";
import { gql } from "@apollo/client";
import client from "../utils/apolloClient";

interface pictureProps {
  picture: {
    id: number;
    attributes: {
      url: string;
      width: number;
      height: number;
      name: string;
    };
  }[];
}

const index = ({ picture }: pictureProps) => {
  return (
    <>
      <Meta />
      <Banner picture={picture} />
      <h1 className="bg-white h-screen">index</h1>
    </>
  );
};

export default index;

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query getImage($name: String!) {
        uploadFiles(filters: { name: { startsWith: $name } }) {
          data {
            id
            attributes {
              name
              url
              width
              height
            }
          }
        }
      }
    `,
    variables: { name: "banner" },
  });

  return {
    props: {
      picture: data.uploadFiles.data,
    },
  };
};
