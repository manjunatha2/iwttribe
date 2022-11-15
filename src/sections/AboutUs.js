import { jsx, Box, Container, Button } from "theme-ui";

const AboutUs = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <Box as="h1" sx={styles.h1}>
          About Us
        </Box>
        <Box as="p" sx={styles.p}>
          InvestWithTribe is a Social investment platform <br />
          where stock market experts earn by offering portfolio services &
          courses to investors.
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;

const styles = {
  section: {
    marginTop: "10px",
    marginBottom: "10px",
    padding: "1.5rem",
  },
  h1: {
    textAlign: "center",
    fontSize: "40px",
    marginTop: "30px",
    marginBottom: "30px",
    fontFamily: "headingSerif",
  },
  p: {
    textAlign: "center",
    fontSize: "1.5rem",
  },
};
