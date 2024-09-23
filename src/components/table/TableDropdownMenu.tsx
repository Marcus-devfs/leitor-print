import { useState } from 'react';

interface DropdownMenuProps {
    items: { label: string; href: string }[];
}

export const TableDropdownMenu: React.FC<DropdownMenuProps> = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleMenu}
                className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
                type="button"
            >
                <span className="sr-only">Action button</span>
                Ação
                <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>
            {isOpen && (
                <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute mt-2">
                    <ul className="py-1 text-sm text-gray-700">
                        {items.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    className="block px-4 py-2 hover:bg-gray-100"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

