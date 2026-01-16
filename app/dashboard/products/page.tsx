import { fetchProducts } from "@/lib/data/api";
import { IProduct } from "@/lib/data/types";

const ProductsPage = async () => {
  let products: IProduct[] = [];
  try {
    products = await fetchProducts();
  } catch (error) {}

  return (
    <div className="bg-slate-200 h-full">
      <div className="max-w-screen-lg p-12 flex flex-col gap-8">
        <h1 className="font-sg text-4xl font-bold mb-4 uppercase">Products</h1>
        {products.length === 0 && <span>No products to display</span>}
        {products.length > 0 && (
          <table className="border-collapse table-auto">
            <thead>
              <tr className="border border-slate-300 text-left bg-slate-300">
                <th className="font-sg px-3 py-2">Name</th>
                <th className="font-sg px-3 py-2">Price</th>
                <th className="font-sg px-3 py-2 w-8/12">Description</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.name} className="border border-slate-300 text-left">
                  <td className="px-3 py-2 border border-slate-300">
                    {p.name}
                  </td>
                  <td className="px-3 py-2 border border-slate-300">
                    {p.price} &euro;
                  </td>
                  <td className="px-3 py-2 border border-slate-300">
                    {p.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
