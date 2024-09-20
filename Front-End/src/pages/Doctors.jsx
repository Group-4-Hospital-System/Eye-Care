// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchDoctors } from '../features/Doctors/doctorThunks';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Search } from 'lucide-react';
// import NavBar from '../components/NavBar';

// const Doctors = () => {
//   const dispatch = useDispatch();
//   const { doctors, status, error } = useSelector((state) => state.doctors);
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const doctorsPerPage = 8;

//   useEffect(() => {
//     if (status === 'idle') {
//       dispatch(fetchDoctors());
//     }
//   }, [dispatch, status]);

//   if (status === 'loading') return <p className="text-center text-xl mt-8">Loading...</p>;
//   if (status === 'failed') return <p className="text-center text-xl mt-8 text-red-500">Error: {error}</p>;

//   const filteredDoctors = doctors.filter(doctor =>
//     doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const indexOfLastDoctor = currentPage * doctorsPerPage;
//   const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
//   const currentDoctors = filteredDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const goToDoctorDetails = (doctorId) => {
//     navigate(`/Doctors/${doctorId}`);
//   };

//   return (
//     <>
//       <NavBar/>
//       <div className="relative">
//         {/* Hero Section */}
//         <div
//           className="bg-cover bg-center h-72 flex items-center justify-center text-white  inset-0 bg-black opacity-40"
//           style={{ backgroundImage: `url('https://www.eyedoctorportcharlotte.com/wp-content/uploads/2023/06/30908657_l-1200x480-1.jpg')` }}
//         >
//           <div className="text-center px-4">
//             <h1 className="text-4xl font-bold mb-2 text-mintD mt-20">Eye Care Specialists</h1>
//             <p className="text-lg text-mintD">Find the best eye care doctors to protect and enhance your vision.</p>
//           </div>
//         </div>

//         {/* Search Bar */}
//         <div className="container mx-auto px-4 -mt-8 relative z-10">
//           <div className="mb-8 relative">
//             <input
//               type="text"
//               placeholder="Search doctors by name"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full p-3 pl-10 rounded-full border-2 border-mint focus:border-mintD focus:outline-none transition-colors duration-300"
//             />
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-mintD" />
//           </div>

//           {/* Doctors Grid */}
//           <motion.div 
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             {currentDoctors.map((doctor) => (
//               <motion.div
//                 key={doctor.user_id}
//                 className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//                 onClick={() => goToDoctorDetails(doctor.user_id)}
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <img
//                   src={doctor.profile_image || '/default-doctor-image.jpg'}
//                   alt={doctor.name}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4 text-center">
//                   <h2 className="text-xl font-semibold text-mintD mb-2">{doctor.name}</h2>
//                   <p className="text-gray-600 mb-2">{doctor.specialization}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Pagination */}
//           {filteredDoctors.length > doctorsPerPage && (
//             <div className="mt-8 flex justify-center">
//               {[...Array(Math.ceil(filteredDoctors.length / doctorsPerPage))].map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => paginate(index + 1)}
//                   className={`mx-1 px-4 py-2 rounded ${
//                     currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
//                   } hover:bg-blue-400 transition-colors duration-300`}
//                 >
//                   {index + 1}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Doctors;



import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctors } from '../features/Doctors/doctorThunks';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import NavBar from '../components/NavBar';

const Doctors = () => {
  const dispatch = useDispatch();
  const { doctors, status, error } = useSelector((state) => state.doctors);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 8;

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDoctors());
    }
  }, [dispatch, status]);

  if (status === 'loading') return <p className="text-center text-xl mt-8">Loading...</p>;
  if (status === 'failed') return <p className="text-center text-xl mt-8 text-red-500">Error: {error}</p>;

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const goToDoctorDetails = (doctorId) => {
    navigate(`/Doctors/${doctorId}`);
  };

  return (
    <>
      <NavBar/>
      <div className="relative">
        {/* Hero Section */}
        <div
          className="bg-cover bg-center h-72 flex items-center justify-center text-white inset-0 bg-black"
          style={{ backgroundImage: `url('https://images.ctfassets.net/u4vv676b8z52/4fHcFB2ynyOLxy9SHBSuNW/61fc7d1a44b45c63a0d86efba98321eb/glasses_and_eye_chart-678x446-compressor.jpg?fm=jpg&q=80')` }}
        >
          <div className="text-center px-4 bg-black bg-opacity-60 h-full w-full ">
            <h1 className="text-4xl font-bold mb-2 text-mintD mt-20">Eye Care Specialists</h1>
            <p className="text-lg text-mintD">Find the best eye care doctors to protect and enhance your vision.</p>
        <div className="container mx-auto px-4 mt-28  ">
          <div className="relative">
            <input
              type="text"
              placeholder="Search doctors by name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 pl-10 rounded-full border-2 border-mint focus:border-mintD focus:outline-none transition-colors duration-300"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-mintD" />
          </div>
        </div>
          </div>
        </div>

        {/* Search Bar */}

        {/* Doctors Grid */}
        <div className="container mx-auto px-4 mt-20">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {currentDoctors.map((doctor) => (
              <motion.div
                key={doctor.user_id}
                className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                onClick={() => goToDoctorDetails(doctor.user_id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <img
                  src={doctor.profile_image || '/default-doctor-image.jpg'}
                  alt={doctor.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h2 className="text-xl font-semibold text-mintD mb-2">{doctor.name}</h2>
                  <p className="text-gray-600 mb-2">{doctor.specialization}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination */}
          {filteredDoctors.length > doctorsPerPage && (
            <div className="mt-8 flex justify-center">
              {[...Array(Math.ceil(filteredDoctors.length / doctorsPerPage))].map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`mx-1 px-4 py-2 rounded ${
                    currentPage === index + 1 ? 'bg-mintD text-white' : 'bg-gray-200 text-gray-700'
                  } hover:bg-mint transition-colors duration-300`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Doctors;
