import React from 'react';

interface NavbarProps {
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">LLM in Math Modeling</div>
        <div className="space-x-4">
          <button onClick={() => onNavigate('introduction')} className="text-gray-300 hover:text-white">引言</button>
          <button onClick={() => onNavigate('advantages')} className="text-gray-300 hover:text-white">核心优势</button>
          <button onClick={() => onNavigate('comparison')} className="text-gray-300 hover:text-white">产品对比</button>
          <button onClick={() => onNavigate('precautions')} className="text-gray-300 hover:text-white">注意事项</button>
          <button onClick={() => onNavigate('examples')} className="text-gray-300 hover:text-white">应用案例</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

