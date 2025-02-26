import React, { useState } from "react";
import { Button, Typography, Box, Card, CardContent, CardActions, CardMedia, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import NewServiceModal from "./NewServiceModal";
import { useNavigate } from "react-router-dom";

const ServiceManagement = () => {
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState([]); // Store added services
  const [editingService, setEditingService] = useState(null); // Store service being edited
  const navigate = useNavigate();

  const handleOpen = () => {
    setEditingService(null); // Reset editing service
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingService(null);
  };

  const handleAddOrUpdateService = (newService) => {
    if (editingService) {
      // Update existing service
      setServices(services.map((service, index) =>
        index === editingService.index ? newService : service
      ));
    } else {
      // Add new service
      setServices([...services, newService]);
    }
    handleClose();
  };

  const handleEdit = (index) => {
    setEditingService({ ...services[index], index }); // Pass index along with service details
    setOpen(true);
  };

  return (
    <div>
      <Box display="flex" justifyContent="space-between" alignItems="center" p={3} bgcolor="#f9fafb">
        <Typography variant="h6" fontWeight="bold" color="text.primary">
          Main Services
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ backgroundColor: "#1e293b", "&:hover": { backgroundColor: "#111827" } }}
          onClick={handleOpen}
        >
          New Service
        </Button>
      </Box>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 p-4">
        {services.length > 0 ? (
          services.map((service, index) => (
            <Card key={index} sx={{ maxWidth: 345, boxShadow: 3 }}>
              {service.image && (
                <CardMedia
                  component="img"
                  height="180"
                  image={service.image} // Display uploaded image
                  alt={service.name}
                />
              )}
              <CardContent>
                <Typography variant="h6" fontWeight="bold">{service.name}</Typography>
                <Typography variant="body2" color="text.secondary">{service.description}</Typography>
              </CardContent>
              <CardActions sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <Button size="small" color="primary" onClick={() => handleEdit(index)}>Edit</Button>
                  <Button size="small" color="error">Block</Button>
                </div>

                {/* Rounded Black + Icon Button */}
                <IconButton sx={{ padding: "2px 14px", backgroundColor: "black", color: "white", borderRadius: "50%", "&:hover": { backgroundColor: "#333" } }}>
                  +
                </IconButton>
              </CardActions>
            </Card>
          ))
        ) : (
          <Typography className="text-center text-gray-500">No services added yet.</Typography>
        )}
      </div>

      {/* Modal for adding/editing services */}
      <NewServiceModal
        open={open}
        handleClose={handleClose}
        handleAddService={handleAddOrUpdateService}
        editingService={editingService} // Pass editing service to modal
      />
    </div>
  );
};

export default ServiceManagement;
