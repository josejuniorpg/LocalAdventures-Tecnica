import { TextInput, TextInputProps } from '@mantine/core';
import classes from './InvoiceGenerator.module.css';

interface TextInputInvoiceProps extends TextInputProps {
  isBold?: boolean;
  placeholder?: string;
}

export function TextInputInvoice({
  isBold = false,
  placeholder = 'Input placeholder',
  ...rest
}: TextInputInvoiceProps) {
  return (
    <TextInput
      classNames={{
        input: `${classes.invoiceTextInput} ${isBold ? classes.inputBold : ''}`,
      }}
      variant="unstyled"
      placeholder={placeholder}
      size={'20'}
      {...rest}
    />
  );
}
