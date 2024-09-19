import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

const AppointmentsDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage, setOrdersPerPage] = useState(5);
  const [orders, setOrders] = useState([
    {
      id: 1,
      username: "Ahmed Mohammed",
      doctorName: "Dr. Sarah",
      appointmentTime: "2024-09-10 15:00",
      status: "scheduled",
    },
    {
      id: 2,
      username: "Fatima Hassan",
      doctorName: "Dr. Khalid",
      appointmentTime: "2024-09-11 14:00",
      status: "completed",
    },
    {
      id: 3,
      username: "Mohammed Ali",
      doctorName: "Dr. Ali",
      appointmentTime: "2024-09-12 13:00",
      status: "cancelled",
    },
    {
      id: 4,
      username: "Omar Khalid",
      doctorName: "Dr. Ahmed",
      appointmentTime: "2024-09-13 11:00",
      status: "scheduled",
    },
    {
      id: 5,
      username: "Layla Hussein",
      doctorName: "Dr. Sarah",
      appointmentTime: "2024-09-14 16:00",
      status: "scheduled",
    },
    {
      id: 6,
      username: "Ali Nasser",
      doctorName: "Dr. Khalid",
      appointmentTime: "2024-09-15 10:00",
      status: "completed",
    },
    {
      id: 7,
      username: "Sarah Ahmed",
      doctorName: "Dr. Ali",
      appointmentTime: "2024-09-16 17:00",
      status: "cancelled",
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  const filteredOrders = orders.filter(
    (order) =>
      order.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.appointmentTime.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "scheduled":
        return "text-green-500";
      case "completed":
        return "text-blue-500";
      case "cancelled":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden md:ml-64">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <h1 className="text-2xl font-semibold text-gray-900">
                  Appointment Management
                </h1>
              </div>
              <div className="my-4 flex sm:flex-row flex-col">
                <div className="flex flex-row mb-1 sm:mb-0">
                  <div className="relative">
                    <select
                      value={ordersPerPage}
                      onChange={(e) => setOrdersPerPage(Number(e.target.value))}
                      className="appearance-none h-full rounded-l border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                      <option value={5}>5</option>
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="block relative mt-2 sm:mt-0">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <Search className="h-5 w-5 text-gray-400" />
                  </span>
                  <input
                    placeholder="Search orders..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                  />
                </div>
              </div>
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-[#1f7b6f] text-left text-xs font-semibold text-white uppercase tracking-wider">
                          Username
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-[#1f7b6f] text-left text-xs font-semibold text-white uppercase tracking-wider">
                          Doctor
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-[#1f7b6f] text-left text-xs font-semibold text-white uppercase tracking-wider">
                          Appointment Time
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-[#1f7b6f] text-left text-xs font-semibold text-white uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentOrders.map((order) => (
                        <tr key={order.id}>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                              <div className="flex-shrink-0 w-10 h-10">
                                <img
                                  className="w-full h-full rounded-full"
                                  src={`https://ui-avatars.com/api/?name=${order.username}&background=random`}
                                  alt=""
                                />
                              </div>
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {order.username}
                                </p>
                              </div>
                            </div>
                          </td>
                         
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 w-10 h-10">
                                <img
                                  className="w-full h-full rounded-full"
                                  src={`https://ui-avatars.com/api/?name=${order.doctorName}&background=random`}
                                  alt=""
                                />
                              </div>
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {order.doctorName}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {order.appointmentTime}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
  <select
    value={order.status}
    onChange={(e) => handleStatusChange(order.id, e.target.value)}
    className={`appearance-none border rounded-md py-2 px-3 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
      order.status === 'scheduled'
        ? 'bg-green-100 border-green-500 text-green-700'
        : order.status === 'completed'
        ? 'bg-blue-100 border-blue-500 text-blue-700'
        : 'bg-red-100 border-red-500 text-red-700'
    }`}
  >
    <option value="scheduled" className="text-green-700">
      Scheduled
    </option>
    <option value="completed" className="text-blue-700">
      Completed
    </option>
    <option value="cancelled" className="text-red-700">
      Cancelled
    </option>
  </select>
</td>

                        </tr>
                      ))}
                    </tbody>
                  </table>
                 
                  <div className="flex justify-center items-center mt-4 mb-4">
                    <button
                      onClick={prevPage}
                      className={`flex items-center px-4 py-2 bg-gray-300 text-gray-600 rounded-lg ${
                        currentPage === 1
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-gray-400"
                      }`}
                      disabled={currentPage === 1}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <span className="text-gray-700 flex items-center space-x-2 ml-2">
                      <span className="">
                        Page {currentPage} of {totalPages}
                      </span>
                      <button
                        onClick={nextPage}
                        className={`flex items-center px-4 py-2 bg-gray-300 text-gray-600 rounded-lg ${
                          currentPage === totalPages
                            ? "opacity-50 cursor-not-allowed"
                            : "hover:bg-gray-400"
                        }`}
                        disabled={currentPage === totalPages}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppointmentsDashboard;
