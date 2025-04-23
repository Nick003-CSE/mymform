import React from 'react';
import { Heart } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 mb-6">
      <div className="bg-white bg-opacity-20 backdrop-blur-sm p-2 rounded-full">
        <Heart className="h-8 w-8 text-red-500" />
      </div>
      <span className="text-xl font-bold text-white" ><h1><ul>मारवाड़ी युवा मंच, सरायकेला</ul></h1></span>
    </div>
  );
};

export default Logo;