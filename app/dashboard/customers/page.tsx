import { fetchCustomers } from "@/lib/data/api";
import { ICustomer } from "@/lib/data/types";
import { Table } from "@/ui/components/base/Table";
import { H1 } from "@/ui/components/base/Typography/H1";

const CustomersPage = async () => {
  let customers: ICustomer[] = [];
  try {
    customers = await fetchCustomers();
  } catch (error) {}

  return (
    <div className="bg-white h-full">
      <div className="max-w-screen-lg p-12 flex flex-col gap-8">
        <H1>Customers</H1>
        {customers.length === 0 && <span>No customers to display</span>}
        {customers.length > 0 && (
          <Table
            headerRows={["Name", "Email"]}
            bodyRows={Object.entries(customers).map((item) => [
              `${item[1].name}`,
              `${item[1].email}`,
            ])}
          />
        )}
      </div>
    </div>
  );
};

export default CustomersPage;
