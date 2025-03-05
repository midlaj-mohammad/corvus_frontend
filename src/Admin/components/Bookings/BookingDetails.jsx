import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Typography, 
  Box, 
  Button, 
  Paper, 
  Stack, 
  Divider, 
  CircularProgress 
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssignmentIcon from '@mui/icons-material/Assignment';
import StatusIcon from '@mui/icons-material/Verified';
import WorkersListModal from '../Bookings/WorkersListModal';

const mockBooking = {
  id: 1001,
  name: 'Adam Trantow',
  phone: '123-456-7890',
  date: '2025-02-20',
  amount: '$100',
  service: 'Cleaning, Bathroom cleaning',
  status: 'Scheduled',
};

const BookingDetail = () => {
  const { id } = useParams();
  const booking = mockBooking; 
  const [openWorkerModal, setOpenWorkerModal] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state

  const handleAssign = () => {
    setLoading(true);
    // Simulate a delay for loading effect
    setTimeout(() => {
      setLoading(false);
      setOpenWorkerModal(true);
    }, 1000); // 1-second delay
  };

  const handleCloseModal = () => {
    setOpenWorkerModal(false);
  };

  const handleAssignWorker = (worker) => {
    console.log('Assigned Worker:', worker.name);
    handleCloseModal();
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Booking Details</h1>
      </div>

      <Box p={4}>
        <Paper 
          elevation={2} 
          sx={{ 
            maxWidth: 500, 
            ml: 0, 
            p: 3, 
            borderRadius: 2 
          }}
        >
          <Typography variant="h5" fontWeight="bold" mb={2}>
            Details
          </Typography>
          <Divider sx={{ mb: 3 }} />

          <Stack spacing={2}>
            <Box display="flex" alignItems="center">
              <PersonIcon sx={{ color: '#1e40af', mr: 2 }} />
              <Typography variant="body1">
                <strong>Name:</strong> {booking.name} (ID: {booking.id})
              </Typography>
            </Box>

            <Box display="flex" alignItems="center">
              <CalendarTodayIcon sx={{ color: '#15803d', mr: 2 }} />
              <Typography variant="body1">
                <strong>Date:</strong> {booking.date}
              </Typography>
            </Box>

            <Box display="flex" alignItems="center">
              <AttachMoneyIcon sx={{ color: '#d97706', mr: 2 }} />
              <Typography variant="body1">
                <strong>Amount:</strong> {booking.amount}
              </Typography>
            </Box>

            <Box display="flex" alignItems="center">
              <AssignmentIcon sx={{ color: '#0ea5e9', mr: 2 }} />
              <Typography variant="body1">
                <strong>Service:</strong> {booking.service}
              </Typography>
            </Box>

            <Box display="flex" alignItems="center">
              <StatusIcon
                sx={{
                  color: booking.status === 'Completed' ? '#16a34a' : '#dc2626',
                  mr: 2,
                }}
              />
              <Typography variant="body1">
                <strong>Status:</strong> {booking.status}
              </Typography>
            </Box>
          </Stack>

          <Divider sx={{ my: 3 }} />

          <Box display="flex" justifyContent="flex-start">
            <Button
              variant="contained"
              color="primary"
              onClick={handleAssign}
              disabled={loading} // Disable button during loading
              sx={{
                backgroundColor: '#1e293b',
                '&:hover': { backgroundColor: '#111827' },
              }}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                'Assign Worker'
              )}
            </Button>
          </Box>
        </Paper>
      </Box>

      {/* Workers List Modal */}
      <WorkersListModal 
        open={openWorkerModal} 
        handleClose={handleCloseModal} 
        handleAssignWorker={handleAssignWorker} 
      />
    </div>
  );
};

export default BookingDetail;
