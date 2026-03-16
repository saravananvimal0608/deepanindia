"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { keyframes } from "@emotion/react";
import Image from "next/image";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import Image1 from "../../../assets/16.png";
import Image2 from "../../../assets/1.png";
import aboutImg1 from "../../../assets/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product.jpg";

import GetMoreButton from "../../components/Button/page";

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
    fontSize: "2rem",
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

const AlgorithmicTrading = () => {
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
                    ALGORITHMIC TRADING
                </Typography>
            </Box>

            <SectionWrapper>
                <Container maxWidth="lg">
                    {/* SECTION 1 */}
                    <Grid container spacing={4} alignItems="center">

                        <Grid item xs={12}>
                            <Typography variant="h6" sx={{ color: "#49326b" }}>
                                Deepan India designs and deploys rule-based automated strategies across Index Options,
                                Stock & Index, Futures, Commodities F&O, Intraday Systems, Positional Strategies,
                                Multi-Strategy Portfolios & Muti-trading accounts
                            </Typography>
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
                                <SectionTitle>Why Algorithmic Trading?</SectionTitle>

                                <Typography sx={{ mt: 2, color: "#49326b" }}>
                                    ✔ Emotion-Free Execution
                                </Typography>

                                <Typography sx={{ color: "#49326b" }}>
                                    ✔ Defined Risk Parameters
                                </Typography>

                                <Typography sx={{ color: "#49326b" }}>
                                    ✔ Structured Capital Allocation
                                </Typography>

                                <Typography sx={{ color: "#49326b" }}>
                                    ✔ Consistency Through Automation
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
                                    width={400}
                                    height={300}

                                    style={{
                                        objectFit: "cover",
                                        borderRadius: "12px"
                                    }}
                                />
                            </Box>
                        </Grid>

                    </Grid>

                    <Typography variant="h6" sx={{ mt: 4, mb: 6, color: "#49326b" }}>
                        As a trusted name in Algo Trading Chennai, we ensure disciplined
                        deployment aligned with risk profiles.
                    </Typography>

                    {/* TITLE */}

                    <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
                        <Typography variant="h3" sx={{ color: "#49326b", fontWeight: 700,textAlign: "center" }}>
                            From Long Shop Hours to Smart Trading
                        </Typography>

                        <StyledDivider />
                    </Box>

                    {/* SECTION 2 */}

                    <Grid container spacing={4} alignItems="center">
                        {/* TEXT */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography sx={{ mb: 2, color: "#49326b", fontWeight: 700 }}>
                                Ramesh runs a kirana store in Chennai. Like many small business
                                owners, he was curious about the stock market but struggled to
                                find time to monitor charts all day.
                            </Typography>

                            <Typography sx={{ mb: 2, color: "#49326b", fontWeight: 700 }}>
                                Manual trading often led to emotional decisions and missed
                                opportunities.
                            </Typography>

                            <Typography sx={{ mb: 2, color: "#49326b", fontWeight: 700 }}>
                                When he discovered algorithmic trading strategies, he realized
                                trades could be executed automatically using predefined rules.
                            </Typography>

                            <Typography sx={{ color: "#49326b", fontWeight: 700 }}>
                                Today, traders like Ramesh explore algo trading solutions
                                without constantly watching the screen.
                            </Typography>
                        </Grid>

                        {/* IMAGE */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box sx={{ display: "flex", justifyContent: "center" }}>
                                <Image
                                    src={Image2}
                                    alt="story"
                                    width={500}
                                    height={350}
                                    style={{
                                        borderRadius: "10px",
                                        objectFit: "cover",
                                        width: "100%",
                                        maxWidth: "450px",
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

export default AlgorithmicTrading;