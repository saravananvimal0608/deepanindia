"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useRouter, usePathname } from "next/navigation";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "./Footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TelegramIcon from "@mui/icons-material/Telegram";
export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (href) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href.startsWith("/#")) {
      if (pathname === "/") {
        const anchorId = href.substring(2);
        const element = document.querySelector(`#${anchorId}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        router.push("/#media");
        setTimeout(() => {
          const anchorId = href.substring(2);
          const element = document.querySelector(`#${anchorId}`);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    } else {
      router.push(href);
    }
  };

  return (
    <footer className={styles.footerMain}>
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 3, md: 4 }} sx={{ width: "100%", m: 0 }}>
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              className={styles.footTitle}
              sx={{ fontSize: "16px", fontWeight: "bold" }}
            >
              What We Do
            </Typography>
            <Box className={styles.links}>
              <Typography
                component={Link}
                href="/what-we-do/algorithmic-trading"
                className={styles.linkItem}
                sx={{ fontSize: "15px" }}
              >
                Algorithmic Trading
              </Typography>
              <Typography
                component={Link}
                href="/what-we-do/quantitative-strategy-development"
                className={styles.linkItem}
                sx={{ fontSize: "15px" }}
              >
                Quantitative Strategy Development
              </Typography>

              <Typography
                component={Link}
                href="/what-we-do/quant-desk-services"
                className={styles.linkItem}
                sx={{ fontSize: "15px" }}
              >
                Quant Desk Services
              </Typography>
              <Typography
                component={Link}
                href="/what-we-do/strategy-deployment"
                className={styles.linkItem}
                sx={{ fontSize: "15px" }}
              >
                Strategy Deployment & Ongoing Support
              </Typography>
              <Typography
                component={Link}
                href="/what-we-do/financial-training"
                className={styles.linkItem}
                sx={{ fontSize: "15px" }}
              >
                Financial Market Training
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              className={styles.footTitle}
              sx={{ fontSize: "16px", fontWeight: "bold" }}
            >
              Who We Serve
            </Typography>
            <Box className={styles.links}>
              <Typography
                component={Link}
                href="/WhatWeServe/retail-investors"
                className={styles.linkItem}
              >
                Retail Investors
              </Typography>

              <Typography
                component={Link}
                href="/WhatWeServe/high-networth-individuals"
                className={styles.linkItem}
              >
                High Net Worth Individuals (HNI)
              </Typography>

              <Typography
                component={Link}
                href="/WhatWeServe/channel-partners"
                className={styles.linkItem}
              >
                Channel Partners
              </Typography>

              <Typography
                component={Link}
                href="/WhatWeServe/aspiring-quant-traders"
                className={styles.linkItem}
              >
                Aspiring Quant Traders
              </Typography>
            </Box>
          </Grid>

          {/* What We Think */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              className={styles.footTitle}
              sx={{ fontSize: "16px", fontWeight: "bold" }}
            >
              What We Think
            </Typography>
            <Box className={styles.links}>
              <Typography
                component={Link}
                href="/Blog/blogs"
                className={styles.linkItem}
                sx={{ fontSize: "15px", cursor: "pointer" }}
              >
                Blogs
              </Typography>
              <Typography
                component="a"
                onClick={() => handleNavigation("/Blog/videos")}
                className={styles.linkItem}
                sx={{ fontSize: "15px", cursor: "pointer" }}
              >
                Videos
              </Typography>
              <Typography
                component="a"
                onClick={() => handleNavigation("/Blog/strategy-reports")}
                className={styles.linkItem}
                sx={{ fontSize: "15px", cursor: "pointer" }}
              >
                Reports
              </Typography>
            </Box>
          </Grid>

          {/* Calculator */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              className={styles.footTitle}
              sx={{ fontSize: "16px", fontWeight: "bold" }}
            >
              Calculator
            </Typography>
            <Box className={styles.links}>
              <Typography
                component={Link}
                href="/calculators/sip-calculator"
                className={styles.linkItem}
                sx={{ fontSize: "15px" }}
              >
                SIP
              </Typography>
              <Typography
                component={Link}
                href="/calculators/lumpsum-calculator"
                className={styles.linkItem}
                sx={{ fontSize: "15px" }}
              >
                Lumpsum
              </Typography>
              <Typography
                component={Link}
                href="/calculators/swp-calculator"
                className={styles.linkItem}
                sx={{ fontSize: "15px" }}
              >
                Systematic Withdrawal Plan
              </Typography>
            </Box>
          </Grid>

          {/* Address */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              className={styles.footTitle}
              sx={{ fontSize: "16px", fontWeight: "bold" }}
            >
              Address
            </Typography>
            <Box className={styles.links} sx={{ fontSize: "15px" }}>
              <Typography
                className={styles.addressText}
                sx={{ fontSize: "15px" }}
              >
                145/102, G.A.Road 1st floor
                <br />
                Old Washermenpet, Chennai 600021.
              </Typography>
            </Box>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              className={styles.footTitle}
              sx={{ fontSize: "16px", fontWeight: "bold" }}
            >
              Contact
            </Typography>
            <Box className={styles.links}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocalPhoneIcon sx={{ fontSize: 20, color: "#49326b" }} />
                <Typography className={styles.linkItem}>
                  +91 7358311611
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}
              >
                <EmailIcon sx={{ fontSize: 20, color: "#49326b" }} />
                <Typography
                  component="a"
                  href="mailto:enquiry@deepanindia.com"
                  className={styles.linkItem}
                  sx={{ textDecoration: "none", color: "#49326b" }}
                >
                  enquiry@deepanindia.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.6682900232054!2d80.29056200000001!3d13.120187999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52670a343aef1d%3A0x89acc915e36fd6e6!2sFirst%20Choice%20Investment!5e0!3m2!1sen!2sin!4v1748239450808!5m2!1sen!2sin"
            className={styles.mapIframe}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Deepan India Office Location"
          />
        </Box>

        <Divider className={styles.styledDivider} />

        <Grid
          container
          spacing={1}
          alignItems="center"
          justifyContent={{ xs: "center", md: "space-between" }}
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          {/* Social Icons */}
          <Grid item xs={12} md={4}>
            <Box className={styles.bottomLink1}>
              <a
                href="https://www.instagram.com/deepan_india/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <InstagramIcon className={styles.iconImage} />
              </a>
              <a
                href="https://www.linkedin.com/company/deepan-india-financial-services-private-limited/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <LinkedInIcon className={styles.iconImage} />
              </a>
              <a
                href="https://www.facebook.com/Deepanindiafin"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <FacebookIcon className={styles.iconImage} />
              </a>
              <a
                href="https://www.youtube.com/@deepanindiafinancialservices"
                className={styles.socialLink}
              >
                <YouTubeIcon className={styles.iconImage} />
              </a>

              <a
                href="https://in.pinterest.com/deepanindiafinancialservices/"
                className={styles.socialLink}
              >
                <PinterestIcon className={styles.iconImage} />
              </a>

              <a href="https://t.me/deepanindia" className={styles.socialLink}>
                <TelegramIcon className={styles.iconImage} />
              </a>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              className={styles.copyrightText}
              sx={{ fontWeight: "bold" }}
            >
              © {new Date().getFullYear()} Deepan India. All rights reserved.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              className={styles.bottomLink}
              sx={{ justifyContent: { xs: "center", md: "flex-end" } }}
            >
              <Typography
                component={Link}
                href="/"
                className={styles.bottomLinkItem}
              >
                SEBI Guidelines
              </Typography>
              <Typography
                component={Link}
                href="/refund-policy"
                className={styles.bottomLinkItem}
              >
                Refund Policy
              </Typography>
              <Typography
                component={Link}
                href="/privacy-policy"
                className={styles.bottomLinkItem}
              >
                Privacy Policy
              </Typography>
              <Typography
                component={Link}
                href="/terms-of-service"
                className={styles.bottomLinkItem}
              >
                Terms of Service
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
