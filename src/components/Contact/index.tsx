import SocialMedia from "../SocialMedia";
import Image from "next/image";
import Link from "next/link";
import "./contact.scss";

const ContactComponent = () => {
  return (
    <div className="contactSection">
      <section className="contactSection__sectionintro">
        <h1 className="contactSection__subtitle">
          Get <br /><span className="contactSection__in">In</span>  <br /> touch
        </h1>
      </section>

      <section className="contactSection__contactContainer">
        <Link href="https://www.facebook.com/souya.tataki" className="contactSection__link" target="_blank">Or just say Hello</Link>
       <div className="contactSection__flipcontainer">
        <div className="contactSection__flippimg">
        <Image
          src="/profilImage/profile-image.png"
          alt="profile-image"
          height={600}
          width={500}
          className="contactSection__profilimg front"
        />
        <Image
          src="/profilImage/profile-image-fliped.png"
          alt="profile-image"
          height={600}
          width={500}
          className="contactSection__profilimg back"
        />

        </div>
       </div>

        <p className="contactSection__description">Have a look at my GitHub or LinkedIn.</p>
        <SocialMedia />
   
      </section>
    </div>
  );
};

export default ContactComponent;
