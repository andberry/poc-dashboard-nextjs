import { fetchCustomers } from "@/lib/data/api";
import { ICustomer } from "@/lib/data/types";

const CustomersPage = async () => {
  let customers: ICustomer[] = [];
  try {
    customers = await fetchCustomers();
  } catch (error) {}

  return (
    <div className="bg-slate-200 h-full">
      <div className="max-w-screen-lg p-12 flex flex-col gap-8">
        <h1 className="font-sg text-4xl font-bold mb-4 uppercase">Customers</h1>
        {customers.length === 0 && <span>No customers to display</span>}
        {customers.length > 0 && (
          <table className="border-collapse table-auto">
            <thead>
              <tr className="border border-slate-300 text-left bg-slate-300">
                <th className="font-sg px-3 py-2">Name</th>
                <th className="font-sg px-3 py-2">Email</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((item) => (
                <tr
                  key={item.name}
                  className="border border-slate-300 text-left"
                >
                  <td className="px-3 py-2 border border-slate-300">
                    {item.name}
                  </td>
                  <td className="px-3 py-2 border border-slate-300">
                    {item.email}
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

export default CustomersPage;
