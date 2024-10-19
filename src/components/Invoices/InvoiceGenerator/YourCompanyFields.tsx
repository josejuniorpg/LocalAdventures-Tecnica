import React from 'react';
import { InvoiceFormValues } from 'forms/useInvoiceForm';
import { Group, Stack } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { TextInputInvoice } from './TextInputInvoice';
import classes from './InvoiceGenerator.module.css';

export function YourCompanyFields({ form }: { form: UseFormReturnType<InvoiceFormValues> }) {
  return (
    <Stack
      pb="20"
      className={classes.gapZero}
    >
      <TextInputInvoice
        required
        placeholder="Your Company*"
        isBold
        size="26"
        hasErrors={form.errors.companyName !== undefined}
        {...form.getInputProps('companyName')}
      />
      <Group>
        <TextInputInvoice
          required
          placeholder="First Name*"
          hasErrors={form.errors.firstName !== undefined}
          {...form.getInputProps('firstName')}
        />
        <TextInputInvoice
          required
          placeholder="Last Name*"
          hasErrors={form.errors.lastName !== undefined}
          {...form.getInputProps('lastName')}
        />
      </Group>
      <TextInputInvoice
        required
        placeholder="Company Website*"
        hasErrors={form.errors.companyWebsite !== undefined}
        {...form.getInputProps('companyWebsite')}
      />
      <TextInputInvoice placeholder="Company Address" {...form.getInputProps('companyAddress')} />
      <TextInputInvoice placeholder="City, State ZIP" {...form.getInputProps('cityStateZIP')} />
      <TextInputInvoice placeholder="Country" {...form.getInputProps('country')} />
      <TextInputInvoice
        required
        placeholder="Phone No*"
        hasErrors={form.errors.phoneNumber !== undefined}
        {...form.getInputProps('phoneNumber')}
      />
      <TextInputInvoice
        required
        placeholder="Email Address*"
        hasErrors={form.errors.email !== undefined}
        {...form.getInputProps('email')}
      />
    </Stack>
  );
}
