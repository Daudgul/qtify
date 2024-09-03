import {
  Box,
  Button,
  Fade,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Backdrop from "@mui/material/Backdrop";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "526px",
  height: "524px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

function CustomModal({ open, handleClose, handleOpen }) {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      description: "",
    });
    handleClose();
  };
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box display={"flex"} alignItems={"center"} mb={3}>
              <Typography
                color={"#121212"}
                textAlign={"center"}
                variant="p"
                component={"h1"}
                fontSize={"16px"}
                fontWeight={"600"}
                lineHeight={"24px"}
                flex={1}
              >
                Feedback
              </Typography>
              <IconButton onClick={handleClose} aria-label="Close">
                <CloseIcon style={{ color: "#121212", fontSize: "16px" }} />
              </IconButton>
            </Box>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                // maxWidth: 400,
                // margin: "0 auto",
                // padding: 2,
              }}
              onSubmit={handleSubmit}
            >
              <TextField
                name="fullName"
                placeholder="Full Name"
                variant="outlined"
                value={formData.fullName}
                onChange={handleChange}
                fullWidth
                required
                size="small"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#34C94B", // Change border color to green
                    },
                    "&:hover fieldset": {
                      borderColor: "#34C94B", // Change hover border color to green
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#34C94B", // Change focused border color to green
                    },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#121212",
                  },
                }}
              />
              <TextField
                size="small"
                name="email"
                // label="Email"
                placeholder="Email"
                variant="outlined"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#34C94B", // Change border color to green
                    },
                    "&:hover fieldset": {
                      borderColor: "#34C94B", // Change hover border color to green
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#34C94B", // Change focused border color to green
                    },
                  },
                  "& .MuiOutlinedInput-input::placeholder": {
                    color: "#121212", // Change placeholder color
                  },
                }}
              />
              <TextField
                size="small"
                name="subject"
                placeholder="Subject"
                variant="outlined"
                value={formData.subject}
                onChange={handleChange}
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#34C94B", // Change border color to green
                    },
                    "&:hover fieldset": {
                      borderColor: "#34C94B", // Change hover border color to green
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#34C94B", // Change focused border color to green
                    },
                  },
                  "& .MuiOutlinedInput-input::placeholder": {
                    color: "#121212", // Change placeholder color
                  },
                }}
              />
              <TextField
                size="small"
                name="description"
                placeholder="Description"
                variant="outlined"
                multiline
                rows={4}
                value={formData.description}
                onChange={handleChange}
                fullWidth
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#34C94B", // Change border color to green
                    },
                    "&:hover fieldset": {
                      borderColor: "#34C94B", // Change hover border color to green
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#34C94B", // Change focused border color to green
                    },
                  },
                  "& .MuiOutlinedInput-input::placeholder": {
                    color: "#121212", // Change placeholder color
                  },
                }}
              />
              <Button
                sx={{
                  width: "192px",
                  height: "53px",
                  borderRadius: "12px",
                  color: "white",
                  mx: "auto",
                  textTransform: "capitalize",
                }}
                type="submit"
                variant="contained"
                color="primary"
              >
                Submit feedback
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default CustomModal;
