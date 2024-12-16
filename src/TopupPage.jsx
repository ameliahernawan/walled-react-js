import Navbar from './Navbar';

const TopupPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center bg-gray-100 min-h-screen">
        <p className="font-bold text-3xl py-5">Top Up</p>
        <div className="flex flex-col gap-6 bg-white p-7 rounded-xl w-full max-w-md">
          <div className="">
            <p className="font-bold text-md">Amount</p>
            <div class="flex shrink-0 select-none text-base text-xl font-bold items-center border-b border-black">
              IDR
              <input type="number" className="w-full p-2 mx-2 focus:border-gray-600 focus:outline-none" />
            </div>
          </div>
          <div className="flex bg-gray-100 rounded-xl">
            <p className="px-6 py-2 bg-gray-200 font-bold text-lg rounded-xl">From</p>
            <select className="bg-transparent flex w-full pl-2">
              <option value="0">Credit Card</option>
              <option value="0">Debit Card</option>
              <option value="0">E-money</option>
            </select>
          </div>
          <div className="flex items-center font-medium">
            Notes:
            <input type="text" className="p-2 mx-2 focus:border-gray-600 w-full focus:outline-none" />
          </div>
          <div>
            <button className="bg-teal-600 text-white text-md font-bold rounded py-2 w-full">Top Up</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopupPage;
