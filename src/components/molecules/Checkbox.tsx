import { Check } from '../atoms/Check';
import { Input } from '../atoms/Input';

export const Checkbox = () => {
  return (
    <label className="flex items-center relative">
      <Input />
      <Check />
    </label>
  );
};
