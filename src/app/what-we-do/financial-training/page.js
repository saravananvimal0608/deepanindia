"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { keyframes } from "@emotion/react";
import Image from "next/image";
import Image1 from "../../../assets/financial-training.png";
import Image2 from "../../../assets/financial-training-1.png";
import aboutImg1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import GetStartBtn from "../../components/GetStartBtn/GetStartBtn";

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

const InfoCard = styled(Box)(() => ({
  position: "relative",
  maxWidth: "300px",
  width: "100%",
  border: "10px solid #e4d4fa",
  padding: "20px",
  borderRadius: "16px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  animation: `${fadeIn} 6s ease-in-out infinite alternate`,
  "&:hover": {
    transition: "0.4s",
    boxShadow: "0 20px 40px #49326b",
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: 900,
  color: "#49326b",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.6rem",
  },
}));

const StyledDivider = styled(Divider)({
  backgroundColor: "#e4d4fa",
  height: "10px",
  width: "75%",
  margin: "10px 0 10px 0",
});

/* ---------------- COMPONENT ---------------- */

const FinancialTraining = () => {
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
          FINANCIAL MARKET TRAINING
        </Typography>
      </Box>

      <SectionWrapper>
        <Container maxWidth="lg">
          {/* SECTION 1 */}
          <Grid container spacing={4} alignItems="center">

            <Grid size={{ xs: 12 }}>
              <Typography variant="h6" sx={{ color: "#49326b" }}>
                Our training programs are designed for individuals who want to understand systematic trading at a professional level.
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
                <SectionTitle>Training Areas:


                </SectionTitle>

                <Typography sx={{ mt: 2, color: "#49326b" }}>
                  <RadioButtonCheckedIcon
                    style={{ paddingRight: "10px", fontSize: "35px" }}
                  />
                  Quant Strategy Development
                </Typography>

                <Typography sx={{ color: "#49326b" }}>

                  <RadioButtonCheckedIcon
                    style={{ paddingRight: "10px", fontSize: "35px" }}
                  />Options Strategy Architecture
                </Typography>

                <Typography sx={{ color: "#49326b" }}>
                  <RadioButtonCheckedIcon
                    style={{ paddingRight: "10px", fontSize: "35px" }}
                  />AI-Assisted Strategy Evaluation
                </Typography>

                <Typography sx={{ color: "#49326b" }}>
                  <RadioButtonCheckedIcon
                    style={{ paddingRight: "10px", fontSize: "35px" }}
                  /> Risk & Money Management
                </Typography>

                <Typography sx={{ color: "#49326b" }}>
                  <RadioButtonCheckedIcon
                    style={{ paddingRight: "10px", fontSize: "35px" }}
                  /> Algo Deployment Workflow</Typography>

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
                  width={400}
                  height={260}

                  style={{
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "12px"
                  }}
                />
              </Box>
            </Grid>

          </Grid>

          <Typography variant="h6" sx={{ mt: 4, mb: 6, color: "#49326b" }}>
            We bridge financial literacy through structured market education programs.          </Typography>

          {/* TITLE */}

          <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
            <Typography variant="h3" sx={{ color: "#49326b", fontWeight: 700 ,textAlign: "center"}}>
              Learning the Markets the Right Way            </Typography>

            <StyledDivider />
          </Box>

          {/* SECTION 2 */}

          <Grid container spacing={4} alignItems="center">
            {/* TEXT */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography sx={{ mb: 2, color: "#49326b", fontWeight: 700 }}>
                Priya a home maker wanted to understand the stock market beyond social media tips and random recommendations.



              </Typography>

              <Typography sx={{ mb: 2, color: "#49326b", fontWeight: 700 }}>
                She realized that successful traders often rely on structured knowledge of options strategies, risk management, and systematic trading frameworks.

              </Typography>

              <Typography sx={{ mb: 2, color: "#49326b", fontWeight: 700 }}>
                Through proper financial market training, beginners like Priya can build a strong foundation and gradually learn how disciplined traders approach the markets.
              </Typography>

            </Grid>

            {/* IMAGE */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Image
                  src={Image2}
                  alt="story"
                  width={500}
                  height={350}
                  style={{
                    borderRadius: "10px",
                    objectFit: "cover",
                    width: "100%",
                    maxWidth: "450px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        <GetStartBtn/>

        </Container>
      </SectionWrapper>
    </>
  );
};

export default FinancialTraining;