import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "my first Book",
    description: "This is a first product",
  },
  {
    id: "p2",
    price: 5,
    title: "my second Book",
    description: "This is a second product",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((pdt) => (
          <ProductItem
            key={pdt.id}
            id={pdt.id}
            title={pdt.title}
            price={pdt.price}
            description={pdt.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
