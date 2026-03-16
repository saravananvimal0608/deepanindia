"use client";

import { useState, useEffect, useRef } from "react";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Image from "next/image";
import styles from "./Contact.module.css";
import Joinus from "../../../assets/1-removebg-preview.png";
import emailjs from "@emailjs/browser";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import { InputAdornment } from "@mui/material";
import { usePathname } from "next/navigation";
import BlogImg from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";

/* 
Important:
This Contact component is used on multiple pages.
We use `usePathname` from "next/navigation" to check the current route.

If the current path is "/contact/contact", some sections like the background
image and heading will be hidden.

If you want to add more route conditions, update the pathname check here.
*/

export default function Contact() {
  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interested_in: "",
    message: "",
  });
  const formRef = useRef(null); // Create a ref for the form

  const pathname = usePathname();
  let pathNameCheck = pathname === "/contact/contact";

  // Initialize EmailJS with the public key
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    console.log("====================================");
    console.log(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    console.log("====================================");
  }, []);

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      interested_in: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    if (!checked) {
      alert("You must agree to the Privacy Policy.");
      return;
    }

    try {
      const emailResponse = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY, // Pass public key explicitly
      );
      console.log("emailResponse", emailResponse);

      if (emailResponse.status === 200 && emailResponse.text === "OK") {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          interested_in: "",
          message: "",
        });
        setChecked(false);
        formRef.current.reset(); // Reset the form
      } else {
        alert("Email failed. Please try again later.");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      alert(
        `Failed to send email: ${error.text || "Please check your EmailJS configuration."}`,
      );
    }
  };

  return (
    <div className={styles.mainDiv} id="contact">
      {!pathNameCheck && (
        <>
          {" "}
          <Image
            src={BlogImg}
            alt="Background"
            fill
            style={{
              objectFit: "cover",
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              zIndex: 2,
            }}
          />
        </>
      )}

      <Container
        maxWidth="lg"
        sx={{
          pt: 3,
          position: "relative",
          zIndex: 3,
        }}
      >
        {!pathNameCheck && (
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              my: 5,
              color: "white",
            }}
          >
            Let's partner for #Dream2Reach Deepan India
          </Typography>
        )}
        <Grid
          container
          spacing={4}
          alignItems="center"
          sx={{
            ...(!pathNameCheck && {
              backgroundColor: "white",
              padding: "40px",
              borderRadius: "10px",
            }),
          }}
        >
          {/* Left Panel */}
          <Grid item xs={12} md={6}>
            <Box display="flex" flexDirection="column" mb={3}>
              <Typography
                sx={{
                  fontWeight: 900,
                  color: "#49326b",
                  fontSize: { xs: "20px", sm: "30px" },
                  mb: 2,
                }}
              >
                How to Get Started?
              </Typography>

              <Typography
                sx={{ color: "#49326b", fontSize: "16px", fontWeight: "bold" }}
              >
                Speak with our experts.
              </Typography>

              <Typography
                sx={{ color: "#49326b", fontSize: "16px", fontWeight: "bold" }}
              >
                Share your financial needs and expectations.
              </Typography>

              <Typography
                sx={{ color: "#49326b", fontSize: "16px", fontWeight: "bold" }}
              >
                Get a personalized, detailed financial freedom plan designed just
                for you.
              </Typography>
            </Box>

            <Box sx={{ border: "2px solid #49326B " }}></Box>

            <Image
              src={Joinus}
              alt="joinus"
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
              className={styles.joinusImage}
            />
          </Grid>

          {/* Right Panel - Form */}
          <Grid item xs={12} md={6}>
            <form ref={formRef} onSubmit={handleSubmit}>
              {/* Name */}
              <Box mb={2}>
                <TextField
                  fullWidth
                  label="Enter your Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  InputLabelProps={{
                    sx: { color: "#49326B" },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#49326B",
                    },
                    "& input::placeholder": {
                      color: "#49326B",
                      opacity: 1,
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon sx={{ color: "#49326B" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              {/* Email */}
              <Box mb={2}>
                <TextField
                  fullWidth
                  label="Enter your Email ID"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  InputLabelProps={{
                    sx: { color: "#49326B" },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#49326B",
                    },
                    "& input::placeholder": {
                      color: "#49326B",
                      opacity: 1,
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon sx={{ color: "#49326B" }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              {/* Phone */}
              <Box mb={2}>
                <TextField
                  fullWidth
                  label="Enter your Mobile Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                  InputLabelProps={{
                    sx: { color: "#49326B" },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#49326B",
                    },
                    "& input::placeholder": {
                      color: "#49326B",
                      opacity: 1,
                    },
                  }}
                />
              </Box>

              {/* Select */}
              <Box mb={2}>
                <FormControl
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                    },
                    "& .MuiInputLabel-root": {
                      color: "#49326B",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#49326B",
                    },
                  }}
                >
                  <InputLabel id="interest-select">
                    I am interested in
                  </InputLabel>

                  <Select
                    labelId="interest-select"
                    name="interested_in"
                    value={formData.interested_in}
                    label="I am interested in"
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value="Training">Training</MenuItem>
                    <MenuItem value="Coding"> Coding</MenuItem>
                    <MenuItem value="Algo Trading">Algo Trading</MenuItem>
                    <MenuItem value="Partnership">Partnership</MenuItem>
                    <MenuItem value="Others">Others</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {/* Message */}
              <Box mb={2}>
                <TextareaAutosize
                  minRows={6}
                  placeholder="Tell us about your financial goals and any specific requirements..."
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    borderRadius: "12px",
                    color: "#000",
                  }}
                  className={styles.customPlaceholder}
                />
              </Box>

              <FormGroup>
                <FormControlLabel
                  sx={{ color: "grey" }}
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={handleCheckboxChange}
                      name="agreeToCommunication"
                    />
                  }
                  label="* I agree to receive communication from DeepanIndia."
                />
              </FormGroup>

              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#49326b",
                  color: "#1E72CB",
                  "&:hover": { backgroundColor: "#39255b" },
                  padding: "10px 20px",
                  borderRadius: "20px",
                  width: "100%",
                }}
              >
                Get Started Today
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
