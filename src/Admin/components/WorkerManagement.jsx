import React, { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const workerData = [
  {
    id: 1,
    name: 'Alice Johnson',
    phone: '123-456-7890',
    location: 'New York',
    services: 'Cleaning, Repair',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Bob Brown',
    phone: '234-567-8901',
    location: 'Los Angeles',
    services: 'Gardening, Painting',
    status: 'Inactive',
  },
  {
    id: 3,
    name: 'Cathy Green',
    phone: '345-678-9012',
    location: 'Chicago',
    services: 'Repair',
    status: 'Active',
  },
  {
    id: 4,
    name: 'David Wilson',
    phone: '456-789-0123',
    location: 'Houston',
    services: 'Electrical, Plumbing',
    status: 'Active',
  },
  {
    id: 5,
    name: 'Eve Thompson',
    phone: '567-890-1234',
    location: 'Miami',
    services: 'Cleaning',
    status: 'Inactive',
  },
];

const WorkerManagement = () => {
  const [workers, setWorkers] = useState(workerData);

  const handleAddWorker = () => {
    console.log('Add Worker button clicked');
    // Logic to open the Add Worker modal or navigate to the Add Worker page
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Worker Management</h1>
        <Button
          variant="contained"
          onClick={handleAddWorker}
          sx={{
            backgroundColor: '#1e293b',
            '&:hover': { backgroundColor: '#111827' },
          }}
        >
          + Add Worker
        </Button>
      </div>

      <Card>
        <CardContent>
          <TableContainer
            component={Paper}
            className="overflow-auto max-h-[70vh]"
          >
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  {['Name', 'Phone', 'Location', 'Services', 'Status', 'Actions'].map((header) => (
                    <TableCell
                      key={header}
                      sx={{
                        backgroundColor: '#ccc',
                        color: 'black',
                        fontWeight: 'bold',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {workers.map((worker) => (
                  <TableRow key={worker.id} hover>
                    <TableCell>{worker.name}</TableCell>
                    <TableCell>{worker.phone}</TableCell>
                    <TableCell>{worker.location}</TableCell>
                    <TableCell>{worker.services}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded text-sm font-medium ${
                          worker.status === 'Active'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {worker.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        size="small"
                        color="primary"
                        onClick={() => console.log(`Edit Worker ${worker.id}`)}
                      >
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkerManagement;
