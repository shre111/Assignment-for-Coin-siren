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
    <Box variant="rowCenter" customStyles="gap-2 cursor-pointer" onClick={() => setOpen(!open)}>
      <Typography>{label}</Typography>
      <Icon width={20}>{DownCaret}</Icon>
    </Box>
  );
};
