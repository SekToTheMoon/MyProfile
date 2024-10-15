import Link from "next/link";
import { FaGithub, FaFacebook, FaLine } from "react-icons/fa";

interface inputCss {
  containerStyles: string;
  iconStyles: string;
}
function Social({ containerStyles, iconStyles }: inputCss) {
  const socials = [
    { icon: <FaGithub />, path: "https://github.com/SekToTheMoon" },
    { icon: <FaFacebook />, path: "https://www.facebook.com/sek.sek.332" },
    { icon: <FaLine />, path: "https://line.me/ti/p/~sek123456789t" },
  ];
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}

export default Social;
