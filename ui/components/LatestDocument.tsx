import { IInvoice } from "@/lib/data/types";
import { Table } from "./base/Table";
import { fetchLatestDocuments } from "@/lib/data/api";
import { H2 } from "./base/Typography/H2";
import { DocumentsList } from "./base/DocumentsList";

export const LatestDocument = async () => {
  const docs = await fetchLatestDocuments();
  if (!docs) {
    return null;
  }

  return (
    <section>
      <H2 first="Recent" second="Documents" />
      <DocumentsList documents={docs} size="small" />
    </section>
  );
};
