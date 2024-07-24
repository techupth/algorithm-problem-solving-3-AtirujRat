const customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"];

function sortCustomerName(customers) {
  for (let i = 0; i < customers.length - 1; i++) {
    for (let j = 0; j < customers.length - 1; j++) {
      if (customers[j] > customers[j + 1]) {
        let temp = customers[j];
        customers[j] = customers[j + 1];
        customers[j + 1] = temp;
      }
    }
  }
  return customers;
}
const result = sortCustomerName(customers);

console.log(result);

// ตอบคำถามตรงนี้จ้า
