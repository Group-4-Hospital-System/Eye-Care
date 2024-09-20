import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MessageCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AppointmentsTab = () => {
  const getStatusColor = status => {
    switch (status) {
      case "scheduled":
        return "text-blue-500";
      case "completed":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patient: "John Doe",
      doctor_id: 1,
      appointment_date: "2024-09-20T09:00:00",
      status: "scheduled",
      notes: "Annual checkup",
    },
  ]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-teal-700 flex items-center">
            <Calendar className="mr-2 h-5 w-5" />
            Appointments
          </CardTitle>
          <CardDescription>Manage your appointments</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-teal-700">Appointment ID</TableHead>
                <TableHead className="text-teal-700">Patient ID</TableHead>
                <TableHead className="text-teal-700">Doctor ID</TableHead>
                <TableHead className="text-teal-700">Date and Time</TableHead>
                <TableHead className="text-teal-700">Status</TableHead>
                <TableHead className="text-teal-700">Notes</TableHead>
                <TableHead className="text-teal-700">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <AnimatePresence>
                {appointments.map(apt => (
                  <motion.tr
                    key={apt.appointment_id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="hover:bg-gray-50 transition-colors duration-150"
                  >
                    <TableCell>{apt.id}</TableCell>
                    <TableCell>{apt.patient}</TableCell>
                    <TableCell>{apt.doctor_id}</TableCell>
                    <TableCell>
                      {new Date(apt.appointment_date).toLocaleString()}
                    </TableCell>
                    <TableCell className={getStatusColor(apt.status)}>
                      {apt.status}
                    </TableCell>
                    <TableCell>{apt.notes}</TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-teal-600 hover:text-teal-700 hover:bg-teal-50"
                        onClick={() => setSelectedAppointment(apt)}
                      ></Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-blue-400 hover:text-blue-500 hover:bg-blue-50"
                      >
                        <MessageCircle className="h-4 w-4" />
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
};

export default AppointmentsTab;
