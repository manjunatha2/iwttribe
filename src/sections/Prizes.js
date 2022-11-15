import { jsx, Box, Container, Button } from "theme-ui";
import SectionHeading from "components/section-heading";

const prizesData = [
  <>
    1st Place <br />
    iPad
  </>,
  <>
    2nd Place <br />
    Trading view Pro
  </>,
  <>
    3rd Place <br />
    Team jersey
  </>,
  <>
    4th Place <br />
    Match football
  </>,
  <>
    5th Place <br />
    Match football
  </>,
  <>Others: Gift Hampers</>,
];

const styles = {
  section: {
    marginTop: "50px",
    marginBottom: "50px",
  },
  heading: {
    maxWidth: ["none", null, null, 565, null, "none"],

    h2: {
      color: "heading",
      fontSize: ["28px", "32px", "32px", "32px", "32px", "32px", "40px"],
    },
  },
  h1: {
    textAlign: "center",
    fontSize: "35px",
    marginTop: "30px",
    marginBottom: "30px",
    fontFamily: "headingSerif",
  },
  p: {
    textAlign: "center",
    fontSize: "1.5rem",
    marginTop: "1rem",
  },
};

const Prizes = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <Box as="h1" sx={styles.h1}>
          Prizes
        </Box>
        <Box as="ol">
          {prizesData.map((item) => (
            <Box as="p" key={item} sx={styles.p}>
              {item}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Prizes;
