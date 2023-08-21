import { Button, TextField } from '@mui/material';
import { isDisabled } from '@testing-library/user-event/dist/utils';

interface TextFieldProps {
  textLabel?: string;
  variant?: 'text' | 'contained' | 'outlined';
  width?: string;
  isDisabled?: boolean;
  onClick?: (event:any) => void;
}

/**
 * Primary UI component for user interaction
 */
export const ZButton = ({
    textLabel = "Label",
    variant = 'outlined',
    width = '20%',
    isDisabled,
  ...props
}: TextFieldProps) => {
  return (
    <Button variant={variant} disabled={isDisabled} style={{width: `${width}`}} {...props} >{textLabel}</Button>
  );
};
