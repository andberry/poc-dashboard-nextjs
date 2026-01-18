import { ArrowPathIcon } from "@heroicons/react/24/outline";
export default function Loading() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center gap-2">
      <div className="w-8 h-8 animate-spin">
        <ArrowPathIcon className="stroke-pink-600" />
      </div>
      <p>Loading Products...</p>
    </div>
  );
}
