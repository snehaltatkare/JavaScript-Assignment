// Sample data array
const customers = [
    { customerID: 1, customerName: "Customer 1", totalBillingAmount: 3200 },
    { customerID: 2, customerName: "Customer 2", totalBillingAmount: 1500 },
    { customerID: 3, customerName: "Customer 3", totalBillingAmount: 5000 },
    { customerID: 4, customerName: "Customer 4", totalBillingAmount: 3100 },
    { customerID: 5, customerName: "Customer 5", totalBillingAmount: 2900 }
  ];
  
  // Filter customers with total billing amount more than 3000
  const selectedCustomers = customers.filter(customer => customer.totalBillingAmount > 3000);
  
  // Print customer names and purchase details
  selectedCustomers.map(customer => {
    console.log(`Name: ${customer.customerName}`);
    console.log(`Purchase Details: ${customer.totalBillingAmount}`);
  });
  
  