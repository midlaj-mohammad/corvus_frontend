import React, { useState, useEffect } from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Switch,
  FormControlLabel
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const AddJobModal = ({ open, handleClose, handleAddJob, editingJob, subServices }) => {
  const [jobData, setJobData] = useState({
    jobTitle: '',
    price: '',
    description: '',
    subService: '',
    image: '',
    isActive: true
  });

  useEffect(() => {
    if (editingJob) {
      setJobData({
        jobTitle: editingJob.jobTitle || '',
        price: editingJob.price || '',
        description: editingJob.description || '',
        subService: editingJob.subService || '',
        image: editingJob.image || '',
        isActive: editingJob.isActive !== undefined ? editingJob.isActive : true,
      });
    } else {
      setJobData({ jobTitle: '', price: '', description: '', subService: '', image: '', isActive: true });
    }
  }, [editingJob]);

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setJobData({ ...jobData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleToggleStatus = () => {
    setJobData({ ...jobData, isActive: !jobData.isActive });
  };

  const handleSubmit = () => {
    if (jobData.jobTitle && jobData.price && jobData.description && jobData.subService) {
      handleAddJob(jobData);
      setJobData({ jobTitle: '', price: '', description: '', subService: '', image: '', isActive: true });
      handleClose();
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          // position: 'relative'
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{ position: 'absolute', top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant='h6' fontWeight='bold' mb={2}>
          {editingJob ? 'Edit Job' : 'Add New Job'}
        </Typography>

        <TextField
          fullWidth
          label='Job Title'
          name='jobTitle'
          value={jobData.jobTitle}
          onChange={handleChange}
          margin='normal'
        />

        <TextField
          fullWidth
          label='Price'
          name='price'
          value={jobData.price}
          onChange={handleChange}
          margin='normal'
          type='number'
        />

        <TextField
          fullWidth
          label='Description'
          name='description'
          value={jobData.description}
          onChange={handleChange}
          margin='normal'
          multiline
          rows={4}
        />

        <FormControl fullWidth margin='normal'>
          <InputLabel>Select Sub Service</InputLabel>
          <Select
            name='subService'
            value={jobData.subService}
            onChange={handleChange}
            label='Select Sub Service'
          >
            {subServices.map((service) => (
              <MenuItem key={service.id} value={service.name}>
                {service.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ marginTop: "10px" }}
        />

        <FormControlLabel
          control={<Switch checked={jobData.isActive} onChange={handleToggleStatus} color="primary" />}
          label={jobData.isActive ? "Active" : "Inactive"}
          sx={{ mt: 2 }}
        />

        <Box mt={2}>
          <Button
            variant='contained'
            color='primary'
            onClick={handleSubmit}
            fullWidth
          >
            {editingJob ? 'Update' : 'Add'}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddJobModal;
