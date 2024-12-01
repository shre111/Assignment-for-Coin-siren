import { Box } from '../atoms';
import { Checkbox } from '../molecules/Checkbox';

export const CheckSection = ({ label }: { label: string }) => {
  return (
    <Box className="flex items-center space-x-2">
      <Checkbox />
      <span className="text-base leading-[24px]">{label}</span>
    </Box>
  );
};
