import { jsx, Box, Container, Button } from "theme-ui";
import SectionHeading from "components/section-heading";

const rulesData = [
  "1. You must have at least 1,000 followers on any of the following social media platforms: Instagram, Twitter, & YouTube",
  "2. At least 2 years of stock market experience is required",
  "3. Trades taken during the competition period are considered for the competition.",
  "4. Trades taken using the Invest With Tribe platform are eligible for the competition.",
  "5. Experts can take as many trades as they like during the competition.",
  "6. At least 5 trades need to be completed during the competition.",
  "7. Trade with the maximum return percentage will be considered for the final evaluation.",
  "8. Prizes will be given to the top 5 experts.",
  "9. There are going to be 2 prize Distributions: 1 for the Group Stages and one for the Knockout Stages.",
];

const styles = {
  section: {
    marginTop: "10px",
    marginBottom: "10px",
    padding: "1.5rem",
    fontFamily: "headingSerif",
  },
  h1: {
    textAlign: "center",
    fontSize: "35px",
    marginTop: "30px",
    marginBottom: "30px",
    fontFamily: "headingSerif",
  },
  p: {
    // textAlign: "center",
    fontSize: "1.35rem",
    padding: "0.75rem 0",
  },
};

const Rules = () => {
  return (
    <Box as="section">
      <Container>
        <Box as="h1" sx={styles.h1}>
          Rules
        </Box>
        <Box as="ol">
          {rulesData.map((item) => (
            <Box as="p" sx={styles.p} key={item}>
              {item}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Rules;
