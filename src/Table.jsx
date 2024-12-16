import React from 'react';
import { Search, Loader, AlertCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const Table = () => {
  const [transaction, setTransaction] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3000/transactions');
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        setTransaction(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTransaction();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader className="animate-spin text-blue-500" size={24} />
        <span className="ml-2">Loading fetch...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 text-red-500 rounded-lg flex items-center">
        <AlertCircle size={20} className="mr-2" />
        <span>Error: {error}</span>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between gap-4 mx-20">
        <div className="flex p-2 items-center rounded border">
          <Search size={18} className="mx-2" />
          <input type="text" placeholder="Search" className="w-full border-none focus:outline-none" />
        </div>
        <div className="flex gap-4">
          <div className="text-sm flex items-center text-gray-500 gap-3">
            <p>Show</p>
            <select className="w-full p-2 rounded border">
              <option value="0">Last 10 transactions</option>
              <option value="1">Last 20 transactions</option>
              <option value="2">Last 30 transactions</option>
              <option value="3">Last 40 transactions</option>
            </select>
          </div>

          <div className="text-sm flex items-center text-gray-500 gap-3">
            <p className="whitespace-nowrap">Sort by</p>
            <select className="w-max p-2 rounded border">
              <option value="0">Date</option>
              <option value="1">Month</option>
              <option value="2">Year</option>
            </select>

            <select className="w-max p-2 rounded border">
              <option value="0">Descending</option>
              <option value="1">Ascending</option>
            </select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto my-5 mx-20">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-300">Date and Time</th>
              <th className="px-4 py-2 border border-gray-300">Type</th>
              <th className="px-4 py-2 border border-gray-300">From/To</th>
              <th className="px-4 py-2 border border-gray-300">Description</th>
              <th className="px-4 py-2 border border-gray-300">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transaction.map((value) => (
              <tr className="even:bg-white odd:bg-gray-100">
                <td className="px-4 py-2 border border-gray-300">{value.date}</td>
                <td className="px-4 py-2 border border-gray-300">{value.type}</td>
                <td className="px-4 py-2 border border-gray-300">{value.from}</td>
                <td className="px-4 py-2 border border-gray-300">{value.description}</td>
                <td className="px-4 py-2 border border-gray-300">{value.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
