import { TextInput, TextInputProps } from '@mantine/core';
import classes from './InvoiceGenerator.module.css';

interface TextInputInvoiceProps extends TextInputProps {
  isBold?: boolean;
  placeholder?: string;
  size?: string;
  isTextRight?: boolean;
}

export function TextInputInvoice({
  isBold = false,
  placeholder = 'Input placeholder',
  size = '20',
  isTextRight = false, 
  ...rest
}: TextInputInvoiceProps) {
  return (
    <TextInput
      classNames={{
        input: `${classes.invoiceTextInput} ${isBold ? classes.inputBold : ''}
         ${isTextRight ? classes.inputTextRight : ''}`,
      }}
      variant="unstyled"
      placeholder={placeholder}
      size={size}
      {...rest}
    />
  );
}
