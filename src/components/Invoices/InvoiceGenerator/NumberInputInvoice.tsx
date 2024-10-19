import { NumberInput, NumberInputProps } from '@mantine/core';
import classes from './InvoiceGenerator.module.css';

interface NumberInputInvoiceProps extends NumberInputProps {
  size?: string;
  placeholder?: string;
}

export function NumberInputInvoice({
  placeholder = 'Input placeholder',
  size = '20',
  ...rest
}: NumberInputInvoiceProps) {
  return (
    <NumberInput
      classNames={{
        input: `${classes.invoiceNumberInput}`,
      }}
      variant="unstyled"
      placeholder={placeholder}
      size={size}
      {...rest}
    />
  );
}
