/** @jsxRuntime classic */
/** @jsx jsx */
import {
  jsx,
  Box,
  Container,
  Heading,
  Text,
  Label,
  Image,
  Button,
} from "theme-ui";
import Input from "components/input";
import banner from "assets/images/banner.png";
import competionPoster from "assets/images/competition.png";
import paypal from "assets/images/paypal.png";
import google from "assets/images/google.png";
import dropbox from "assets/images/dropbox.png";
import { rgba } from "polished";
import Share from "./Share";
// import Registration from "./RegistrationForm";

const Banner = () => {
  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.content}>
            <Heading as="h1">
              Thank you for registering in
              <br />
              Nifty WC 2022
              <br />
              by investwithtribe
            </Heading>
            <Text as="p">
              What's next?
              <br />
              Retweet/ Repost the post (below) to your socials by tagging Invest
              With Tribe with the hashtags #niftyworldcup2022 & #investwithtribe
            </Text>
            <Box>
              <Box sx={styles.subscribe}>
                <Label>
                  <Button variant="primary">
                    <a
                      href="https://expert.investwithtribe.com/mytribe"
                      target="_blank"
                    >
                      Share
                    </a>
                  </Button>
                </Label>
              </Box>
              <Box sx={styles.share}>
                <Share />
              </Box>
            </Box>
          </Box>
          <Box as="figure" sx={styles.illustration}>
            <Image
              src={competionPoster}
              alt="banner"
              height={900}
              width={500}
            />
          </Box>
          {/* <Box>
            <Registration />
          </Box> */}
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  contentWrapper: {
    display: ["block", null, null, null, "grid", "flex"],
    gridTemplateColumns: ["1fr 1fr", null, null, null, "0.9fr 1.1fr"],
    gap: [0, 0, 0, 0, 40],
    alignItems: "center",
    minHeight: [null, null, "100vh", "70vh", "50vh", "100vh"],
    pt: ["100px", null, null, "130px", "25px", null, 0],
    textAlign: ["center", null, "left"],
  },
  content: {
    maxWidth: [null, null, null, "75%", "100%"],
    margin: [null, null, null, "0 auto", 0],
    textAlign: [null, null, null, "center", "left"],
    h1: {
      color: "textSecondary",
      fontFamily: "Crimson Text, Serif",
      fontWeight: 600,
      fontSize: ["34px", "34px", "34px", "44px", "40px", "49px", "62px"],
      lineHeight: [1.26, 1.26, 1.11, 1.4, 1.11],
    },
    p: {
      maxWidth: [450, null, null, "none", 450],
      fontSize: ["14px", null, "18px", 17, "16px", "15px", "18px"],
      lineHeight: [1.87, 1.87, 2.33, 2.33, 2],
      mt: ["25px", null, null, null, 4],
    },
  },
  subscribe: {
    display: "flex",
    alignItems: "center",
    mt: ["30px"],
    input: {
      mr: ["15px"],
      minHeight: ["45px", null, null, 60, 50, null, 60],
    },
    button: {
      minHeight: ["45px", null, null, 60, 50, null, 60],
      fontSize: ["14px", "14px", "16px"],
    },
  },
  share: {
    marginTop: "1rem",
  },
  sponsoredBy: {
    display: "flex",
    alignItems: "center",
    justifyContent: ["center", null, null, null, "unset"],
    mt: ["30px", "30px", "40px", "40px", "30px"],
    span: {
      color: rgba("#566272", 0.6),
      fontSize: ["14px", "16px", "16px"],
    },
  },
  logos: {
    display: "flex",
    alignItems: "center",
    figure: {
      ml: ["10px", "16px", "28px", "16px", "16px"],
    },
    img: {
      maxWidth: ["69px", "85px", "100%", "100%", "79px", "100px", "100%"],
    },
  },
  illustration: {
    ml: [0, 0, "30px", 0, 0],
    mt: ["50px", null, null, null, 0],
    minWidth: ["auto", null, null, null, null, "600px"],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    img: {
      maxWidth: ["100%", null, null, "80%", "100%"],
    },
  },
};
