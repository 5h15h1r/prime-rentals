import { useState } from "react";

interface Props {
  onRelevanceClick: () => void;
  onNewestClick: () => void;
  onLowToHighClick: () => void;
  onHighToLowClick: () => void;
}

const Filter: React.FC<Props> = ({
  onRelevanceClick,
  onNewestClick,
  onLowToHighClick,
  onHighToLowClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="mb-1 ml-2 flex items-center justify-center rounded-md bg-blue-400 px-4 py-1 text-white transition-colors duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          <span>Sort By</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute left-0 z-10 mt-2  w-40  md:w-48 rounded-md bg-white shadow-lg  ring-1 ring-black ring-opacity-5 md:right-0">
          <div className="py-1">
            <button
              onClick={() => {
                onRelevanceClick();
                setIsOpen(false);
              }}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
            >
              Relevance
            </button>
            <button
              onClick={() => {
                onNewestClick();
                setIsOpen(false);
              }}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
            >
              Newest
            </button>
            <button
              onClick={() => {
                onLowToHighClick();
                setIsOpen(false);
              }}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
            >
              Low to High
            </button>
            <button
              onClick={() => {
                onHighToLowClick();
                setIsOpen(false);
              }}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
            >
              High to Low
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
