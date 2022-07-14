import CardItem from "../components/CardItem";
import Meta from "../components/Meta";
import data from "../utils/data";

const shop = () => {
  return (
    <>
      <Meta />
      <h1>Boutique</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data &&
          data.products.map((product) => (
            <CardItem product={product} key={product.slug} />
          ))}
      </div>
    </>
  );
};

export default shop;
