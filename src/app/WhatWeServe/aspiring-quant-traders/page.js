"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { keyframes } from "@emotion/react";
import Image from "next/image";
import Image1 from "../../../assets/aspiring-quant-traders.png";
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
  width: "75%",
  margin: "10px 0 10px 0",
});

/* ---------------- COMPONENT ---------------- */

const AspiringQuant = () => {
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
          ASPIRING QUANT TRADERS
        </Typography>
      </Box>

      <SectionWrapper>
        <Container maxWidth="lg">
          {/* SECTION 1 */}
          <Grid container spacing={4} alignItems="center">

            <Grid size={{ xs: 12 }}>
              <Typography variant="h6" sx={{ color: "#49326b" }}>
                We bridge the gap between theory and practical quant execution.         </Typography>
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
                <SectionTitle>For traders who want to understand systematic trading in markets, Deepan India provides:
                </SectionTitle>

                <Typography sx={{ mt: 2, color: "#49326b" }}>
                  <RadioButtonCheckedIcon
                    style={{ paddingRight: "10px", fontSize: "35px" }}
                  />
                  Quant strategy frameworks

                </Typography>

                <Typography sx={{ color: "#49326b" }}>

                  <RadioButtonCheckedIcon
                    style={{ paddingRight: "10px", fontSize: "35px" }}
                  />Diversified strategies portfolio

                </Typography>

                <Typography sx={{ color: "#49326b" }}>
                  <RadioButtonCheckedIcon
                    style={{ paddingRight: "10px", fontSize: "35px" }}
                  />Backtesting concepts

                </Typography>

                <Typography sx={{ color: "#49326b" }}>
                  <RadioButtonCheckedIcon
                    style={{ paddingRight: "10px", fontSize: "35px" }}
                  />AI-assisted optimisation methods

                </Typography>

                <Typography sx={{ color: "#49326b" }}>
                  <RadioButtonCheckedIcon
                    style={{ paddingRight: "10px", fontSize: "35px" }}
                  />Risk & money management education

                </Typography>

                <Typography sx={{ color: "#49326b" }}>
                  <RadioButtonCheckedIcon
                    style={{ paddingRight: "10px", fontSize: "35px" }}
                  />Algo deployment understanding
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
                    height: "364px",
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

export default AspiringQuant;