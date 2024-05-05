const ListSkeleton = () => {
  return (
    <div className="grid grid-flow-col gap-4 relative group">
      {Array.from({ length: 6 }).map((_, index: number) => (
        <div
          key={index}
          className={`aspect-video relative rounded-md bg-gray-500 animate-pulse grid place-items-center text-lg ${
            index === 0 && "ml-12"
          }`}></div>
      ))}
    </div>
  );
};

export default ListSkeleton;
