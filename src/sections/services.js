/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button } from "theme-ui";
import SectionHeading from "components/section-heading";
import Feature from "components/cards/feature";

import individual from "assets/images/icons/individual.png";
import team from "assets/images/icons/team.png";
import org from "assets/images/icons/org.png";

const data = [
  {
    id: 1,
    icon: individual,
    title: "Monetize your portfolio and trades",
    description: `Get the most of your skill sets by focusing on what's important`,
  },
  {
    id: 2,
    icon: team,
    title: "Build your follower base",
    description: `Our platform has the tools for you to discover new follower`,
  },
  {
    id: 3,
    icon: org,
    title: "Manage your operations effortlessly",
    description: `Save 3 hrs everyday, Invest time & effort in research not operations`,
  },
  // {
  //   id: 3,
  //   icon: individual,
  //   title: "Teach other people how to invest",
  //   description: `Help retail investors with interactive live sessions with the followees`,
  // },
];

const Services = () => {
  return (
    <Box as="section" id="services" variant="section.features">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Create, Share and Monetize"
          description="Create & share a new trade in less than 30 secs"
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <Feature key={item.id} className="feature-item" data={item} />
          ))}
        </Box>
        <Box sx={styles.features.button}>
          <Button variant="primary">
            <a
              href="https://expert.investwithtribe.com/mytribe"
              target="_blank"
              sx={styles.features.button.a}
            >
              Start Creating Trades
            </a>
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  heading: {
    marginBottom: [40, 50, 60, 80],
    maxWidth: ["none", null, null, 565, null, "none"],
    h2: {
      color: "heading",
      fontSize: ["28px", "32px", "32px", "32px", "32px", "32px", "40px"],
    },
    P: {
      fontSize: ["16px", "16px", "16px", "16px", "14px", "16px"],
      maxWidth: [510],
      m: ["5px auto 0"],
    },
  },
  features: {
    gap: [30, 30, 60, 40, 30, 60],
    display: ["grid", "grid"],
    gridTemplateColumns: [
      "repeat(1, 1fr)",
      "repeat(1, 1fr)",
      "repeat(1, 1fr)",
      "repeat(2, 1fr)",
      "repeat(3, 1fr)",
    ],
    button: {
      display: "flex",
      mt: "30px",
      justifyContent: "center",
      a: {
        textDecoration: "none",
        color: "white",
      },
    },
    ".feature-item": {
      display: ["block", "block", "flex", "flex", "block", "flex"],
      textAlign: ["center", "center", "left", "left", "center", "left"],
      maxWidth: [290, 260, "none"],
      m: ["0 auto", "0 auto", 0],
      figure: {
        m: [
          "0 0 15px",
          "0 0 15px",
          "0 30px 0 0",
          "0 30px 0 0",
          "0 0 15px",
          "0 30px 0 0",
        ],
      },
      h4: {
        fontWeight: [700],
        mb: ["15px", "15px", "20px", "15px"],
      },
      p: {
        fontSize: ["14px", "14px", "16px", "16px", "14px", "16px"],
      },
    },
  },
};
