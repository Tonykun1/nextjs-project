import React from 'react';
import Link from 'next/link'; // Import Link from next/link

const NavItems = () => {
  return (
    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        {['Home', 'Chat', 'Marketplace', 'Features', 'Team', 'Contact'].map((item, index) => (
          <li key={index}>
            <Link href={index === 0 ? '/' : '#'}> 
              <div className={`block py-2 pr-4 pl-3 ${
                index === 0 ? 'text-white bg-primary-700 lg:bg-transparent lg:text-primary-700 dark:text-white' : 'text-gray-700 border-b border-gray-100 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              } lg:p-0 lg:hover:text-primary-700 dark:border-gray-700`}>
                {item}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavItems;
