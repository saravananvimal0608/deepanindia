"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { keyframes } from "@emotion/react";
import Image from "next/image";
import Image1 from "../../../assets/strategy-main.png";
import Image2 from "../../../assets/strategy.png";
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

const StrategyDeployment = () => {
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
          STRATEGY DEPLOYMENT & ONGOING SUPPORT
        </Typography>
      </Box>

      <SectionWrapper>
        <Container maxWidth="lg">
          {/* SECTION 1 */}
          <Grid container spacing={4} alignItems="center">

            <Grid size={{ xs: 12 }}>
              <Typography variant="h6" sx={{ color: "#49326b" }}>
                Execution without monitoring is incomplete.
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
                <SectionTitle>We provide:

                </SectionTitle>

                <Typography sx={{ mt: 2, color: "#49326b" }}>
                  <RadioButtonCheckedIcon
                    style={{ paddingRight: "10px", fontSize: "35px" }}
                  />
                  Strategy Onboarding Assistance

                </Typography>

                <Typography sx={{ color: "#49326b" }}>

                  <RadioButtonCheckedIcon
                    style={{ paddingRight: "10px", fontSize: "35px" }}
                  />Capital Allocation Guidance


                </Typography>

                <Typography sx={{ color: "#49326b" }}>
                  <RadioButtonCheckedIcon
                    style={{ paddingRight: "10px", fontSize: "35px" }}
                  />Periodic Performance Updates

                </Typography>

                <Typography sx={{ color: "#49326b" }}>
                  <RadioButtonCheckedIcon
                    style={{ paddingRight: "10px", fontSize: "35px" }}
                  /> Continuous Monitoring & Refinement
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
            Every deployment is aligned with the client’s risk appetite and capital exposure in Deepan India
          </Typography>

          {/* TITLE */}

          <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
            <Typography variant="h3" sx={{ color: "#49326b", fontWeight: 700, textAlign: "center" }}>
              Execution Matters as Much as Strategy
            </Typography>

            <StyledDivider />
          </Box>

          {/* SECTION 2 */}

          <Grid container spacing={4} alignItems="center">
            {/* TEXT */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography sx={{ mb: 2, color: "#49326b", fontWeight: 700 }}>
                Dr. Karthik, a busy medical professional, wanted to participate in financial markets but had limited time to actively manage trades.


              </Typography>

              <Typography sx={{ mb: 2, color: "#49326b", fontWeight: 700 }}>
                He understood the importance of having a structured strategy, but execution and monitoring remained a challenge.

              </Typography>

              <Typography sx={{ mb: 2, color: "#49326b", fontWeight: 700 }}>
                That’s when he explored the concept of strategy deployment and systematic execution, where trading systems are monitored, strategies are deployed properly, and performance is reviewed periodically.

              </Typography>

              <Typography sx={{ color: "#49326b", fontWeight: 700 }}>
                For professionals with demanding careers, structured deployment helps ensure strategies operate as intended without constant manual intervention.

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

export default StrategyDeployment;