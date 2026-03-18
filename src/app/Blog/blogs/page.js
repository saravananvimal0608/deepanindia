"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import Image from "next/image";
import aboutImg1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { defaultCards } from "../../components/details/DefaultCard";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "@mui/material";
/* ---------------- STYLES ---------------- */

const SectionWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#f9f3fe",
  padding: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const images = {
  width: "300px",
  height: "200px",
  objectFit: "cover",
};

/* ---------------- COMPONENT ---------------- */

const Blog = () => {
  const [data, setData] = useState([]);

  const router = useRouter();
  const handleReadMore = (slug) => {
    router.push(`/card-details/${slug || "default"}`);
  };

  useEffect(() => {
    setData(defaultCards);
  }, []);

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

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "40px",
            right: "40px",
            transform: "translateY(-50%)",
            color: "white",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
         <Typography variant="h4" sx={{ fontWeight: 700 }}>
  BLOGS
</Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 3,
              flexDirection: "column",
            }}
          >
            <Link
              href="https://t.me/deepanindia"
              style={{
                backgroundColor: "red",
                width: "209px",
                height: "55px",
                borderRadius: "37px",
                color: "white",
                border: "1px solid red",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              Join Our Community
            </Link>
          </Box>
        </Box>
      </Box>

      <SectionWrapper>
        <Container maxWidth={false}>
          <Grid
            container
            spacing={3}
            alignItems="center"
            justifyContent="center"
          >
            {data.map((d, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={index}
                sx={{ border: "10px solid #49326B", borderRadius: "10px" }}
              >
                <Image src={d.image} alt="asfnd" style={images}></Image>
                <Typography
                  sx={{
                    width: "100%",
                    maxWidth: "280px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    textAlign:"center",
                      p: 1,
                      color:"black"
                  }}
                >
                  {d.title}
                </Typography>
                <Button
                  onClick={() => handleReadMore(d.slug)}
                  sx={{
                    color: "#49326B",
                    border: "1px solid #49326B",
                    textAlign: "center",
                    m: 1,
                    px: 2,
                    py: 1,
                    borderRadius: "20px",
                    textTransform: "none",
                    transition: "all 0.3s ease",

                    "&:hover": {
                      backgroundColor: "#49326B",
                      color: "#fff",
                    },
                  }}
                >
                  Read More →
                </Button>
              </Grid>
            ))}
          </Grid>
        </Container>
      </SectionWrapper>
    </>
  );
};

export default Blog;
