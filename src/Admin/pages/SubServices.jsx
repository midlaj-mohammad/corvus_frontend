import React, { useState } from "react";
import {
  Button,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import NewSubServiceModal from "../components/NewSubServiceModal"; // Updated import
import { useNavigate } from "react-router-dom";

const SubServices = () => {
  const [open, setOpen] = useState(false);
  const [subServices, setSubServices] = useState([]);
  const [editingSubService, setEditingSubService] = useState(null);

  // Sample main services for dropdown
  const mainServices = [
    { id: 1, name: "Cleaning" },
    { id: 2, name: "Plumbing" },
    { id: 3, name: "Electrical" },
  ];

  const handleOpen = () => {
    setEditingSubService(null);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingSubService(null);
  };

  const handleAddOrUpdateSubService = (newSubService) => {
    if (editingSubService) {
      setSubServices(
        subServices.map((subService, index) =>
          index === editingSubService.index ? newSubService : subService
        )
      );
    } else {
      setSubServices([...subServices, newSubService]);
    }
    handleClose();
  };

  const handleEdit = (index) => {
    setEditingSubService({ ...subServices[index], index });
    setOpen(true);
  };

  return (
    <div>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={3}
        bgcolor="#f9fafb"
      >
        <Typography variant="h6" fontWeight="bold" color="text.primary">
          Sub Services
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            backgroundColor: "#1e293b",
            "&:hover": { backgroundColor: "#111827" },
          }}
          onClick={handleOpen}
        >
          New Sub Service
        </Button>
      </Box>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {subServices.length > 0 ? (
          subServices.map((subService, index) => (
            <Card key={index} sx={{ maxWidth: 345, boxShadow: 3 }}>
              {subService.image && (
                <CardMedia
                  component="img"
                  height="180"
                  image={subService.image}
                  alt={subService.name}
                />
              )}
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {subService.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {subService.description}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Main Service: {subService.mainService}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <Button size="small" color="primary" onClick={() => handleEdit(index)}>
                    Edit
                  </Button>
                  <Button size="small" color="error">
                    Block
                  </Button>
                </div>
                <IconButton
                  sx={{
                    padding: "2px 14px",
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "50%",
                    "&:hover": { backgroundColor: "#333" },
                  }}
                >
                  +
                </IconButton>
              </CardActions>
            </Card>
          ))
        ) : (
          <Typography className="text-center text-gray-500">
            No sub-services added yet.
          </Typography>
        )}
      </div>

      {/* Modal for adding/editing sub-services */}
      <NewSubServiceModal
        open={open}
        handleClose={handleClose}
        handleAddService={handleAddOrUpdateSubService}
        editingService={editingSubService}
        mainServices={mainServices} // Pass main services for dropdown
      />
    </div>
  );
};

export default SubServices;
