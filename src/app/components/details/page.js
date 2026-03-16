"use client";

import React, { useEffect } from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slider from "react-slick";
import Cards from "./Cards";
import { defaultCards } from "./DefaultCard.js";
import Image from "next/image";
import BlogImg from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";

import dynamic from "next/dynamic";
import { Divider } from "@mui/material";
import styled from "styled-components";
const SlickSlider = dynamic(() => import("react-slick"), { ssr: false });

export default function Cardpart({ data = [] }) {



  useEffect(() => {
    import("slick-carousel/slick/slick.css");
    import("slick-carousel/slick/slick-theme.css");
  }, []);

  const StyledDivider = styled(Divider)({
    backgroundColor: "#e4d4fa",
    height: "10px",
    width: "30%",
  });

  const sliderData = data.length > 0 ? data : defaultCards;

  const settings = {
    dots: true,
    infinite: sliderData.length > 1,
    speed: 500,
    slidesToShow: Math.min(sliderData.length, 3),
    slidesToScroll: 1,
    arrows: sliderData.length > 1,
    autoplay: sliderData.length > 1,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: Math.min(sliderData.length, 2),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Box
      id="card"
      component="section"
      sx={{
        padding: { xs: "40px 0", sm: "60px 0" },
        background: "linear-gradient(135deg, #f9f3fe 0%, #e6e0fa 100%)",
        position: "relative",
        overflow: "hidden",

        "& .slick-prev, & .slick-next": {
          zIndex: 4,
          width: "40px",
          height: "40px",
          background: "rgba(73, 50, 107, 0.8)",
          borderRadius: "50%",
          transition: "background 0.3s ease",
          "&:hover": {
            background: "#49326b",
          },
        },

        "& .slick-prev:before, & .slick-next:before": {
          fontSize: "24px",
          color: "#fff",
        },

        "& .slick-dots": {
          bottom: "-40px",
        },

        "& .slick-dots li button:before": {
          fontSize: "12px",
          color: "#49326b",
          opacity: 0.5,
        },

        "& .slick-dots li.slick-active button:before": {
          color: "#49326b",
          opacity: 1,
        },
      }}
    >

      {/* Background Image */}
      <Image
        src={BlogImg}
        alt="Background"
        fill
        style={{
          objectFit: "cover",
          zIndex: 1
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 2
        }}
      />

      {/* Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 3
        }}
      >


        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", mb: 5 }}>
          <Typography
            align="center"
            gutterBottom
            sx={{
              fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
              fontWeight: 600,
              color:"white"
            }}
          >
            Popular Blogs
          </Typography>
          <StyledDivider />
        </Box>

        <Box sx={{ padding: { xs: "20px 0", md: "40px 0" } }}>

          <Slider {...settings}>
            {sliderData.map((e) => (
              <Box key={e.id} sx={{ padding: "0 10px" }}>
                <Cards e={e} />
              </Box>
            ))}
          </Slider>

        </Box>

      </Container>

    </Box>
  );
}