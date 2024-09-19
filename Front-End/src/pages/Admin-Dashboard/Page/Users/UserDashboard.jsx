import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import {
  Search,
  MoreVertical,
  Edit,
  ChevronLeft,
  ChevronRight,
  Trash,
  Ban,
  Unlock ,
} from "lucide-react";

const UserDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(5);

  const users = [
    {
      id: 1,
      name: "Ahmed Mohammed",
      email: "ahmed@example.com",
      role: "Admin",
    },
    {
      id: 2,
      name: "Sarah Ahmed",
      email: "sara@example.com",
      role: "Moderator",
    },
    { id: 3, name: "Mohammed Ali", email: "mohamed@example.com", role: "User" },
    { id: 4, name: "Fatima Hassan", email: "fatima@example.com", role: "User" },
    {
      id: 5,
      name: "Omar Khalid",
      email: "omar@example.com",
      role: "Moderator",
    },
    { id: 6, name: "Ali Nasser", email: "ali@example.com", role: "User" },
    { id: 7, name: "Layla Hussein", email: "layla@example.com", role: "User" },
  
    // يمكنك إضافة المزيد من المستخدمين هنا
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // حساب عدد الصفحات
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  // حساب المستخدمين في الصفحة الحالية
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // الانتقال للصفحة التالية
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // الانتقال للصفحة السابقة
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
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
                  User Management
                </h1>
       
              </div>
              <div className="my-4 flex sm:flex-row flex-col">
                <div className="flex flex-row mb-1 sm:mb-0">
                  <div className="relative">
                    <select
                      value={usersPerPage}
                      onChange={(e) => setUsersPerPage(Number(e.target.value))}
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
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                  />
                </div>
              </div>
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden ">
                  <table className="min-w-full leading-normal ">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-[#1f7b6f] text-left text-xs font-semibold text-white uppercase tracking-wider">
                          User
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-[#1f7b6f] text-left text-xs font-semibold text-white uppercase tracking-wider">
                          Role
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-[#1f7b6f] text-left text-xs font-semibold text-white uppercase tracking-wider">
                          Email
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-[#1f7b6f] text-left text-xs font-semibold text-white uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentUsers.map((user) => (
                        <tr key={user.id}>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 w-10 h-10">
                                <img
                                  className="w-full h-full rounded-full"
                                  src={`https://ui-avatars.com/api/?name=${user.name}&background=random`}
                                  alt=""
                                />
                              </div>
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {user.name}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {user.role}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {user.email}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex items-center space-x-4">
                              <button title="Edit User" className="text-blue-500 hover:text-blue-600">
                                <Edit size={18} />
                              </button>
                              <button title="Ban User" className="text-red-500 hover:text-red-600">
                                <Ban size={18} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {/* Pagination controls */}

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

export default UserDashboard;
