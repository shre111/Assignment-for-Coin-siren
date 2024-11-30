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
    <Box className="relative">
      <Box variant="rowCenter" className="gap-2 cursor-pointer" onClickEvent={() => setOpen(!open)}>
        <Typography className="text-white">{label}</Typography>
        <Icon width={20} className={`w-4 h-4 text-white transition-transform ${open ? 'rotate-180' : ''}`}>{DownCaret}</Icon>
      </Box>

      {open && subItems && (
        <ul className="absolute mt-2 w-max bg-white border border-gray-200 rounded-md shadow-large">
          {subItems.map((item, index) => (
            <li key={index} className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer" onClick={() => setOpen(!open)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </Box>
  );
};
