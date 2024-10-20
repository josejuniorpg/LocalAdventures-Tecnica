import {InvoicesSectionHeader} from "@/src/components/Invoices/InvoicesSectionHeader";
import InvoiceGenerator from "@/src/components/Invoices/InvoiceGenerator";
import {InvoiceSectionDown} from "@/src/components/Invoices/InvoiceSectionDown";

export default function Invoices () {
  return <>
    <InvoicesSectionHeader />
    <InvoiceGenerator />
    <InvoiceSectionDown />
  </>
}