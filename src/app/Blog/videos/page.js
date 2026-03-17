"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import aboutImg1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";
import Image from "next/image";


/* ---------------- STYLES ---------------- */

const SectionWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#f9f3fe",
  padding: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));


/* ---------------- COMPONENT ---------------- */

const Videos = () => {
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
          VIDEOS
        </Typography>
      </Box>

      <SectionWrapper>
        <Container maxWidth="lg">
          <Grid container spacing={3} alignItems="center" justifyContent="center">

            <Grid item xs={12} sm={12} md={4} sx={{ border: "10px solid #49326B", borderRadius: "10px" }}>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/xHU5MHuUSKI"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Grid>

            <Grid item xs={12} sm={12} md={4} sx={{ border: "10px solid #49326B", borderRadius: "10px" }}>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/xHU5MHuUSKI"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Grid>

            <Grid item xs={12} sm={12} md={4} sx={{ border: "10px solid #49326B", borderRadius: "10px" }}>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/xHU5MHuUSKI"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Grid>

          </Grid>

        </Container>
      </SectionWrapper>
    </>
  );
};

export default Videos;