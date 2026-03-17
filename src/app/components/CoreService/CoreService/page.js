"use client";

import Image from "next/image";
import { Container, Grid, Box, Typography, Divider } from "@mui/material";
import core2 from "../../../../assets/image.png";
import core1 from '../../../../assets/core-1.png'
import core3 from '../../../../assets/core-3.avif'
import core4 from '../../../../assets/core-4.avif'

import styled from "styled-components";

const StyledDivider = styled(Divider)({
  backgroundColor: "#e4d4fa",
  height: "10px",
  width: "30%",
});

const CoreService = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f9f3fe",
        position: "relative",
        overflow: "hidden",
        py: { xs: 4, md: 8 },
      }}
    >
      <Container sx={{ my: 5 }}>
        {/* Title */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            mb: 5,
          }}
        >
          <Typography
            align="center"
            gutterBottom
            sx={{
              fontSize: { xs: "2.5rem", sm: "3rem", md: "3rem" },
              fontWeight: 600,
              color: "#49326B",
            }}
          >
            Our Core Services
          </Typography>

          <StyledDivider />
        </Box>

        {/* Row 1 */}
        <Grid container spacing={3} justifyContent="space-around">
          <Grid item xs={12} sm={6} md={3}>
            <Box display="flex" alignItems="center" flexDirection="column">
              <Image
                src={core2}
                alt="core-service"
                width={300}
                height={200}
                style={{ borderRadius: "10px" }}
              />

              <Typography
                sx={{
                  color: "#49326B",
                  fontWeight: 600,
                  textAlign: "center",
                  pt: 2,
                  fontSize: "1.3rem",
                  maxWidth: "280px",
                  wordBreak: "break-word",
                  whiteSpace: "normal",
                }}
              >
                Algorithmic Trading
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box display="flex" alignItems="center" flexDirection="column">
              <Image
                src={core2}
                alt="core-service"
                width={300}
                height={200}
                style={{ borderRadius: "10px" }}
              />

              <Typography
                sx={{
                  color: "#49326B",
                  fontWeight: 600,
                  textAlign: "center",
                  pt: 2,
                  fontSize: "1.3rem",
                  maxWidth: "280px",
                  wordBreak: "break-word",
                  whiteSpace: "normal",
                }}
              >
                Quantitative Strategy Development
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box display="flex" alignItems="center" flexDirection="column">
              <Image
                src={core1}
                alt="core-service"
                width={300}
                height={200}
                style={{ borderRadius: "10px" }}
              />

              <Typography
                sx={{
                  color: "#49326B",
                  fontWeight: 600,
                  textAlign: "center",
                  pt: 2,
                  fontSize: "1.3rem",
                  maxWidth: "280px",
                  wordBreak: "break-word",
                  whiteSpace: "normal",
                }}
              >
                Quant Desk Services
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Row 2 */}
        <Grid container spacing={3} justifyContent="space-evenly" mt={5}>
          <Grid item xs={12} sm={6} md={4}>
            <Box display="flex" alignItems="center" flexDirection="column">
              <Image
                src={core3}
                alt="core-service"
                width={300}
                height={200}
                style={{ borderRadius: "10px" }}
              />

              <Typography
                sx={{
                  color: "#49326B",
                  fontWeight: 600,
                  textAlign: "center",  
                  pt: 2,
                  fontSize: "1.3rem",
                  maxWidth: "280px",
                  wordBreak: "break-word",
                  whiteSpace: "normal",
                }}
              >
                Strategy Deployment & Ongoing Support
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box display="flex" alignItems="center" flexDirection="column">
              <Image
                src={core4}
                alt="core-service"
                width={300}
                height={200}
                style={{ borderRadius: "10px" }}
              />

              <Typography
                sx={{
                  color: "#49326B",
                  fontWeight: 600,
                  textAlign: "center",
                  pt: 2,
                  fontSize: "1.3rem",
                  maxWidth: "280px",
                  wordBreak: "break-word",
                  whiteSpace: "normal",
                }}
              >
                Financial Market Training
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CoreService;