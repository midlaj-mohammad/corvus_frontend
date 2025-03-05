import React, { useState } from 'react';
import { Button, Typography, Box, Card, CardContent, CardActions, CardMedia } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddJobModal from '../components/AddJobModal';

const Jobs = () => {
  const [open, setOpen] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);

  const handleOpen = () => {
    setEditingJob(null);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingJob(null);
  };

  const handleAddOrUpdateJob = (newJob) => {
    if (editingJob) {
      setJobs(jobs.map((job, index) => 
        index === editingJob.index ? newJob : job
      ));
    } else {
      setJobs([...jobs, newJob]);
    }
    handleClose();
  };

  const handleEdit = (index) => {
    setEditingJob({ ...jobs[index], index });
    setOpen(true);
  };

  return (
    <div>
      <Box display="flex" justifyContent="space-between" alignItems="center" p={3} bgcolor="#f9fafb">
        <Typography variant="h6" fontWeight="bold" color="text.primary">
          Jobs
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpen}
          sx={{
            backgroundColor: "#1e293b",
            "&:hover": { backgroundColor: "#111827" },
          }}
        >
          New Job
        </Button>
      </Box>

      <div className="p-4">
        {jobs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {jobs.map((job, index) => (
              <Card key={index} sx={{ maxWidth: 345, boxShadow: 3 }}>
                {job.image && (
                  <CardMedia
                    component="img"
                    height="150"
                    image={job.image}
                    alt={job.jobTitle}
                  />
                )}
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">{job.jobTitle}</Typography>
                  <Typography variant="body2" color="text.secondary">{job.description}</Typography>
                  <Typography variant="body2" color="text.secondary">Price: ₹{job.price}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => handleEdit(index)}>Edit</Button>
                  <Button size="small" color="error">Block</Button>
                </CardActions>
              </Card>
            ))}
          </div>
        ) : (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="50px"
            borderRadius="8px"
          >
            <Typography variant="p" color="text.secondary">
              No jobs added yet.
            </Typography>
          </Box>
        )}
      </div>

      <AddJobModal
        open={open}
        handleClose={handleClose}
        handleAddJob={handleAddOrUpdateJob}
        editingJob={editingJob}
        subServices={[
          { id: 1, name: 'Sub Service 1' },
          { id: 2, name: 'Sub Service 2' }
        ]}
      />
    </div>
  );
};

export default Jobs;
