import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function AcmeLogo() {
  return (
    <div
      className={'font-sg font-medium flex flex-row items-center leading-none text-white gap-1'}
    >
      <GlobeAltIcon className="h-6 w-6 rotate-[15deg]" />
      <p className="text-xl">Acme</p>
    </div>
  );
}
