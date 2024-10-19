import { useForm, UseFormReturnType } from '@mantine/form';

//todo: create a file for interfaces
export interface InvoiceFormValues {
  companyName: string;
  firstName: string;
  lastName: string;
  companyWebsite: string;
  companyAddress: string;
  cityStateZIP: string;
  country: string;
  phoneNumber: string;
  email: string;
  clientsCompany: string;
  clientsFirstName: string;
  clientsLastName: string;
  clientsAddress: string;
  clientsCityStateZIP: string;
  clientsCountry: string;
  clientsEmail: string;
  invoiceNo: string;
  invoiceDate: string;
  dueDate: string;
}

const useInvoiceForm = (): UseFormReturnType<InvoiceFormValues> => {
  return useForm<InvoiceFormValues>({
    mode: 'uncontrolled',
    initialValues: {
      companyName: '',
      firstName: '',
      lastName: '',
      companyWebsite: '',
      companyAddress: '',
      cityStateZIP: '',
      country: '',
      phoneNumber: '',
      email: '',
      clientsCompany: '',
      clientsFirstName: '',
      clientsLastName: '',
      clientsAddress: '',
      clientsCityStateZIP: '',
      clientsCountry: '',
      clientsEmail: '',
      invoiceNo: '',
      invoiceDate: '',
      dueDate: '',
    },
    validate: {
      companyName: (value) => (value.length < 2 ? 'Company name is required' : null),
      firstName: (value) => (value.length < 2 ? 'First name is required' : null),
      lastName: (value) => (value.length < 2 ? 'Last name is required' : null),
      companyWebsite: (value) => (value.length < 2 ? 'Company website is required' : null),
      phoneNumber: (value) => (value.length < 2 ? 'Phone number is required' : null),
      email: (value) => (value.length < 2 ? 'Email is required' : null),
    },
  });
};

export default useInvoiceForm;
