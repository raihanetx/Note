import React from 'react';

const customers = [
  { id: 1, name: 'John Doe', balance: 50, unpaidRides: 2 },
  { id: 2, name: 'Jane Smith', balance: 0, unpaidRides: 0 },
  { id: 3, name: 'Peter Jones', balance: 120, unpaidRides: 5 },
];

const CustomerLedger = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Customer Ledger</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Balance
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Unpaid Rides
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className={customer.balance > 0 ? 'bg-red-100' : ''}>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                  {customer.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                  QAR {customer.balance}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-gray-200">
                  {customer.unpaidRides}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerLedger;
