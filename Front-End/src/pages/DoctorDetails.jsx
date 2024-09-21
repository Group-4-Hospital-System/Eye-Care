
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctorById } from '../features/Doctors/doctorThunks';
import { motion } from 'framer-motion';
import { Calendar, Clock, Mail, User, Phone } from 'lucide-react';
import NavBar from '../components/NavBar';
const generateAppointmentSlots = (startTime, endTime) => {
  const slots = [];
  const start = new Date(startTime);
  const end = new Date(endTime);

  while (start < end) {
    const slotStart = new Date(start);
    const slotEnd = new Date(start);
    slotEnd.setMinutes(slotEnd.getMinutes() + 30);

    slots.push({
      start: slotStart.toISOString(),
      end: slotEnd.toISOString(),
      available: Math.random() > 0.3, // Randomly set availability for demo
    });

    start.setMinutes(start.getMinutes() + 30);
  }

  return slots;
};

const DoctorDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedDoctor, status, error } = useSelector((state) => state.doctors);
  const [appointmentSlots, setAppointmentSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    dispatch(fetchDoctorById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (selectedDoctor) {
      const slots = generateAppointmentSlots(
        `${selectedDate.toISOString().split('T')[0]}T09:00:00`,
        `${selectedDate.toISOString().split('T')[0]}T17:00:00`
      );
      setAppointmentSlots(slots);
    }
  }, [selectedDoctor, selectedDate]);

  if (status === 'loading') return <div className="text-center py-8 text-xl">Loading...</div>;
  if (status === 'failed') return <div className="text-center py-8 text-xl text-red-500">Error: {error}</div>;
  if (!selectedDoctor) return <div className="text-center py-8 text-xl">No doctor found.</div>;

  const handleDateChange = (e) => {
    setSelectedDate(new Date(e.target.value));
  };

  const handleBookAppointment = (slot) => {
    // Here you would typically make an API call to book the appointment
    alert(`Appointment booked for ${new Date(slot.start).toLocaleString()}`);
  };

  return (
    <>
    <NavBar/>
    <div className="container mx-auto py-8 px-4 mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-xl p-8 text-mintD mb-8"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img
              src={selectedDoctor.profile_image || '/default-doctor-image.jpg'}
              alt={selectedDoctor.name}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h1 className="text-3xl font-bold mb-4 text-mintD">{selectedDoctor.name}</h1>
            <p className="flex items-center text-gray-600 mb-2"><Mail className="mr-2 text-mint" size={18} /> {selectedDoctor.email}</p>
            <p className="flex items-center text-gray-600 mb-2"><User className="mr-2 text-mint" size={18} /> {selectedDoctor.gender}</p>
            {/* <p className="flex items-center text-gray-600 mb-2"><Phone className="mr-2 text-mint" size={18} /> {selectedDoctor.phone || 'N/A'}</p> */}
            <p className="flex items-center text-gray-600 mb-2"><Clock className="mr-2 text-mint" size={18} /> {selectedDoctor.start_time}-{selectedDoctor.end_time} </p>
            <p className="mt-4 text-gray-700">{selectedDoctor.bio || 'No bio available.'}</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-mintD">Book an Appointment</h2>
        <div className="mb-4">
          <label htmlFor="appointmentDate" className="block text-gray-700 mb-2">Select Date:</label>
          <input
            type="date"
            id="appointmentDate"
            value={selectedDate.toISOString().split('T')[0]}
            onChange={handleDateChange}
            className="p-2 border rounded-md"
          />
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl mb-4 text-mintD">Available Slots</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {appointmentSlots.map((slot, index) => (
              <motion.div
                key={index}
                className={`p-4 rounded-lg ${slot.available ? 'bg-mintL' : 'bg-gray-200'}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <p className="flex items-center mb-2">
                  <Calendar className="mr-2" size={18} />
                  {new Date(slot.start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
                {slot.available ? (
                  <button
                    onClick={() => handleBookAppointment(slot)}
                    className="w-full bg-mintD text-white px-4 py-2 rounded-md hover:bg-mint transition-colors duration-300"
                  >
                    Book
                  </button>
                ) : (
                  <span className="block text-center text-red-500 font-semibold">Unavailable</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
    </>
  );
};

export default DoctorDetails;