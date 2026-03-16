"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { keyframes } from "@emotion/react";
import Image from "next/image";
import insta from "../../../assets/icons/3.png";
import pinterest from "../../../assets/icons/6.png";
import fb from "../../../assets/icons/5.png";
import yt from "../../../assets/icons/7.png";
import tele from "../../../assets/icons/8.png";
import linkedIn from "../../../assets/icons/4.png";
import call from "../../../assets/icons/1.png";
import mail from "../../../assets/icons/2.png";
import map from "../../../assets/icons/9.png";
import aboutImg1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";
import Link from "next/link";
import Contact from "../../components/Contact/page";

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

/* ---------------- COMPONENT ---------------- */

const ContactPage = () => {
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
          LET'S CONNECT
        </Typography>
      </Box>

      <SectionWrapper>
        <Container maxWidth="lg" sx={{ pb: 5 }}>
          {/* SECTION 1 */}
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box>
                <Typography sx={{ color: "#49326b" }}>
                  Have questions about algo trading strategies, quant services,
                  or partnership opportunities? Our team at Deepan India is here
                  to assist you. Reach out to our Quant Desk in India for
                  enquiries related to algorithmic trading, strategy deployment,
                  or collaboration on Financial Literacy in Colleges.
                </Typography>
              </Box>

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
                  href="https://t.me/yourtelegramlink"
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

                <Typography sx={{ color: "#49326b", mt: 5 }}>
                  Stay connected with us
                </Typography>

                <Box sx={{ display: "flex", gap: "10px", mt: 2 }}>
                  <Link href="https://www.instagram.com/deepan_india/">
                    <Image
                      src={insta}
                      alt="whatsapp-icon"
                      style={{ width: "30px" }}
                    />
                  </Link>
                  <Link href="https://www.linkedin.com/company/deepan-india-financial-services-private-limited/">
                    <Image
                      src={linkedIn}
                      alt="whatsapp-icon"
                      style={{ width: "30px" }}
                    />
                  </Link>
                  <Link href="https://www.facebook.com/Deepanindiafin ">
                    <Image src={fb} alt="fb-icon" style={{ width: "30px" }} />
                  </Link>
                  <Link href="https://www.youtube.com/@deepanindiafinancialservices">
                    <Image
                      src={yt}
                      alt="whatsapp-icon"
                      style={{ width: "30px" }}
                    />
                  </Link>
                  <Link href="https://in.pinterest.com/deepanindiafinancialservices/ ">
                    <Image
                      src={pinterest}
                      alt="pinterest-icon"
                      style={{ width: "30px" }}
                    />
                  </Link>
                  <Link href="">
                    <Image
                      src={tele}
                      alt="tele-icon"
                      style={{ width: "30px" }}
                    />
                  </Link>
                </Box>
              </Box>
            </Grid>
            {/* TEXT */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  border: "10px solid #e4d4fa",
                  borderRadius: "30px",
                  padding: "20px",
                  height: "100%",
                }}
              >
                {/* Office */}
                <Box
                  sx={{
                    display: "flex",
                    gap: "15px",
                    alignItems: "flex-start",
                    mb: 3,
                  }}
                >
                  <Image src={map} alt="map-icon" width={40} height={40} />

                  <Typography sx={{ color: "#49326b", lineHeight: 1.6 }}>
                    <b>Our Office</b> <br />
                    145/102, G.A.Road <br />
                    Above ICICI Bank, 1st floor <br />
                    Old Washermenpet, Chennai 600021.
                  </Typography>
                </Box>

                {/* Phone */}
                <Box
                  sx={{
                    display: "flex",
                    gap: "15px",
                    alignItems: "center",
                    mb: 3,
                  }}
                >
                  <Image src={call} alt="call-icon" width={40} height={40} />

                  <Typography sx={{ color: "#49326b" }}>
                    <b>Call Us</b> <br />
                    +91 73583 11611
                  </Typography>
                </Box>

                {/* Email */}
                <Box
                  sx={{ display: "flex", gap: "15px", alignItems: "center" }}
                >
                  <Image src={mail} alt="mail-icon" width={40} height={40} />

                  <Typography sx={{ color: "#49326b" }}>
                    <b>Email Us</b> <br />
                    enquiry@deepanindia.com
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Contact />
      </SectionWrapper>
    </>
  );
};

export default ContactPage;
