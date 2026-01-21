import { GlobeAltIcon } from "@heroicons/react/24/outline";

export default function AcmeLogo() {
  return (
    <div
      className={
        "font-sg font-medium flex flex-row items-end leading-none text-white gap-2"
      }
    >
      <GlobeAltIcon className="w-12 h-auto rotate-[15deg]" />
      <p className="text-xl font-sora leading-none font-black">
        Berry Dashboard
      </p>
    </div>
  );
}
