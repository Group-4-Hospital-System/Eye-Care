import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Plus, Edit2, Trash2 } from "lucide-react";
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

const PatientRecordsTab = ({ patients }) => (
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

export default PatientRecordsTab;
