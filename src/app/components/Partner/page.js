"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import SchoolIcon from "@mui/icons-material/School";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import DashboardIcon from "@mui/icons-material/Dashboard";
import styles from "./Partner.module.css";
import Handshake from "../../../assets/2-removebg-preview.png";
import Handshake1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";
import Link from "next/link";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

const Partner = () => {
  const benefits = [
    {
      icon: <WorkOutlineIcon fontSize="large" />,
      title: "Zero Office Expenses",
      description: "Work independently, from anywhere.",
    },
    {
      icon: <CurrencyRupeeIcon fontSize="large" />,
      title: "High Revenue Sharing",
      description: "Earn a substantial commission on referrals.",
    },
    {
      icon: <SchoolIcon fontSize="large" />,
      title: "Training & Customer Support",
      description: "We equip you with all the necessary tools and knowledge.",
    },
    {
      icon: <BrandingWatermarkIcon fontSize="large" />,
      title: "Marketing & Branding Support",
      description: "We help you establish credibility.",
    },
    {
      icon: <DashboardIcon fontSize="large" />,
      title: "Personal Dashboard",
      description:
        "Get a dedicated login with detailed reports on clients, revenue, and AUM.",
    },
  ];

  return (
    <div
      id="partner"
      className={styles.mainBox}
      style={{ backgroundImage: `url(${Handshake1.src})` }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            padding: { xs: "20px 0", sm: "30px 0" },
            textAlign: "center",
            fontWeight: 900,
            color: "white",
            fontSize: { xs: "26px", sm: "40px", md: "50px" },
          }}
        >
          Become Our Affiliate Partner
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            color: "#f9f3fe",
            fontSize: { xs: "18px", sm: "20px", md: "22px" },
            marginBottom: { xs: "30px", sm: "40px" },
            fontWeight: 600,
          }}
        >
          Are you looking for an{" "}
          <span className={styles.highlightSpan}>
            Independent income opportunities
          </span>{" "}
          in the financial sector?
        </Typography>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 4, sm: 6 },
          }}
        >
          {/* Left Column - Text Content */}
          <Box
            sx={{
              border: "5px solid whitesmoke",
              p: 2,
              backgroundColor: "white",
              borderRadius: "22px",
            }}
          >
            <Typography variant="h6" sx={{ color: "#49326B" }}>
              <b> We welcome partnerships with:</b>
            </Typography>

            <Typography sx={{ color: "#49326B" }}>
              <RadioButtonCheckedIcon
                style={{ paddingRight: "5px", fontSize: "25px" }}
              />{" "}
              Insurance Agents
            </Typography>

            <Typography sx={{ color: "#49326B" }}>
              <RadioButtonCheckedIcon
                style={{ paddingRight: "5px", fontSize: "25px" }}
              />{" "}
              Mutual Fund Advisors
            </Typography>

            <Typography sx={{ color: "#49326B" }}>
              <RadioButtonCheckedIcon
                style={{ paddingRight: "5px", fontSize: "25px" }}
              />{" "}
              Real Estate Professionals
            </Typography>

            <Typography sx={{ color: "#49326B" }}>
              <RadioButtonCheckedIcon
                style={{ paddingRight: "5px", fontSize: "25px" }}
              />{" "}
              Sub-Brokers
            </Typography>

            <Typography sx={{ color: "#49326B" }}>
              <RadioButtonCheckedIcon
                style={{ paddingRight: "5px", fontSize: "25px" }}
              />{" "}
              Financial Consultants
            </Typography>

            <Typography sx={{ color: "#49326B" }}>
              <RadioButtonCheckedIcon
                style={{ paddingRight: "5px", fontSize: "25px" }}
              />{" "}
              Anyone with a strong network
            </Typography>
          </Box>

          {/* Right Column - Image */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: { xs: 1, sm: 2 },
            }}
          >
            <Image
              src={Handshake}
              alt="handshake"
              width={400}
              height={400}
              style={{
                maxWidth: "100%",
                height: "auto",
                animation: "zoominout 3s ease-in-out infinite",
              }}
            />
          </Box>

          {/* Global Keyframes (you can move this to global CSS or emotion Theme) */}
          <style>
            {`
      @keyframes zoominout {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
    `}
          </style>
        </Box>

        <Typography
          sx={{
            textAlign: "center",
            color: "#f9f3fe",
            fontSize: { xs: "18px", sm: "20px", md: "22px" },
            marginBottom: { xs: "30px", sm: "40px" },
            fontWeight: 600,
          }}
        >
          If you are passionate about helping people grow their wealth while
          creating an additional income stream, partner with Deepan India and be
          part of a growing quant and algorithmic trading ecosystem.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Link
            href=""
            style={{
              backgroundColor: "red",
              width: "220px",
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
            Start your journey with us
          </Link>
        </Box>

        <Typography
          sx={{
            padding: { xs: "20px 0 10px", sm: "30px 0 20px" },
            textAlign: "center",
            fontWeight: 700,
            mt: 3,
            color: "white",
            fontSize: { xs: "22px", sm: "28px", md: "32px" },
          }}
        >
          Benefits of Our Affiliate Program:
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, sm: 3 }}
          sx={{
            marginBottom: { xs: "30px", sm: "40px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <div className={styles.benefitCard}>
                <CardContent>
                  <div className={styles.iconContainer}>{benefit.icon}</div>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: 700,
                      marginBottom: "8px",
                      color: "#49326b",
                    }}
                  >
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#49326b" }}>
                    {benefit.description}
                  </Typography>
                </CardContent>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Partner;
