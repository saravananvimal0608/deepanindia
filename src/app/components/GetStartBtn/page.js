import React from 'react'
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { keyframes } from "@emotion/react";
import Link from 'next/link';

const GetStartBtn = () => {
    /* ---------------- CTA SECTION ---------------- */
    
    const CTAWrapper = styled(Box)(({ theme }) => ({
      marginTop: "60px",
      padding: "30px 40px",
      borderRadius: "14px",
      background: "linear-gradient(90deg,#4b2c6f,#7c4bb3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      flexWrap: "wrap",
    
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        textAlign: "center",
        gap: "15px",
      },
    }));
    
    const pressEffect = keyframes`
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(0.95);
      }
      100% {
        transform: scale(1);
      }
    `;
    
    const gradientMove = keyframes`
      0% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    `;
    
    const CTAButton = styled(Button)(({ theme }) => ({
      color: "white",
      fontWeight: 700,
      borderRadius: "30px",
      padding: "10px 24px",
      textTransform: "none",
      fontSize: "16px",
    
      background: "linear-gradient(90deg,#4b2c6f,#7c4bb3,#9b6edb)",
      backgroundSize: "200% 200%",
    
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    
      animation: `
        ${pressEffect} 2s ease-in-out infinite,
        ${gradientMove} 3s linear infinite
      `,
    
      "&:hover": {
        transform: "scale(1.05)",
      }
    }));
  return (
      <CTAWrapper>
            <Box>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: 800,
                  color: "#ffffff",
                }}
              >
                Get Started
              </Typography>

              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#e9ddff",
                }}
              >
                Let’s partner for{" "}
                <span style={{ color: "#cbb4ff" }}>#Dream2Reach</span> with
                Deepan India
              </Typography>
            </Box>

            <CTAButton><Link href="/#contact">Get Started Today →</Link></CTAButton>
          </CTAWrapper>
  )
}

export default GetStartBtn