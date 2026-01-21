import { fetchProducts } from "@/lib/data/api";
import { IProduct } from "@/lib/data/types";
import { Table } from "@/ui/components/base/Table";
import { H1 } from "@/ui/components/base/Typography/H1";

const ProductsPage = async () => {
  let products: IProduct[] = [];
  try {
    products = await fetchProducts();
  } catch (error) {}

  return (
    <div className="bg-white h-full">
      <div className="max-w-screen-lg p-12 flex flex-col gap-8">
        <H1>Products</H1>
        {products.length === 0 && <span>No products to display</span>}
        {products.length > 0 && (
          <Table
            headerRows={["Name", "Price", "Description"]}
            bodyRows={Object.entries(products).map((item) => [
              `${item[1].name}`,
              `${item[1].price}`,
              `${item[1].description}`,
            ])}
          />
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
