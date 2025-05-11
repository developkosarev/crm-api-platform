
import {
  CustomerField,
  CustomersTableType,
  InvoiceForm,
  InvoicesTable,
  LatestInvoiceRaw,
  Revenue,
} from './definitions';
import { formatCurrency } from './utils';
import { revenue, invoices } from './placeholder-data'


export async function fetchRevenue() {
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    console.log('Fetching revenue data...');
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = revenue;
    //const data = await sql<Revenue[]>`SELECT * FROM revenue`;

    console.log('Data fetch completed after 3 seconds.');

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchLatestInvoices() {
  try {
    console.log('Fetching LatestInvoices data...');
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = invoices;
    //const data = await sql<LatestInvoiceRaw[]>`
    //  SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
    //  FROM invoices
    //  JOIN customers ON invoices.customer_id = customers.id
    //  ORDER BY invoices.date DESC
    //  LIMIT 5`;

    const latestInvoices = data.map((invoice) => ({
      ...invoice,
      amount: formatCurrency(invoice.amount),
    }));

    console.log('Data fetch completed after 3 seconds.');

    return latestInvoices;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}
