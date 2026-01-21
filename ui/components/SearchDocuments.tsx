"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export const SearchDocuments = () => {
  // read pathname
  const pagePath = usePathname();
  const router = useRouter();

  // read search params
  const pageSearchParams = useSearchParams();
  const documentSearchParam = pageSearchParams.get("ds") || "";
  console.log("documentSearchParam: ", documentSearchParam);

  const handleOnChange = (s: string) => {
    console.log("handleOnChange: s: ", s);

    // update searchParams while typing
    const urlSeachParams = new URLSearchParams(pageSearchParams);
    if (s) {
      urlSeachParams.set("ds", s);
    } else {
      urlSeachParams.delete("ds");
    }
    router.replace(`${pagePath}?${urlSeachParams.toString()}`);
  };

  return (
    <div>
      <form action="">
        <div className="relative ">
          <input
            id="search-documents"
            type="text"
            onChange={(e) => handleOnChange(e.target.value)}
            placeholder="Search for documents..."
            className="rounded-md px-4 py-2 w-full pr-10"
            // set default val to searchParam value
            defaultValue={documentSearchParam}
          />
          <div className="absolute right-2 top-2">
            <MagnifyingGlassIcon className="w-6" />
          </div>
        </div>
      </form>
    </div>
  );
};
