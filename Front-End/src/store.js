
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import userReducer from './features/user/userSlice';


import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import userReducer from "./features/user/userSlice";
import PatientSlice from "./features/Admin/PatientSlice";
import DoctorSlice from "./features/Admin/DoctorSlice";
import ContactMessages from "./features/Admin/ContactMessages";
import doctorReducer from './features/Doctors/doctorSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    doctors: doctorReducer,
    Patient: PatientSlice,
    Doctor: DoctorSlice,
    contactMessages:ContactMessages

  },
});

export default store;
