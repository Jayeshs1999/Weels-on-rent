import { TextField } from '@mui/material';

interface TextFieldProps {
  textLabel?: string;
  textVariant?: 'outlined' | 'filled' | 'standard';
  isRequired?: boolean;
  size?: 'small';
  width?: string;
  multiline?: boolean;
  maxRows?: number;
  minRows?: number;
  value?:any;
  onChange?: (event:any) => void;
}


/**
 * Primary UI component for user interaction
 */
export const TextFieldFunction = ({
    textLabel = "Label",
    textVariant = 'outlined',
    isRequired = false,
    width = '20%',
  ...props
}: TextFieldProps) => {
  return (
    <TextField multiline={false} maxRows={10} minRows={10} 
     label={textLabel} variant={textVariant} required={isRequired} {...props } style={{width: `${width}`}} />
  );
};
