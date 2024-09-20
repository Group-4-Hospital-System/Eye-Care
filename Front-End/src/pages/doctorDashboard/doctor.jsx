import React, { useState, useEffect } from "react";
import {
  Calendar,
  Users,
  User,
  Plus,
  Edit2,
  Trash2,
  Activity,
  Brain,
  Heart,
  Smile,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

const DoctorDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState([]);
  const [patients, setPatients] = useState([]);
  const [profile, setProfile] = useState({});
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  useEffect(() => {
    // Simulate API calls
    setTimeout(() => {
      setAppointments([
        {
          id: 1,
          patient: "John Doe",
          date: "2024-09-20",
          time: "09:00 AM",
          reason: "Annual checkup",
          status: "Confirmed",
        },
        {
          id: 2,
          patient: "Jane Smith",
          date: "2024-09-20",
          time: "10:30 AM",
          reason: "Follow-up",
          status: "Pending",
        },
        {
          id: 3,
          patient: "Bob Johnson",
          date: "2024-09-21",
          time: "02:00 PM",
          reason: "New patient consultation",
          status: "Confirmed",
        },
      ]);

      setPatients([
        {
          id: 1,
          name: "John Doe",
          age: 45,
          lastVisit: "2024-03-15",
          condition: "Hypertension",
        },
        {
          id: 2,
          name: "Jane Smith",
          age: 32,
          lastVisit: "2024-04-02",
          condition: "Asthma",
        },
        {
          id: 3,
          name: "Bob Johnson",
          age: 58,
          lastVisit: "2024-02-28",
          condition: "Diabetes",
        },
      ]);

      setProfile({
        name: "Dr. Sarah Williams",
        specialty: "General Practitioner",
        email: "sarah.williams@example.com",
        phone: "+1 (555) 123-4567",
        patientsServed: 1500,
        yearsOfExperience: 12,
      });

      setLoading(false);
    }, 2000); // Simulate 2 second loading time
  }, []);

  const getStatusColor = status => {
    switch (status) {
      case "Confirmed":
        return "text-green-500";
      case "Pending":
        return "text-yellow-500";
      default:
        return "text-gray-500";
    }
  };

  const QuickStats = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
    >
      {[
        {
          title: "Total Patients",
          value: profile.patientsServed,
          icon: Users,
          color: "bg-blue-100 text-blue-600",
        },
        {
          title: "Years of Experience",
          value: profile.yearsOfExperience,
          icon: Brain,
          color: "bg-green-100 text-green-600",
        },
        {
          title: "Appointments Today",
          value: appointments.filter(apt => apt.date === "2024-09-20").length,
          icon: Calendar,
          color: "bg-yellow-100 text-yellow-600",
        },
        {
          title: "Patient Satisfaction",
          value: "98%",
          icon: Smile,
          color: "bg-purple-100 text-purple-600",
        },
      ].map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card
            className={`${stat.color} border-none hover:shadow-lg transition-shadow duration-300`}
          >
            <CardContent className="flex items-center p-4">
              <stat.icon className="h-8 w-8 mr-4" />
              <div>
                <p className="text-sm font-medium">{stat.title}</p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );

  const AppointmentsTab = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-teal-700 flex items-center">
            <Calendar className="mr-2 h-5 w-5" />
            Upcoming Appointments
          </CardTitle>
          <CardDescription>Manage your upcoming appointments</CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="mb-4 bg-teal-600 hover:bg-teal-700 text-white transition-colors duration-200">
            <Plus className="mr-2 h-4 w-4" /> Add Appointment
          </Button>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-teal-700">Patient</TableHead>
                <TableHead className="text-teal-700">Date</TableHead>
                <TableHead className="text-teal-700">Time</TableHead>
                <TableHead className="text-teal-700">Reason</TableHead>
                <TableHead className="text-teal-700">Status</TableHead>
                <TableHead className="text-teal-700">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <AnimatePresence>
                {appointments.map(apt => (
                  <motion.tr
                    key={apt.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="hover:bg-gray-50 transition-colors duration-150"
                  >
                    <TableCell>{apt.patient}</TableCell>
                    <TableCell>{apt.date}</TableCell>
                    <TableCell>{apt.time}</TableCell>
                    <TableCell>{apt.reason}</TableCell>
                    <TableCell className={getStatusColor(apt.status)}>
                      {apt.status}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-teal-600 hover:text-teal-700 hover:bg-teal-50"
                        onClick={() => setSelectedAppointment(apt)}
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-400 hover:text-red-500 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </motion.div>
  );

  const PatientRecordsTab = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-teal-700 flex items-center">
            <Users className="mr-2 h-5 w-5" />
            Patient Records
          </CardTitle>
          <CardDescription>Create and manage patient records</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <Input placeholder="Search patients..." className="max-w-sm" />
            <Button className="bg-teal-600 hover:bg-teal-700 text-white transition-colors duration-200">
              <Plus className="mr-2 h-4 w-4" /> Add Patient
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-teal-700">Name</TableHead>
                <TableHead className="text-teal-700">Age</TableHead>
                <TableHead className="text-teal-700">Last Visit</TableHead>
                <TableHead className="text-teal-700">Condition</TableHead>
                <TableHead className="text-teal-700">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <AnimatePresence>
                {patients.map(patient => (
                  <motion.tr
                    key={patient.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="hover:bg-gray-50 transition-colors duration-150"
                  >
                    <TableCell>{patient.name}</TableCell>
                    <TableCell>{patient.age}</TableCell>
                    <TableCell>{patient.lastVisit}</TableCell>
                    <TableCell>{patient.condition}</TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-teal-600 hover:text-teal-700 hover:bg-teal-50"
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-400 hover:text-red-500 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </motion.div>
  );

  const ProfileTab = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-teal-700 flex items-center">
            <User className="mr-2 h-5 w-5" />
            Doctor Profile
          </CardTitle>
          <CardDescription>
            View and edit your profile information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/api/placeholder/128/128" alt={profile.name} />
              <AvatarFallback className="bg-teal-600 text-white text-2xl">
                {profile.name
                  ?.split(" ")
                  .map(n => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold text-teal-700">
                {profile.name}
              </h2>
              <p className="text-gray-500">{profile.specialty}</p>
              <div className="flex items-center mt-2">
                <Activity className="h-4 w-4 text-teal-600 mr-1" />
                <span className="text-sm text-gray-600">
                  {profile.patientsServed} patients served
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-teal-700">Email</label>
              <Input
                value={profile.email}
                onChange={e =>
                  setProfile({ ...profile, email: e.target.value })
                }
                className="border-teal-200 focus:border-teal-500"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-teal-700">Phone</label>
              <Input
                value={profile.phone}
                onChange={e =>
                  setProfile({ ...profile, phone: e.target.value })
                }
                className="border-teal-200 focus:border-teal-500"
              />
            </div>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white transition-colors duration-200">
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  const LoadingScreen = () => (
    <div className="fixed inset-0 bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="120"
          viewBox="0 0 100 100"
          className="mx-auto mb-4"
        >
          <motion.path
            d="M20,50 Q30,30 50,30 Q70,30 80,50 Q70,70 50,70 Q30,70 20,50"
            fill="none"
            stroke="#ffffff"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="50"
            cy="50"
            r="10"
            fill="#ffffff"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          />
        </svg>
        <motion.h2
          className="text-3xl font-bold text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          MediConnect
        </motion.h2>
        <motion.p
          className="text-teal-100 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Preparing your dashboard...
        </motion.p>
      </motion.div>
    </div>
  );

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-6 text-teal-800 flex items-center">
          <Heart className="mr-2 h-8 w-8 text-teal-600" />
          MediConnect Dashboard
        </h1>
      </motion.div>

      <QuickStats />

      <Tabs defaultValue="appointments" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-teal-50 rounded-lg p-1 mb-4">
          <TabsTrigger
            value="appointments"
            className="text-teal-700 data-[state=active]:bg-white rounded-md transition-all duration-200"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Appointments
          </TabsTrigger>
          <TabsTrigger
            value="patient-records"
            className="text-teal-700 data-[state=active]:bg-white rounded-md transition-all duration-200"
          >
            <Users className="mr-2 h-4 w-4" />
            Patient Records
          </TabsTrigger>
          <TabsTrigger
            value="profile"
            className="text-teal-700 data-[state=active]:bg-white rounded-md transition-all duration-200"
          >
            <User className="mr-2 h-4 w-4" />
            Profile
          </TabsTrigger>
        </TabsList>

        <AnimatePresence mode="wait">
          <TabsContent value="appointments">
            <AppointmentsTab />
          </TabsContent>
          <TabsContent value="patient-records">
            <PatientRecordsTab />
          </TabsContent>
          <TabsContent value="profile">
            <ProfileTab />
          </TabsContent>
        </AnimatePresence>
      </Tabs>

      {selectedAppointment && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedAppointment(null)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full"
            onClick={e => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4 text-teal-700">
              Edit Appointment
            </h2>
            <p>
              <strong>Patient:</strong> {selectedAppointment.patient}
            </p>
            <p>
              <strong>Date:</strong> {selectedAppointment.date}
            </p>
            <p>
              <strong>Time:</strong> {selectedAppointment.time}
            </p>
            <p>
              <strong>Reason:</strong> {selectedAppointment.reason}
            </p>
            <p>
              <strong>Status:</strong> {selectedAppointment.status}
            </p>
            <div className="mt-4 flex justify-end space-x-2">
              <Button
                onClick={() => setSelectedAppointment(null)}
                variant="outline"
                className="border-teal-500 text-teal-500 hover:bg-teal-50"
              >
                Cancel
              </Button>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                Save Changes
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default DoctorDashboard;
