"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { keyframes } from "@emotion/react";
import Image from "next/image";
import Image1 from "../../../assets/deepan-india.webp";
import aboutImg1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import Link from "next/link";

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
  fontSize: "1.2rem",
  fontWeight: 900,
  color: "#49326b",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.6rem",
  },
}));

const StyledDivider = styled(Divider)({
  backgroundColor: "#e4d4fa",
  height: "10px",
  width: "30%",
  margin: "10px 0 10px 0",
});

/* ---------------- COMPONENT ---------------- */

const About = () => {
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
          ABOUT US
        </Typography>
      </Box>

      <SectionWrapper>
        <Container maxWidth="lg">
          {/* SECTION 1 */}
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12 }}>
              <Typography variant="h6" sx={{ color: "#49326b" }}>
                Deepan India Financial Services Pvt. Ltd. is an emerging leader
                in Quant Trading in India, focused on building rule-based,
                data-backed trading systems across derivatives and multi-asset
                strategies. As a growing Algo Trading firm in Chennai, we aim to
                bridge the gap between technology and disciplined market
                participation.{" "}
              </Typography>
            </Grid>

            {/* TEXT */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  border: "10px solid #e4d4fa",
                  borderRadius: "30px",
                  padding: "20px",
                  height: "100%",
                }}
              >
                <SectionTitle>
                  Our foundation is built on three pillars:
                </SectionTitle>

                <Typography sx={{ mt: 2, color: "#49326b" }}>
                  <RadioButtonCheckedIcon
                    style={{ paddingRight: "10px", fontSize: "35px" }}
                  />
                  Data-Driven Decision Making Every strategy is researched,
                  back-tested, and performance-analysed before deployment.
                </Typography>

                <Typography sx={{ color: "#49326b" }}>
                  <RadioButtonCheckedIcon
                    style={{ paddingRight: "10px", fontSize: "35px" }}
                  />
                  Risk-First Philosophy Capital protection and structured
                  allocation remain our priority.
                </Typography>

                <Typography sx={{ color: "#49326b" }}>
                  <RadioButtonCheckedIcon
                    style={{ paddingRight: "10px", fontSize: "35px" }}
                  />
                  Technology-Led Execution We leverage automation, optimization
                  models, and systematic trade management.
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
                    height: "282px",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>

          {/* TITLE */}

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              mt:5
            }}
          >
            <Typography
              variant="h3"
              sx={{ color: "#49326b", fontWeight: 700, textAlign: "center" }}
            >
              Our Story
            </Typography>

            <StyledDivider />
          </Box>

          {/* SECTION 2 */}

          <Grid container spacing={4} sx={{ mt: 2 }} justifyContent={"center"}>
            {/* IMAGE */}
            {/* <Grid size={{ xs: 12, md: 6 }}>
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
                        </Grid> */}

            {/* TEXT */}
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  mb: 2,
                  color: "#49326b",
                  fontWeight: 500,
                  textAlign: "justify",
                  lineHeight: 1.8,
                }}
              >
                Deepan India was founded under the leadership of our CEO,
                <b>
                  <Link href={"https://www.linkedin.com/in/raja-subramanian-6b4a1430b/ "}> Mr. Raja Yogi</Link>
                </b>
                , a veteran with 25+ years of experience in financial markets.
                Starting his career as a Floor Assistant at the Madras Stock
                Exchange, he later became an Authorized Partner for reputed NSE
                brokers. Over the years, he witnessed the challenges faced by
                investors and traders due to a lack of adequate knowledge,
                emotional decision-making, and inefficient trade execution.
              </Typography>

              <Typography
                sx={{
                  color: "#49326b",
                  fontWeight: 500,
                  textAlign: "justify",
                  lineHeight: 1.8,
                }}
              >
                Determined to bridge this gap, he established Deepan India with
                a vision to provide customized, performance-driven investment
                solutions that truly benefit clients. Today, he leads our Quant
                research and trading desk, ensuring investors receive expert
                guidance, training, innovative strategies, and lifelong
                financial support.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default About;
