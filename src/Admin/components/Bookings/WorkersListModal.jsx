import React, { useEffect, useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import {AxiosInstanse} from "../../../Api/axios.js"


// const mockWorkers = [
//   { id: 1, name: 'John Doe', phone: '123-456-7890', location: 'New York', services: 'Plumbing' },
//   { id: 2, name: 'Jane Smith', phone: '987-654-3210', location: 'Los Angeles', services: 'Electrical' },
//   { id: 3, name: 'Alice Johnson', phone: '555-123-4567', location: 'Chicago', services: 'Cleaning' },
//   { id: 4, name: 'Bob Brown', phone: '444-555-6666', location: 'Houston', services: 'Gardening' },
//   { id: 5, name: 'Emily White', phone: '333-222-1111', location: 'Miami', services: 'Painting' },
//   { id: 6, name: 'Michael Green', phone: '777-888-9999', location: 'Dallas', services: 'Plumbing' },
//   { id: 7, name: 'Sara Blue', phone: '999-888-7777', location: 'Phoenix', services: 'Carpentry' },
// ];

const WorkersListModal = ({ open, handleClose, handleAssignWorker }) => {
  
const [mockWorkers, setmockWorkers] = useState([]);

const fetchWorkers = async () => {
  const responds = await AxiosInstanse.get("/Admin/getAllEmployeess");
  setmockWorkers(responds.data)
};

useEffect(() => {
  fetchWorkers();
}, []);

console.log(mockWorkers);


  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: "80%", md: 900 },
          maxHeight: "80vh",
          overflowY: "auto",
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 3,
        }}
      >
        {/* Header with Close Icon */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h6" fontWeight="bold">
            Select Worker to Assign
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 2 }} />

        <TableContainer
          component={Paper}
          sx={{
            maxHeight: 300,
            overflowY: "auto",
          }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Services</TableCell>
                <TableCell>Experiance</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockWorkers && mockWorkers.length > 0
                ? mockWorkers.map((worker) => (
                    <TableRow key={worker.employeesId} sx={{ height: 50 }}>
                      <TableCell>{worker.employeesName}</TableCell>
                      <TableCell>{worker.employeesMob   }</TableCell>
                      <TableCell>{worker.city }</TableCell>
                      <TableCell>{worker.experience }</TableCell>

                      <TableCell>{worker.jobs_id}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          size="small"
                          onClick={() => handleAssignWorker(worker)}
                          sx={{
                            backgroundColor: "#1e293b",
                            "&:hover": { backgroundColor: "#111827" },
                          }}
                        >
                          Assign
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Modal>
  );
};

export default WorkersListModal;
