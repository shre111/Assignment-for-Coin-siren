import { Icon } from '../../atoms/Icon';
import Logo from '../../../../assets/logo.svg';
import { Typography } from '../../atoms/Typography';
import { Dropdown } from '../../molecules/Dropdown';
import { Button } from '../../atoms/Button';
import { Box } from '../../atoms/Box';

export const Navbar = () => {
  return (
    <Box variant="rowBetween" customStyles="max-w-[1000px] m-auto py-2">
      <Icon width={114}>{Logo}</Icon>

      <Box variant="rowCenter" customStyles="gap-6">
        <Dropdown label={'채용'} />
        <Typography className="text-white">해외 개발자 활용 서비스</Typography>
      </Box>

      <Button>문의하기</Button>
    </Box>
  );
};
