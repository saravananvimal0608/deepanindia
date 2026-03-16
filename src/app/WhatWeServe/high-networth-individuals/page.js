"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { keyframes } from "@emotion/react";
import Image from "next/image";
import Image1 from "../../../assets/what-we-serve-1.avif";

// import Image1 from "../../../assets/high-networth.png";
import aboutImg1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

/* ---------------- ANIMATION ---------------- */

const fadeIn = keyframes`
  0% { transform: scale(1.02); }
  50% { transform: scale(1.03); }
  100% { transform: scale(1); }
`;

/* ---------------- STYLES ---------------- */

const SectionWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#f9f3fe",
  padding: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));



const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: 900,
  color: "#49326b",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.6rem",
  },
}));

/* ---------------- COMPONENT ---------------- */

const HighNetWorth = () => {
  return (
    <>
      {/* HERO IMAGE */}
      <Box sx={{ position: "relative", width: "100%" }}>
        <Image
          src={aboutImg1}
          alt="banner"
          style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
          }}
        />

        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            top: "50%",
            left: "40px",
            transform: "translateY(-50%)",
            color: "white",
            fontWeight: "bold",
          }}
        >
          HIGH NET WORTH INDIVIDUALS (HNI)
        </Typography>
      </Box>

      <SectionWrapper>
        <Container maxWidth="lg">
          {/* SECTION 1 */}
          <Grid container spacing={4} alignItems="center">

            <Grid size={{ xs: 12 }}>
              <Typography variant="h6" sx={{ color: "#49326b" }}>
                Our Quant Desk in India focuses on consistency, drawdown control, and systematic growth not speculative exposure.
              </Typography>
            </Grid>

            {/* TEXT */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  border: "10px solid #e4d4fa",
                  borderRadius: "30px",
                  padding: "20px",
                  height: "100%"
                }}
              >
                <SectionTitle>For HNIs seeking structured capital deployment, Deepan India offers:

                </SectionTitle>

                <Typography sx={{ mt: 2, color: "#49326b" }}>
                  <RadioButtonCheckedIcon
                    style={{ paddingRight: "10px", fontSize: "35px" }}
                  />
                  Multi-strategy portfolio construction


                </Typography>

                <Typography sx={{ color: "#49326b" }}>

                  <RadioButtonCheckedIcon
                    style={{ paddingRight: "10px", fontSize: "35px" }}
                  />Quant research-backed systems


                </Typography>

                <Typography sx={{ color: "#49326b" }}>
                  <RadioButtonCheckedIcon
                    style={{ paddingRight: "10px", fontSize: "35px" }}
                  />Risk management structuring


                </Typography>

                <Typography sx={{ color: "#49326b" }}>
                  <RadioButtonCheckedIcon
                    style={{ paddingRight: "10px", fontSize: "35px" }}
                  /> Performance analytics & reporting


                </Typography>

                <Typography sx={{ color: "#49326b" }}>
                  <RadioButtonCheckedIcon
                    style={{ paddingRight: "10px", fontSize: "35px" }}
                  /> Capital optimisation models
                </Typography>
              </Box>
            </Grid>

            {/* IMAGE */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={Image1}
                  alt="algo"
                  style={{
                    width: "100%",
                    height: "320px",
                    objectFit: "cover",
                    borderRadius: "12px"
                  }}
                />
              </Box>
            </Grid>

          </Grid>

        </Container>
      </SectionWrapper>
    </>
  );
};

export default HighNetWorth;