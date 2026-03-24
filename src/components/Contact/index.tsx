import SocialMedia from "../SocialMedia";
import Link from "next/link";
import "./contact.scss";

const ContactComponent = () => {
  return (
    <div className="contactSection">
      <section className="contactSection__sectionintro">
        <h1 className="contactSection__subtitle">
          Get <br />
          <span className="contactSection__in">In</span> <br /> touch
        </h1>
      </section>

      <section className="contactSection__contactContainer">
        <Link
          href="https://www.facebook.com/souya.tataki"
          className="contactSection__link"
          target="_blank"
        >
          Or just say Hello
        </Link>
        <Link
          href="mailto:taki.souad-90@hotmail.com"
          className="contactSection__email"
        >
          taki.souad-90@hotmail.com
        </Link>
        <div>
          <p className="contactSection__description">
            Have a look at my GitHub or LinkedIn.
          </p>
          <SocialMedia />
        </div>
      </section>
    </div>
  );
};

export default ContactComponent;
