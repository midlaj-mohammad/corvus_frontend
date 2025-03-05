import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Switch,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const NewSubServiceModal = ({
  open,
  handleClose,
  handleAddService,
  editingService,
  mainServices = [],
}) => {
  const [serviceData, setServiceData] = useState({
    name: "",
    description: "",
    image: "",
    isActive: true,
    mainService: "",
  });

  useEffect(() => {
    if (editingService) {
      setServiceData({
        name: editingService.name || "",
        description: editingService.description || "",
        image: editingService.image || "",
        isActive: editingService.isActive !== undefined ? editingService.isActive : true,
        mainService: editingService.mainService || "",
      });
    } else {
      setServiceData({
        name: "",
        description: "",
        image: "",
        isActive: true,
        mainService: "",
      });
    }
  }, [editingService]);

  const handleChange = (e) => {
    setServiceData({ ...serviceData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setServiceData({ ...serviceData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleToggleStatus = () => {
    setServiceData({ ...serviceData, isActive: !serviceData.isActive });
  };

  const handleSubmit = () => {
    if (serviceData.name && serviceData.description && serviceData.mainService) {
      handleAddService(serviceData);
      setServiceData({
        name: "",
        description: "",
        image: "",
        isActive: true,
        mainService: "",
      });
      handleClose();
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          position: "relative",
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
          }}
        >
          <CloseIcon />
        </IconButton>

        <Typography variant="h6" fontWeight="bold" mb={2}>
          {editingService ? "Edit Service" : "Add New Service"}
        </Typography>

        <TextField
          fullWidth
          label="Service Name"
          name="name"
          value={serviceData.name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Service Description"
          name="description"
          value={serviceData.description}
          onChange={handleChange}
          margin="normal"
        />

        <FormControl fullWidth margin="normal">
          <InputLabel>Main Service</InputLabel>
          <Select
            name="mainService"
            value={serviceData.mainService}
            onChange={handleChange}
            label="Main Service"
          >
            {mainServices.map((service) => (
              <MenuItem key={service.id} value={service.name}>
                {service.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControlLabel
          control={<Switch checked={serviceData.isActive} onChange={handleToggleStatus} color="primary" />}
          label={
            <Box display="flex" alignItems="center">
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  bgcolor: serviceData.isActive ? "green" : "red",
                  marginRight: 1,
                }}
              />
              {serviceData.isActive ? "Active" : "Inactive"}
            </Box>
          }
          sx={{ mt: 2 }}
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ marginTop: "10px" }}
        />

        <Box mt={2}>
          <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>
            {editingService ? "Update" : "Add"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default NewSubServiceModal;
