"use client";
import { Box, Grid, Typography, Container, Divider } from "@mui/material";
import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import styled from "styled-components";

const StyledDivider = styled(Divider)({
  backgroundColor: "#e4d4fa",
  height: "10px",
  width: "20%",
});

const faqData = [
  {
    question: "What is Algorithmic Trading?",
    answer:
      "Algorithmic trading (Algo Trading) is a method of executing trades using pre-defined rules and computer programs. Instead of manually placing trades, strategies are automated so that trades happen based on market conditions, price levels, and risk parameters.",
  },
  {
    question: "What is a Quant Desk?",
    answer:
      "A Quant Desk is a specialized trading and research team that develops data-driven trading strategies using mathematical models, market data, and technology. At Deepan India, our Quant Desk focuses on building systematic and rule-based trading strategies",
  },
  {
    question: "How is Algo Trading different from manual trading?",
    answer:
      "Manual trading often depends on human judgement and emotions, while algo trading follows fixed rules and logic. This helps reduce emotional decisions and ensures consistent execution based on predefined strategies.",
  },
  {
    question: "Who can use Algo Trading services?",
    answer:
      "Algorithmic trading can be used by retail investors, experienced traders, and High Net Worth Individuals (HNI) who want to trade using structured strategies and automated systems.",
  },
  {
    question: "Do I need technical knowledge to use Algo Trading?",
    answer:
      "No. You do not need coding or technical expertise. The Deepan India team helps with strategy deployment, monitoring, and support, making it easier for clients to use algorithmic trading solutions.",
  },

  {
    question: "Who needs Deepan India Quant Services?",
    answer: `
      <ol>
        <li><b>SIP in Stocks :</b> Investors who want to build wealth gradually can invest in a selected list of stocks manually curated or AI-assisted at fixed intervals. Investments can be made for a fixed quantity or value on a specific or flexible date, with or without a bank mandate for automated payments.</li>
        <li><b>Lumpsum Investment in Stocks :</b> Investors who prefer to invest a larger amount at once can choose from manually curated or AI-designed portfolios. These portfolios may be reviewed or rebalanced periodically using momentum or value investing strategies.</li>
        <li><b>Swing Trading in Stocks :</b> Individuals looking for a potential second income through trading can explore swing trading strategies. These strategies use quantitative technical signals to identify buying opportunities and exit positions, typically focusing on long-only strategies.</li>
        <li><b>Trading (Multi-Segment Strategies) :</b> Traders who wish to participate in day trading or swing trading across multiple segments such as equities, commodities, futures, and options can explore different quantitative trading strategies. These strategies may be executed across multiple trading accounts using rule-based or AI-assisted systems.</li>
      </ol>
    `,
  },

  {
    question: "What markets do your strategies trade in?",
    answer:
      "Our algorithmic strategies primarily operate in Index Options, Futures, and other derivative segments, depending on the strategy structure and market opportunities.",
  },

  {
    question: "Is Algo Trading risk-free?",
    answer:
      "No trading method is completely risk-free. Algorithmic trading also involves market risks. However, rule-based strategies and risk management frameworks help control exposure and maintain disciplined trading.",
  },
  {
    question: "What is the minimum capital required for Algo Trading?",
    answer:
      "The minimum capital required depends on the strategy and market segment. Our team at Deepan India will guide you on suitable capital allocation based on the strategy and your risk profile.",
  },
  {
    question: "Can I monitor the performance of the strategies?",
    answer:
      "Yes. We believe in transparency. Clients can track strategy performance, key metrics, and updates provided by the Deepan India Quant Desk.",
  },
  {
    question: "Are the strategies fully automated?",
    answer:
      "Most of our strategies are rule-based and automated, designed to execute trades based on predefined conditions. This helps ensure consistent execution without emotional decision-making.",
  },
  {
    question: "Do you provide support after strategy deployment?",
    answer:
      "Yes. Deepan India provides ongoing support, monitoring, and performance review to ensure strategies continue to operate smoothly and adapt to changing market conditions.",
  },
  {
    question: "Do you offer training for people who want to learn Algo Trading?",
    answer:
      "Yes. Deepan India also offers financial market training programs that cover quant strategy concepts, options frameworks, and the basics of algorithmic trading for aspiring traders.",
  },
  {
    question: "What is Quant Development?",
    answer:
      "Quant development refers to the process of designing and building algorithmic trading systems using data, mathematics, and programming. These systems analyze market data, identify patterns, and execute trades based on predefined rules rather than human emotions. At Deepan India, quant development focuses on creating structured trading strategies, backtesting models, and systematic execution frameworks for disciplined market participation.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // 7 left + 7 right
  const leftFaq = faqData.slice(0, 7);
  const rightFaq = faqData.slice(7);

  const renderFaq = (items, startIndex = 0) =>
    items.map((item, index) => {
      const actualIndex = index + startIndex;

      return (
        <Box
          key={index}
          sx={{
            border: "1px solid #49326B",
            borderRadius: "10px",
            p: 2,
            mb: 3,
            position: "relative",
            background: "#fff",
          }}
        >
          <Box
            onClick={() => handleToggle(actualIndex)}
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "#49326B",
                flex: 1,
              }}
            >
              {item.question}
            </Typography>

            {openIndex === actualIndex ? (
              <RemoveCircleOutlineIcon sx={{ color: "#49326B" }} />
            ) : (
              <AddCircleOutlineIcon sx={{ color: "#49326B" }} />
            )}
          </Box>

          {openIndex === actualIndex && (
            <Box
              sx={{
                position: "absolute",
                top: "100%",
                left: -2,
                width: "101%",
                backgroundColor: "#fff",
                border: "1px solid #49326B",
                borderRadius: "8px",
                p: 2,
                mt: 1,
                zIndex: 5,
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <Typography
                sx={{
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  color: "#333",
                }}
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </Box>
          )}
        </Box>
      );
    });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f9f3fe",
        py: { xs: 4, md: 8 },
      }}
    >
      <Container>
        {/* Title */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 5,
          }}
        >
          <Typography
            align="center"
            sx={{
              fontSize: { xs: "2.5rem", md: "3rem" },
              fontWeight: 600,
              color: "#49326B",
            }}
          >
            F A Q
          </Typography>

          <StyledDivider />
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            {renderFaq(leftFaq, 0)}
          </Grid>

          <Grid item xs={12} md={6}>
            {renderFaq(rightFaq, 7)}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Faq;