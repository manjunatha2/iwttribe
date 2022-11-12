import React from "react";
import {
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { Box } from "theme-ui";

const apps = {
  investor: "https://investor.investwithtribe.com",
  expert: "https://expert.investwithtribe.com",
};

const Share = () => {
  const getMessage = {
    telegram: function (url, message) {
      const telegramUrl = new URL(url);
      const telegramMessage = `${message} ${telegramUrl}`;

      return telegramMessage;
    },

    whatsapp: function (url, message) {
      const urlWhatsapp = new URL(url);
      const messageText = "This is hello world from investwithtribe.com";
      const messageWhatsapp = `${messageText} ${urlWhatsapp}`;

      const encodedWhatsappMessage = encodeURIComponent(messageWhatsapp);
      return encodedWhatsappMessage;
    },
    twitter: function (url, message) {
      const twitterUrl = new URL(url);

      const twitterMessage = `${message} ${twitterUrl}`;
      return twitterMessage;
    },

    reddit: function (url, message) {
      const redditUrl = new URL(url);
      const redditMessage = `${message} ${redditUrl}`;

      return redditMessage;
    },
  };

  const messageText = `Hi, I found this awesome app for sharing my trade. Do checkout here`;
  const url = apps.expert;

  const allMessages = {
    telegram: getMessage.telegram(url, messageText),
    whatsapp: getMessage.whatsapp(url, messageText),
    twitter: getMessage.twitter(url, messageText),
    reddit: getMessage.reddit(url, messageText),
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.shareIcon}>
        <a
          href={`https://wa.me/?text=${allMessages.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsappIcon size={50} round></WhatsappIcon>
        </a>
      </Box>
      <Box sx={styles.shareIcon}>
        <TelegramShareButton url={allMessages.telegram} title="Telegram">
          <TelegramIcon size={50} round />
        </TelegramShareButton>
      </Box>

      <Box sx={styles.shareIcon}>
        <TwitterShareButton url={allMessages.twitter} title="Twitter">
          <TwitterIcon size={50} round />
        </TwitterShareButton>
      </Box>

      <Box sx={styles.shareIcon}>
        <RedditShareButton url={allMessages.reddit} title="Reddit">
          <RedditIcon size={50} round />
        </RedditShareButton>
      </Box>
    </Box>
  );
};

export default Share;

const styles = {
  container: {
    display: "block",
  },
  shareIcon: {
    display: "inline-block",
    paddingRight: "0.5rem",
  },
};
