import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaEdit,
  FaSave,
  FaTimes,
  FaCheckCircle,
  FaMoneyBillWave,
} from "react-icons/fa";
import Navbar from "../components/NavBar";

const ProfilePage = () => {
  const [userInfo, setUserInfo] = useState({});
  const [isEditing, setIsEditing] = useState({
    name: false,
    phoneNum: false,
    location: false,
    password: false,
  });
  const [editFields, setEditFields] = useState({
    name: "",
    phoneNum: "",
    location: "",
    password: "",
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/auth/Profile",
          {
            withCredentials: true,
          }
        );
        // Ensure data is received correctly
        const user = response.data.users;
        setUserInfo(user);
        setEditFields({
          name: user.name || "",
          phoneNum: user.phonNum || "",
          location: user.location || "",
          password: "", // We don't populate the password
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleEditClick = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFields((prev) => ({ ...prev, [name]: value }));
  };

  const ProfileField = ({
    label,
    name,
    value,
    isPassword,
    editable = true,
  }) => (
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          type={isPassword ? "password" : "text"}
          name={name}
          className={`w-full p-3 pr-12 border ${
            isEditing[name] ? "border-blue-500" : "border-gray-300"
          } rounded-lg bg-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500`}
          value={
            isEditing[name] ? editFields[name] : isPassword ? "********" : value
          }
          onChange={handleInputChange}
          readOnly={!isEditing[name] || !editable}
        />
        {editable && (
          <button
            onClick={() => handleEditClick(name)}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500 transition-colors duration-300"
          >
            {isEditing[name] ? <FaTimes size={20} /> : <FaEdit size={20} />}
          </button>
        )}
      </div>
    </div>
  );

  if (!userInfo) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-blue-500 to-indigo-600 p-8 text-white">
                <div className="text-center">
                  <img
                    src={
                      userInfo.profile_image ||
                      "https://via.placeholder.com/150"
                    }
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg mx-auto mb-4"
                  />
                  <h2 className="text-2xl font-bold mb-2">{userInfo.name}</h2>
                  <p className="text-blue-200 mb-4">{userInfo.email}</p>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">
                    Achievement Board
                  </h3>
                  <div className="flex items-center justify-between text-blue-200 mb-3">
                    <span className="flex items-center">
                      <FaCheckCircle className="mr-2" />
                      Completed Projects
                    </span>
                    <span>23</span>
                  </div>
                  <div className="flex items-center justify-between text-blue-200">
                    <span className="flex items-center">
                      <FaMoneyBillWave className="mr-2" />
                      Sales Made
                    </span>
                    <span>15,000 $</span>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Profile Information
                </h3>
                <ProfileField label="Name" name="name" value={userInfo.name} />
                <ProfileField
                  label="Email"
                  name="email"
                  value={userInfo.email}
                  editable={false}
                />
                <ProfileField
                  label="Phone Number"
                  name="phoneNum"
                  //   value={userInfo.phonNum}
                />
                <ProfileField
                  label="Location"
                  name="location"
                  //   value={userInfo.location}
                />
                <ProfileField
                  label="Password"
                  name="password"
                  value={userInfo.password}
                  isPassword
                />

                <div className="mt-8 flex justify-center">
                  <button
                    // onClick={handleSave} // Activate this function later
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center"
                  >
                    <FaSave className="mr-2" />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
