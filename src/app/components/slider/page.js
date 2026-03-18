"use client";

import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from "next/image";
import BackGroundImage1 from "../../../assets/home-image.jpg";

const SlideShowBar = () => {
  return (
    <MainBox
    >
      <Image
        src={BackGroundImage1}
        alt="Background image"
        fill
        quality={100}
        priority
        style={{ objectFit: "cover" }}
      />
      <Overlay />

      <ContentBox>
        <Typography className="title" component="h1">
          A Technology-Driven <br /> Quant Desk in India
        </Typography>
        <Typography className="description">Algorithmic Trading | Quant Research | Strategy Deployment</Typography>
        <Link href="#contact" passHref>
          <Button variant="contained" className="ctaButton">
           Get Started
          </Button>
        </Link>
      </ContentBox>
    </MainBox>
  );
};

const MainBox = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "600px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  paddingLeft: theme.spacing(4),
  overflow: "hidden",
  boxSizing: "border-box",
  [theme.breakpoints.down("md")]: {
    height: "450px",
    paddingLeft: theme.spacing(2),
    justifyContent: "center", // Center content on smaller screens
  },
  [theme.breakpoints.down("sm")]: {
    height: "350px",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));

const Overlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background:
    "linear-gradient(to right, rgba(73, 50, 107, 0.8), rgba(73, 50, 107, 0.4))",
  zIndex: 2,
}));

const ContentBox = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 4,
  textAlign: "left",
  color: "#fff",
  padding: theme.spacing(4),
  boxSizing: "border-box",
  // maxWidth: "600px", // Limit content width for readability
  [theme.breakpoints.down("sm")]: {
    textAlign: "center", // Center text on mobile
    padding: theme.spacing(2),
  },
  "& .title": {
    fontSize: "3.5rem",
    fontWeight: 700,
    lineHeight: 1.2,
    color: "#e4d4fa",
    marginBottom: theme.spacing(2),
    position: "relative",
    zIndex: 5,
    [theme.breakpoints.down("lg")]: {
      fontSize: "2.8rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "2.2rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.6rem",
    },
  },
  "& .subTitle": {
    fontSize: "1.5rem",
    fontWeight: 600,
    marginBottom: theme.spacing(1.5),
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.25rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  "& .description": {
    fontSize: "1.25rem",
    marginBottom: theme.spacing(3),
    lineHeight: 1.6,
    fontWeight: 600,
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.1rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.875rem",
    },
  },
  "& .ctaButton": {
    padding: theme.spacing(1.5, 4),
    fontSize: "1.25rem",
    fontWeight: 600,
    backgroundColor: "#ff4d4f",
    textTransform: "none",
    borderRadius: "30px",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "#e63946",
      transform: "scale(1.05)",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.1rem",
      padding: theme.spacing(1.2, 3),
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.875rem",
      padding: theme.spacing(1, 2),
    },
  },
  "& .arrowIcon": {
    fontSize: "1.25rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.875rem",
    },
  },
}));



export default SlideShowBar;
