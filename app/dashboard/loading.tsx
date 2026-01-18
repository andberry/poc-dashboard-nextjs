import { ArrowPathIcon } from "@heroicons/react/24/outline";
export default function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-2">
      <div className="w-8 h-8 animate-spin">
        <ArrowPathIcon className="stroke-teal-600" />
      </div>
      <p>Loading...</p>
    </div>
  );
}
