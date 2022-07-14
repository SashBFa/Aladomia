import Head from "next/head";

type metaProps = {
  title?: string;
  description?: string;
};

const Meta = ({ title, description }: metaProps) => {
  return (
    <Head>
      <title> {title} - Aladomia</title>
      <meta name="description" content={description} />
    </Head>
  );
};
Meta.defaultProps = {
  title: "E-commerce de créateur",
  description: "Découvrez un nouvel univers",
};

export default Meta;
