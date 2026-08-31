import "./VeloraProject.scss";

const VeloraProject = () => {
  return (
    <article className="velora-project">
      {/* Video */}
      <div className="velora-project__media">
        <video
          className="velora-project__video"
          src="/videos/velora-project.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Content */}
      <div className="velora-project__content">
        <div className="velora-project__meta">
          <span className="velora-project__status">Ongoing</span>

          <span className="velora-project__technologies">
            Next.js · Tailwind CSS
          </span>
        </div>

        <h2 className="velora-project__title">Velora</h2>

        <p className="velora-project__description">
          An e-commerce website inspired by Rituals, featuring product
          categories, product pages, a shopping cart, checkout, and responsive
          navigation.
        </p>

        <a
          href="https://velora-kohl-gamma.vercel.app/"
          className="velora-project__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View project →
        </a>
      </div>
    </article>
  );
};

export default VeloraProject;
