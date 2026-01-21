import { fetchDocuments } from "@/lib/data/api";
import { IDocument, IProduct } from "@/lib/data/types";
import { DocumentsList } from "@/ui/components/base/DocumentsList";
import { Table } from "@/ui/components/base/Table";
import { H1 } from "@/ui/components/base/Typography/H1";

const ProductsPage = async () => {
  let documents: IDocument[] = [];
  try {
    documents = await fetchDocuments();
  } catch (error) {}

  return (
    <div className="bg-white h-full">
      <div className="max-w-screen-lg p-12 flex flex-col gap-8">
        <H1>Documents</H1>
        {documents.length === 0 && <span>No documents to display</span>}
        {documents.length > 0 && <DocumentsList documents={documents} />}
      </div>
    </div>
  );
};

export default ProductsPage;
