import React from 'react';
import {
  Card,
  CardContent,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const transactionData = [
  {
    id: 1,
    date: '2025-03-01',
    name: 'John Doe',
    amount: '$100',
    status: 'Completed',
    method: 'Credit Card',
  },
  {
    id: 2,
    date: '2025-03-02',
    name: 'Jane Smith',
    amount: '$150',
    status: 'Pending',
    method: 'PayPal',
  },
  {
    id: 3,
    date: '2025-03-03',
    name: 'Michael Lee',
    amount: '$200',
    status: 'Failed',
    method: 'Bank Transfer',
  },
  {
    id: 4,
    date: '2025-03-04',
    name: 'Sarah Parker',
    amount: '$250',
    status: 'Completed',
    method: 'Credit Card',
  },
  {
    id: 5,
    date: '2025-03-05',
    name: 'Mark Brown',
    amount: '$300',
    status: 'Pending',
    method: 'Cash',
  },
];

const PaymentsandTransaction = () => {
  return (
    <div className="p-4">
  <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Payments & Transaction</h1>
        <Button
          variant="contained"
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
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  {['Date', 'Name', 'Amount', 'Status', 'Method', 'Actions'].map((header) => (
                    <TableCell
                      key={header}
                      sx={{
                        backgroundColor: '#222',
                        color: 'white',
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
                {transactionData.map((item) => (
                  <TableRow key={item.id} hover>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.amount}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded text-sm font-medium ${
                          item.status === 'Completed'
                            ? 'bg-green-100 text-green-700'
                            : item.status === 'Pending'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {item.status}
                      </span>
                    </TableCell>
                    <TableCell>{item.method}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{ color: '#4CAF50', borderColor: '#4CAF50' }}
                      >
                        View
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

export default PaymentsandTransaction;
