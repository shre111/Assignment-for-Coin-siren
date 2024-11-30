import { Icon } from '../atoms/Icon';
import { Typography } from '../atoms/Typography';
import DownCaret from '../../../assets/caret-down.svg';
import { useState } from 'react';
import { Box } from '../atoms/Box';

interface DropdownPropTypes {
  label: string;
  subItems?: string[];
}

export const Dropdown = ({ label, subItems }: DropdownPropTypes) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <Box variant="rowCenter" customStyles="gap-2 cursor-pointer" onClickEvent={() => setOpen(!open)}>
        <Typography className="text-white">{label}</Typography>
        {/* <Icon width={20}>{DownCaret}</Icon> */}
        <svg
          className={`w-4 h-4 text-white transition-transform ${open ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Box>

      {open && subItems && (
        <ul className="absolute mt-2 w-max bg-white border border-gray-200 rounded-md shadow-lg">
          {subItems.map((item, index) => (
            <li key={index} className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
