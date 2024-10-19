import { TextInput, TextInputProps } from '@mantine/core';
import classes from './InvoiceGenerator.module.css';

interface TextInputInvoiceProps extends TextInputProps {
  isBold?: boolean;
  placeholder?: string;
  size?: string;
  isTextRight?: boolean;
  hasErrors?: boolean;
}

export function TextInputInvoice({
  isBold = false,
  placeholder = 'Input placeholder',
  size = '20',
  isTextRight = false,
  hasErrors = false,
  ...rest
}: TextInputInvoiceProps) {
  return (
    <TextInput
      classNames={{
        input: `${hasErrors ? classes.invoiceTextInputError : classes.invoiceTextInput} 
        ${isBold ? classes.inputBold : ''}
         ${isTextRight ? classes.inputTextRight : ''}
         `,
        error: classes.invoiceLabelError,
      }}
      variant="unstyled"
      placeholder={placeholder}
      size={size}
      {...rest}
    />
  );
}
