/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "components/link";
import LogoPng from "components/icons/tribe.png";
import LogoSvg from "components/icons/logosvg.svg";

export default function Logo({ isSticky, footer, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      <img src={LogoSvg} height={70} width={70} />
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: "center",
    cursor: "pointer",
    display: "inline-flex",
    // svg: {
    //   height: "auto",
    //   width: [128, null, "100%"],
    // },
  },
};
