/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Heading, Image } from "theme-ui";
import { Link } from "components/link";
import { rgba } from "polished";

const FooterWidget = ({ title, items }) => {
  return (
    <Box sx={styles.footerWidget}>
      <Heading as="h4">{title}</Heading>
      <ul>
        {items.map(({ path, label, icon, type }, i) => (
          <li key={i}>
            {icon && <Image src={icon} alt={label} />}
            {/* {(!type || type !== "external") && (
              <Link path={path} key={i} label={label} variant="footer" />
            )} */}
            {/* {type === "external" && ( */}
            <a href={path} key={i} variant="footer" target="_blank">
              {label}
            </a>
            {/* )} */}
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default FooterWidget;

const styles = {
  footerWidget: {
    h4: {
      color: "heading",
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: 1.68,
      letterSpacing: "heading",
    },
    ul: {
      listStyle: "none",
      margin: "28px 0 0",
      padding: 0,
      li: {
        display: "flex",
        alignItems: "center",
        img: {
          mr: "15px",
        },
      },
      a: {
        color: rgba("#02073E", 0.8),
        textDecoration: "none",
      },
    },
  },
};
