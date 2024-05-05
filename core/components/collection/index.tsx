import { ChevronRightIcon } from "@heroicons/react/16/solid";

type Props = {
  title: string;
};

const Collection = ({ title }: Props) => {
  return (
    <div className="grid grid-rows-[auto,1fr] gap-3">
      <h2 className="text-lg font-medium ml-12">{title}</h2>
      <div className="grid grid-flow-col gap-4 relative group">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className={`aspect-video rounded-md bg-gray-500 grid place-items-center text-lg ${
              index === 0 && "ml-12"
            }`}>
            {index + 1}
          </div>
        ))}
        <div className="absolute right-0  h-full bg-gradient-to-r from-transparent to-black grid place-items-center">
          <ChevronRightIcon className="w-10 h-10 cursor-pointer opacity-0 group-hover:opacity-50" />
        </div>
      </div>
    </div>
  );
};

export default Collection;
