import React from 'react';
import {
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

const progressData = [
  {
    id: 1,
    name: 'John Doe',
    startDate: '2025-03-01',
    time: '10:00 AM',
    assignedWorker: 'Alice Johnson',
    service: 'Cleaning',
    progress: '50%',
  },
  {
    id: 2,
    name: 'Jane Smith',
    startDate: '2025-03-02',
    time: '1:00 PM',
    assignedWorker: 'Bob Brown',
    service: 'Gardening',
    progress: '30%',
  },
  {
    id: 3,
    name: 'Michael Lee',
    startDate: '2025-03-03',
    time: '3:00 PM',
    assignedWorker: 'Cathy Green',
    service: 'Repair',
    progress: 'In Progress',
  },
  {
    id: 4,
    name: 'Sarah Parker',
    startDate: '2025-03-04',
    time: '9:00 AM',
    assignedWorker: 'David Wilson',
    service: 'Painting',
    progress: '80%',
  },
  {
    id: 5,
    name: 'Mark Brown',
    startDate: '2025-03-05',
    time: '2:00 PM',
    assignedWorker: 'Eve Thompson',
    service: 'Electrical',
    progress: 'Pending',
  },
];

const Progress = () => {
  return (
    <div className="p-4">
      <div className="tablediv overflow-auto">
        <h1 className="text-2xl font-semibold mb-4">Progress</h1>
        <Card>
          <CardContent>
            <TableContainer
              component={Paper}
              className="overflow-auto max-h-[70vh]"
            >
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    {['Name/Customer', 'Start Date', 'Time', 'Assigned Worker', 'Service', 'Progress'].map((header) => (
                      <TableCell
                        key={header}
                        sx={{
                          backgroundColor: '#f8f9f9',
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
                  {progressData.map((item) => (
                    <TableRow key={item.id} hover>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.startDate}</TableCell>
                      <TableCell>{item.time}</TableCell>
                      <TableCell>{item.assignedWorker}</TableCell>
                      <TableCell>{item.service}</TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded text-sm font-medium ${
                            item.progress === '100%'
                              ? 'bg-green-100 text-green-700'
                              : item.progress === 'Pending'
                              ? 'bg-yellow-100 text-yellow-700'
                              : item.progress === 'In Progress'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {item.progress}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Progress;
