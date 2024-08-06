import Image from "next/image";

const Categories = () => {
  return (
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-black opacity-60 hover:opacity-100 hover:border-gray-200">
        <Image src="/icons.png" alt="icon logo" width={20} height={20} />
        <span className="text-xs">Icons</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-200">
        <Image src="/island.jpg" alt="icon logo" width={20} height={20} />
        <span className="text-xs">Island</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-200">
        <Image src="/beach.jpg" alt="icon logo" width={20} height={20} />
        <span className="text-xs">Beach</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-200">
        <Image src="/boathouse.jpg" alt="icon logo" width={20} height={20} />
        <span className="text-xs">Houseboats</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-200">
        <Image src="/cabins.jpg" alt="icon logo" width={20} height={20} />
        <span className="text-xs">Cabins</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 hover:border-gray-200">
        <Image src="/tinyhomes.jpg" alt="icon logo" width={20} height={20} />
        <span className="text-xs">Tiny homes</span>
      </div>
    </div>
  );
};

export default Categories;
