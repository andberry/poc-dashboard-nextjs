import { fetchDocuments } from "@/lib/data/api";
import { IDocument, IProduct } from "@/lib/data/types";
import { DocumentsList } from "@/ui/components/base/DocumentsList";
import { H1 } from "@/ui/components/base/Typography/H1";
import { SearchDocuments } from "@/ui/components/SearchDocuments";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ ds?: string }>;
}) => {
  const documentSearchParam = (await searchParams).ds;
  console.log("documents page: searchParam: ", documentSearchParam);

  let documents: IDocument[] = [];
  try {
    documents = await fetchDocuments(documentSearchParam);
  } catch (error) {}

  return (
    <div className="bg-white h-full">
      <div className="max-w-screen-lg p-12 flex flex-col gap-8">
        <H1>Documents</H1>
        <SearchDocuments />
        {documents.length === 0 && <span>No documents found</span>}
        {documents.length > 0 && <DocumentsList documents={documents} />}
      </div>
    </div>
  );
};

export default ProductsPage;
