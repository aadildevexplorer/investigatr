import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Search,
  Settings,
  Menu,
  X,
  LayoutDashboard,
  Briefcase,
  BarChart3,
  Bell,
  Sparkles,
  ZoomIn,
  Edit,
} from "lucide-react";
import Papa from "papaparse";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [card, setCard] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    Papa.parse("/data.csv", {
      download: true,
      header: true,
      complete: (result) => {
        const formattedData = result.data.map((row) => ({
          month: row.month,
          value: Number(row.value),
        }));
        setData(formattedData);
      },
    });
  }, []);

  useEffect(() => {
    Papa.parse("/card.csv", {
      download: true,
      header: true,
      complete: (result) => {
        const formattedData = result.data.map((row) => ({
          Date: row.Date,
          value: Number(row.value),
        }));
        setCard(formattedData);
      },
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col overflow-x-hidden">
      {/* ✅ Navbar */}
      <nav className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 text-white shadow-md relative">
        <div className="flex justify-between items-center max-w-screen-2xl mx-auto">
          {/* Logo */}
          <div className="font-bold text-xl">🔍 Investigatr</div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            <button className="bg-white  text-blue-500 p-1 rounded-xl px-1.5 hover:text-gray-200 transition flex gap-1 ">
              <LayoutDashboard
                className="mt-1 bg-blue-500 rounded text-white p-0.5"
                size={18}
              />
              Dashboard
            </button>
            <button className="hover:text-gray-200 transition">
              <Briefcase size={18} />
            </button>
            <button className="hover:text-gray-200 transition">
              <BarChart3 size={18} />
            </button>
            <button className="hover:text-gray-200 transition">
              <Settings size={18} />
            </button>
            <button className="hover:text-gray-200 transition">
              <Briefcase size={18} />
            </button>
          </div>

          {/* Icons + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
              alt="Welcome Illustration"
              className="w-7 h-7 object-contain cursor-pointer"
            />{" "}
            <Menu
              className="w-7 h-7 cursor-pointer md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </div>

        {/* ✅ Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-blue-700 text-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Sidebar Content */}
          <ul className="flex flex-col gap-4 p-6">
            <div className="flex items-center gap-27">
              <div>
                <li>Dashboard</li>
              </div>

              <div>
                <X className="cursor-pointer" onClick={() => setMenuOpen()} />
              </div>
            </div>
            <li>Profile</li>
            <li>Settings</li>
            <li>Logout</li>
          </ul>
        </div>
      </nav>

      {/* ✅ Hero Section */}
      <header className="px-6 py-6 flex flex-col lg:flex-row justify-between gap-6 max-w-screen-2xl mx-auto w-full">
        <div className="p-6 flex flex-col items-center text-center md:flex-row md:text-left md:items-center md:gap-6">
          {/* Left Side Image */}
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
              alt="Welcome Illustration"
              className="w-32 h-32 object-contain"
            />
          </div>

          {/* Right Side Content */}
          <div className="md:text-center md:text-left">
            <h2 className="text-2xl font-bold text-black">Hi, John!</h2>
            <p className="text-3xl font-semibold text-black mt-1">
              Welcome Back!
            </p>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. <br /> is simply dummy text
            </p>
            <button className="mt-5 bg-blue-500 text-white px-3.5 py-1 rounded-4xl shadow hover:bg-blue-700 transition">
              View Cases
            </button>
          </div>
        </div>

        {/* ✅ Stats Section */}
        <div className="grid grid-cols-2 p-4 sm:grid-cols-4 gap-4 flex-1">
          {card.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center justify-center"
            >
              <p className="text-lg font-semibold text-gray-500">{item.Date}</p>
              <p className="text-2xl font-bold text-blue-600 mt-2">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </header>

      <div className="px-6 m-4 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
            📊
          </div>
          <div>
            <h2 className="text-gray-800 font-semibold">Graphs and Analysis</h2>
            <p className="text-gray-500 text-sm">
              Lorem ipsum is simply dummy text.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <select className="px-3 bg-white border-none cursor-pointer py-1 border rounded-lg shadow-sm text-gray-600 focus:outline-none focus:ring focus:ring-blue-200">
            <option>Year</option>
            <option>Month</option>
            <option>Week</option>
          </select>
        </div>
      </div>

      {/* ✅ Graph Section */}
      <section className="px-9 mb-6 mt-2 max-w-screen-2xl mx-auto w-full">
        <div className="bg-white shadow rounded-2xl p-6">
          <h3 className="font-semibold text-gray-700 mb-4 text-lg">
            📊 Graphs & Analysis
          </h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#2563eb"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6, fill: "#1d4ed8" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* ✅ Bottom Search + Filters */}
      <footer className="w-full flex justify-center pb-6">
        {/* Centered Container */}
        <div
          className="bg-indigo-200
 shadow-lg rounded-full px-4 md:m-0  py-2 flex items-center gap-3 w-[310px] md:w-[400px]"
        >
          {/* Search */}
          <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 flex-1">
            <Search className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent w-full outline-none text-gray-600"
            />
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-2">
            {[<Bell />, <Sparkles />, <ZoomIn />, <Edit />].map((Icon, i) => (
              <button
                key={i}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
              >
                {Icon}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
