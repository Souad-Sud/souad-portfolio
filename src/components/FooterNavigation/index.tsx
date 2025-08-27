import { footerNavLinks } from "@/data/navbar";
import Link from "next/link";
import "./footerNavigation.scss"

const FooterNavigation = () => {
  return (
    <nav className="footerNavigation">
      <ul className="footerNavigation__container">
        {footerNavLinks.map((linkItem) => (
          <li key={linkItem.path} className="footerNavigation__listItems">
            <Link href={linkItem.path}>{linkItem.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNavigation;
