const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-4xl font-bold my-6">Budget Tracker</h1>
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-5xl">
        <div className="bg-green-100 border border-green-500 rounded-md p-4 w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Income Entries</h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Description"
              className="border p-2 w-full mb-2 rounded"
            />
            <input
              type="number"
              placeholder="Amount"
              className="border p-2 w-full mb-2 rounded"
            />
            <button
              className="bg-green-500 text-white px-4 py-2 rounded w-full"
            >
              + Add Income
            </button>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="border p-2">Description</th>
                <th className="border p-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Paycheck</td>
                <td className="border p-2">${(5000).toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-red-100 border border-red-500 rounded-md p-4 w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Expense Entries</h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Description"
              className="border p-2 w-full mb-2 rounded"
            />
            <input
              type="number"
              placeholder="Amount"
              className="border p-2 w-full mb-2 rounded"
            />
            <button
              className="bg-red-500 text-white px-4 py-2 rounded w-full"
            >
              + Add Expense
            </button>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="border p-2">Description</th>
                <th className="border p-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Rent</td>
                <td className="border p-2">${(1500).toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-blue-100 border border-blue-500 rounded-md p-4 mt-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Summary</h2>
        <p className="mb-2">Total Income: ${(5000).toFixed(2)}</p>
        <p className="mb-2">Total Expense: ${(1500).toFixed(2)}</p>
        <p className="font-bold">Left after spending: ${(5000 - 1500).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default App;
