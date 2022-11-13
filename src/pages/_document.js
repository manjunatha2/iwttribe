import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link
            rel="stylesheet"
            crossOrigin="anonymous"
            href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@600;700&family=DM+Sans:wght@400;500;700&display=swap"
          />
          <title>Nify World Cup 2022 by investwithtribe</title>
          <meta
            name="description"
            content="Nify World Cup brought by investwithtribe | Invest Better Invest together"
            key="desc"
          />
          <meta property="og:title" content="Invest With Tribe" />
          <meta
            property="og:description"
            content="Register now & win exciting prizes"
          />
          <meta
            property="og:image"
            content="https://dev-investwithtribe.s3.ap-south-1.amazonaws.com/poster.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
