import { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { HiMenu, HiX } from 'react-icons/hi';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(savedExpenses);
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !category || !date) {
      alert('Please fill out all required fields.');
      return;
    }
    const newExpense = {
      amount: parseFloat(amount),
      category,
      date,
      description,
    };
    setExpenses([...expenses, newExpense]);
    setAmount('');
    setCategory('');
    setDate('');
    setDescription('');
  };

  const handleRemove = (index) => {
    const newExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(newExpenses);
  };

  const filteredExpenses = expenses.filter(expense =>
    expense.category.toLowerCase().includes(searchCategory.toLowerCase())
  );

  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  const categoryData = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  const pieData = {
    labels: Object.keys(categoryData),
    datasets: [
      {
        data: Object.values(categoryData),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#66BB6A', '#FFA726', '#42A5F5'],
      },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Toggle button for sidebar on mobile */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden bg-blue-700 text-white p-2"
      >
        {sidebarOpen ? (
          <HiX className="h-6 w-6 ml-64" /> 
        ) : (
          <HiMenu className="h-6 w-6" /> 
        )}
        
      </button>
      

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-blue-700 text-white p-4 z-20 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 md:relative md:translate-x-0`}>
        <h2 className="text-2xl font-bold mb-4">Expense Tracker</h2>
        <nav className="flex flex-col gap-2">
          <a href="#" className="p-2 hover:bg-blue-600 rounded">Home</a>
          <a href="#" className="p-2 hover:bg-blue-600 rounded">Expenses</a>
          <a href="#" className="p-2 hover:bg-blue-600 rounded">Period</a>
          <a href="#" className="p-2 hover:text-white hover:bg-red-600 rounded">Logout</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:ml-64">
        <h1 className="text-3xl font-bold mb-4">Expenses</h1>
        <p className="text-lg font-semibold mb-4">Total Amount: ${totalExpenses.toFixed(2)}</p>

        <form onSubmit={handleSubmit} className="mb-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
              required
              className="border p-2 rounded focus:outline-none"
            />
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Category"
              required
              className="border p-2 rounded focus:outline-none"
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="border p-2 rounded focus:outline-none"
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              className="border p-2 rounded focus:outline-none"
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white p-2 rounded mt-4 w-full md:w-auto">
            Add Expense
          </button>
        </form>

        {/* Search and Table */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by Category"
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
            className="border p-2 rounded w-full md:w-1/3"
          />
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-6">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded mb-4 w-full">
              <thead>
                <tr>
                  <th className="p-3 border">Particulars</th>
                  <th className="p-3 border">Amount</th>
                  <th className="p-3 border">Date</th>
                  <th className="p-3 border">Description</th>
                  <th className="p-3 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredExpenses.map((expense, index) => (
                  <tr key={index}>
                    <td className="p-3 border">{expense.category}</td>
                    <td className="p-3 border">${expense.amount.toFixed(2)}</td>
                    <td className="p-3 border">{expense.date}</td>
                    <td className="p-3 border">{expense.description}</td>
                    <td className="p-3 border">
                      <button
                        onClick={() => handleRemove(index)}
                        className="bg-red-600 text-white p-1 rounded text-xs"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pie Chart */}
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-semibold mb-4">Expenses by Category</h2>
            <Pie data={pieData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
