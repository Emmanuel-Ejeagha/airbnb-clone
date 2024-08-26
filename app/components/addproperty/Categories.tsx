import Image from "next/image";

interface CategoriesProps {
  dataCategory: string;
  setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
  dataCategory,
  setCategory,
}) => {
  return (
    <>
      <div className="pt-3 cursor-pointer pb-6 flex item-center space-x-12">
        <div
          onClick={() => setCategory("Icons")}
 className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Icons" ? "border-gray-800" : "border-white"
          } opacity-60 hover:opacity-100 hover:border-gray-200`}
        >
          <Image src="/icons.png" alt="icon logo" width={20} height={20} />
          <span className="text-xs">Icons</span>
        </div>
        <div
          onClick={() => setCategory("Island")}
  className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Island" ? "border-gray-800" : "border-white"
          } opacity-60 hover:opacity-100 hover:border-gray-200`}
        >
          <Image src="/island.jpg" alt="icon logo" width={20} height={20} />
          <span className="text-xs">Island</span>
        </div>
        <div
          onClick={() => setCategory("Beach")}
className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Beach" ? "border-gray-800" : "border-white"
          } opacity-60 hover:opacity-100 hover:border-gray-200`}
        >
          <Image src="/beach.jpg" alt="icon logo" width={20} height={20} />
          <span className="text-xs">Beach</span>
        </div>
        <div
          onClick={() => setCategory("Houseboats")}
className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Houseboats" ? "border-gray-800" : "border-white"
          } opacity-60 hover:opacity-100 hover:border-gray-200`}
        >        
          <Image src="/boathouse.jpg" alt="icon logo" width={20} height={20} />
          <span className="text-xs">Houseboats</span>
        </div>
        <div
          onClick={() => setCategory("Cabins")}
className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Cabins" ? "border-gray-800" : "border-white"
          } opacity-60 hover:opacity-100 hover:border-gray-200`}
        >
          <Image src="/cabins.jpg" alt="icon logo" width={20} height={20} />
          <span className="text-xs">Cabins</span>
        </div>
        <div
          onClick={() => setCategory("Tiny homes")}
className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Tiny homes" ? "border-gray-800" : "border-white"
          } opacity-60 hover:opacity-100 hover:border-gray-200`}
        >        
          <Image src="/tinyhomes.jpg" alt="icon logo" width={20} height={20} />
          <span className="text-xs">Tiny homes</span>
        </div>
      </div>
    </>
  );
};

export default Categories;
