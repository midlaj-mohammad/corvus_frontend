import { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Link,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const bookings = [
  {
    id: 1001,
    name: 'Adam Trantow',
    phone: '123-456-7890',
    date: '2025-02-20',
    amount: '$100',
    service: 'Cleaning home cleaning, Bathroom cleaning',
    status: 'Completed',
  },
  {
    id: 1002,
    name: 'Angel Rolfson-Kulas',
    phone: '234-567-8901',
    date: '2025-02-21',
    amount: '$150',
    service: 'Repair',
    status: 'Pending',
  },
  {
    id: 1003,
    name: 'John Doe',
    phone: '111-222-3333',
    date: '2025-02-22',
    amount: '$200',
    service: 'Gardening',
    status: 'In Progress',
  },
];

const BookingManagement = () => {
  const [selectedBookings, setSelectedBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedBookings(bookings.map((booking) => booking.id));
    } else {
      setSelectedBookings([]);
    }
  };

  const handleSelectOne = (id) => {
    setSelectedBookings((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredBookings = bookings.filter((booking) =>
    booking.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleServiceClick = () => {
    navigate('/admin/booking/bookingdetails');
  };

  return (
    <div className="p-4 "  sx={{
      maxWidth: '100vw', // Set a vertical scroll limit
      overflowX: 'auto', // Enable vertical scroll
    }}>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Bookings</h1>
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
      <div className="flex w-100 justify-between items-center mb-4">
            <input
              type="text"
              placeholder="Search booking..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border p-2 rounded w-full md:w-1/3"
            />
          </div>

      <Card>
        <CardContent>

          {/* Responsive Table with Vertical Scrolling */}
          <div>
            <TableContainer
              component={Paper}
              sx={{
                maxHeight: '100vh', // Set a vertical scroll limit
                overflowY: 'auto', // Enable vertical scroll
              }}
            >
              <Table stickyHeader sx={{ minWidth: 1000 }}>
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedBookings.length === bookings.length}
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell>Booking ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Service</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Assignee</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredBookings.map((booking) => (
                    <TableRow key={booking.id} hover>
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={selectedBookings.includes(booking.id)}
                          onChange={() => handleSelectOne(booking.id)}
                        />
                      </TableCell>
                      <TableCell>{booking.id}</TableCell>
                      <TableCell>{booking.name}</TableCell>
                      <TableCell>{booking.phone}</TableCell>
                      <TableCell>{booking.date}</TableCell>
                      <TableCell>{booking.amount}</TableCell>
                      <TableCell>{booking.service}</TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded text-sm ${
                            booking.status === 'Completed'
                              ? 'bg-green-100 text-green-700'
                              : booking.status === 'Pending'
                              ? 'bg-yellow-100 text-yellow-700'
                              : booking.status === 'In Progress'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {booking.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Link component="button" onClick={handleServiceClick}>
                          <Button variant="outlined" size="small">
                            View
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingManagement;
