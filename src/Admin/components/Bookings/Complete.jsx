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

const completeData = [
  {
    id: 1,
    name: 'John Doe',
    completionDate: '2025-03-01',
    time: '10:00 AM',
    assignedWorker: 'Alice Johnson',
    service: 'Cleaning',
    status: 'Completed',
  },
  {
    id: 2,
    name: 'Jane Smith',
    completionDate: '2025-03-02',
    time: '1:00 PM',
    assignedWorker: 'Bob Brown',
    service: 'Gardening',
    status: 'Completed',
  },
  {
    id: 3,
    name: 'Michael Lee',
    completionDate: '2025-03-03',
    time: '3:00 PM',
    assignedWorker: 'Cathy Green',
    service: 'Repair',
    status: 'Completed',
  },
  {
    id: 4,
    name: 'Sarah Parker',
    completionDate: '2025-03-04',
    time: '9:00 AM',
    assignedWorker: 'David Wilson',
    service: 'Painting',
    status: 'Completed',
  },
  {
    id: 5,
    name: 'Mark Brown',
    completionDate: '2025-03-05',
    time: '2:00 PM',
    assignedWorker: 'Eve Thompson',
    service: 'Electrical',
    status: 'Completed',
  },
];

const Complete = () => {
  return (
    <div className="p-4">
      <div className="tablediv overflow-auto">
        <h1 className="text-2xl font-semibold mb-4">Completed Jobs</h1>
        <Card>
          <CardContent>
            <TableContainer
              component={Paper}
              className="overflow-auto max-h-[70vh]"
            >
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    {['Name/Customer', 'Completion Date', 'Time', 'Assigned Worker', 'Service', 'Status'].map((header) => (
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
                  {completeData.map((item) => (
                    <TableRow key={item.id} hover>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.completionDate}</TableCell>
                      <TableCell>{item.time}</TableCell>
                      <TableCell>{item.assignedWorker}</TableCell>
                      <TableCell>{item.service}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded text-sm font-medium bg-green-100 text-green-700">
                          {item.status}
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

export default Complete;
