import { Eye, EyeClosed, Plus, Send, Loader, AlertCircle } from 'lucide-react';
import { createContext, useEffect, useState, useContext } from 'react';

// const SensitiveContext = createContext();

// const SensitiveProvider = ({ children }) => {
//   const [isSensitive, setIsSensitive] = useState(false);

//   const toggleSensitive = () => {
//     setIsSensitive((prev) => !prev);
//   };

//   const value = {
//     isSensitive,
//     toggleSensitive,
//   };

//   return <SensitiveContext.Provider value={value}>{children}</SensitiveContext.Provider>;
// };

// const useSensitive = () => {
//   const context = useContext(SensitiveContext);
//   if (!context) {
//     throw new Error('useSensitive must be used within a SensitiveProvider');
//   }
//   return context;
// };

// const SensitiveToggle = () => {
//   const { isSensitive, toggleSensitive } = useSensitive();

//   return (
//     <button onClick={toggleSensitive} className="p-2 rounded-full hover:bg-gray-100">
//       {isSensitive ? <Eye size={20} /> : <EyeClosed size={20} />}
//     </button>
//   );
// };

const AccountStatComponent = () => {
  // const { isSensitive } = useSensitive();
  const [balance, setBalance] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3000/balance');
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        setBalance(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBalance();
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
    // <SensitiveProvider>
    <div className="flex m-20">
      <div className="flex gap-20 items-center mr-10" id="account">
        <div className="bg-teal-600 text-white p-10 rounded-lg">
          <p className="">Account No.</p>
          <p className="text-2xl font-bold">{balance.accountNo}</p>
        </div>
      </div>
      <div className="flex flex-1 justify-between shadow-lg p-10 rounded-lg" id="balanceplus">
        <div className="flex gap-16" id="balance">
          <div>
            <p className="text-lg">Balance</p>
            <p className="text-2xl font-semibold">Rp{balance.amount}</p>
            {/* <SensitiveToggle /> */}
          </div>
        </div>
        <div className="flex gap-8 items-center" id="plus">
          <button className="bg-teal-600 flex p-3 text-white rounded-lg hover:bg-teal-500">
            <Plus size={24} />
          </button>
          <button className="bg-teal-600 flex p-3 text-white rounded-lg hover:bg-teal-500">
            <Send size={24} />
          </button>
        </div>
      </div>
    </div>
    // </SensitiveProvider>
  );
};

export default AccountStatComponent;
