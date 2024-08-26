import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import logoImg from "../assets/logo.png";
import CloseIcon from "@mui/icons-material/Close";
import {
  Autocomplete,
  TextField,
  InputAdornment,
  Button,
  Fade,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import { Height } from "@mui/icons-material";

const options = [
  "JavaScript",
  "React",
  "Material-UI",
  "Node.js",
  "CSS Flexbox",
  "GraphQL",
];

function ResponsiveAppBar() {
  const [value, setValue] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            // href="#app-bar-with-responsive-menu"
            // sx={{
            //   mr: 2,
            //   display: { xs: "none", md: "flex" },
            //   fontFamily: "monospace",
            //   fontWeight: 700,
            //   letterSpacing: ".3rem",
            //   color: "inherit",
            //   textDecoration: "none",
            // }}
          >
            <img src={logoImg} alt="App logo image" />
          </Typography>
          <Box>
            {" "}
            <Autocomplete
              freeSolo
              options={options}
              inputValue={value}
              onInputChange={(event, newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  placeholder="Search..."
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <InputAdornment position="end">
                        <Box borderLeft={"1px solid black"}>
                          <SearchIcon />
                        </Box>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />{" "}
          </Box>
          <Box>
            <Button variant="contained" color="secondary" onClick={handleOpen}>
              {" "}
              <span
                style={{
                  color: "#34c94b",
                  textTransform: "capitalize",
                  fontWeight: "600",
                  fontSize: "18px",
                }}
              >
                {" "}
                Give feedback
              </span>
            </Button>
          </Box>
        </Toolbar>
        <CustomModal
          open={open}
          handleClose={handleClose}
          handleOpen={handleOpen}
        />
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

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
    console.log(formData); // Handle form submission (e.g., send data to an API)
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
