import Head from "next/head";

const socialTags = (props) => {
  const { openGraphType, url, title, description, image } =
    props ?? defaultMetaProps;

  const metaTags = [
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:site",
      content: "@investwithtribe",
    },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image:src", content: image },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "og:title", content: title },
    { name: "og:type", content: openGraphType },
    { name: "og:url", content: url },
    { name: "og:image", content: image },
    { name: "og:description", content: description },
    {
      name: "og:site_name",
      content: title,
    },
  ];

  return metaTags;
};

const SEO = (props) => {
  const { title, description, image, url } = props ?? defaultMetaProps;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={image} />
      {socialTags(props).map(({ name, content }) => {
        return <meta key={name} name={name} content={content} />;
      })}
    </Head>
  );
};

SEO.defaultProps = {
  title: "Nifty World Cup by Invest With Tribe",
  description:
    "Nify World Cup brought by investwithtribe | Invest Better Invest together",
  url: "https://niftyworldcup2022.investwithtribe.com/share",
  image:
    "https://dev-investwithtribe.s3.ap-south-1.amazonaws.com/shareworldcup2022.png",
};

export default SEO;
