import { MapPin, Recycle } from 'lucide-react';

type BinLocationType = 'Plastic' | 'Paper' | 'Glass' | 'E-waste' | 'Mixed';

type BinLocationProps = {
  name: string;
  types: BinLocationType[];
};

const BinLocation = ({ name, types }: BinLocationProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow duration-300 border border-green-100">
      <div className="flex items-start">
        <div className="bg-green-100 p-2 rounded-full mr-3">
          <MapPin className="text-green-600" size={20} />
        </div>
        <div>
          <h3 className="font-medium text-gray-800">{name}</h3>
          <div className="flex flex-wrap mt-2">
            {types.map((type) => (
              <div key={type} className="flex items-center bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                <Recycle size={12} className="mr-1" />
                {type}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BinLocation;