import Navbar from './Navbar';

const TransferPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center bg-gray-100 min-h-screen">
        <p className="font-bold text-3xl py-5">Transfer</p>
        <div className="flex flex-col gap-6 bg-white p-7 rounded-xl w-full max-w-md">
          <div className="flex bg-gray-100 rounded-xl">
            <p className="px-6 py-2 bg-gray-200 font-bold text-lg rounded-xl">To</p>
            <select className="bg-transparent flex w-full pl-2">
              <option value="0">900782139 (Giz)</option>
              <option value="0">870293874 (Sha)</option>
              <option value="0">029840230 (Mel)</option>
            </select>
          </div>
          <div className="">
            <p className="font-bold text-md">Amount</p>
            <div class="flex shrink-0 select-none text-base text-xl font-bold items-center border-b border-black">
              IDR
              <input type="number" className="w-full p-2 mx-2 focus:border-gray-600 focus:outline-none appearance-none" />
            </div>
            <p className="">
              Balance <span className="text-teal-600">IDR 10.000.000</span>
            </p>
          </div>
          <div className="flex items-center font-medium">
            Notes:
            <input type="text" className="p-2 mx-2 focus:border-gray-600 w-full focus:outline-none focus:ring-0" />
          </div>
          <div>
            <button className="bg-teal-600 text-white text-md font-medium rounded py-2 w-full">Transfer</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransferPage;
