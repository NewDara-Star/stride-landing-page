import { useState } from "react";
import PropTypes from "prop-types";
import { ChevronDown } from 'lucide-react';

AccordionItem.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border border-white/10 dark:border-gray-700/30 
        rounded-xl overflow-hidden
        bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm
        transition-all duration-300 hover:shadow-lg">
      <button
        className="flex justify-between items-center w-full p-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{title}</span>
        <ChevronDown 
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-48' : 'max-h-0'
        }`}
      >
        <div className="p-4 pt-0 text-gray-700 dark:text-gray-300">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;