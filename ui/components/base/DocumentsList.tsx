import { IDocument } from "@/lib/data/types";
import { DocumentChartBarIcon } from "@heroicons/react/24/outline";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

interface IProps {
  documents: IDocument[];
  size?: "default" | "small";
}

export const DocumentsList = ({ documents, size = "default" }: IProps) => {
  return (
    <div className="flex flex-col gap-4">
      {documents.map((doc) => (
        <div
          key={doc.id}
          className={clsx(
            "flex gap-8 rounded-lg border border-slate-200 justify-between items-center",
            { "py-6 px-6": size === "default" },
            { "py-3 px-3": size === "small" },
          )}
        >
          <div className="flex gap-6 items-center">
            <div className="w-6">
              <DocumentChartBarIcon />
            </div>
            <div>
              <div className="mb-2 font-bold">{doc.title}</div>
              <div className="uppercase text-xs font-sora">{doc.type}</div>
              <div className="text-navyPrimary opacity-80 text-xs font-sora">
                {doc.updateDateShort}
              </div>
            </div>
          </div>
          <div>
            <a
              className="text-sm inline-flex p-4 gap-2 hover:text-tealDeeper duration-100 ease-linear"
              href={doc.file}
            >
              Download
              <ArrowDownTrayIcon className="w-6" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
