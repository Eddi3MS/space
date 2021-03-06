import { useEffect, useState } from "react";
import Data from "../../data.json";
import Header from "../../components/layout/header";
import Head from "next/head";

function Crew({ data }) {
  const [crewMember, setCrewMember] = useState(0);

  const {
    name,
    role,
    bio,
    images: { png, webp },
  } = data[crewMember];

  useEffect(() => {
    document.body.classList.add("crew");

    return function cleanup() {
      document.body.classList.remove("crew");
    };
  }, []);
  return (
    <>
      <Head>
        <title>The crew</title>
        <meta
          name="description"
          content="Meet the crew members responsable for your safe travel."
        />
      </Head>
      <Header />
      <main id="main" className="grid-container grid-container--crew  flow">
        <h1 className="numbered-title ">
          <span aria-hidden="true">02</span> meet your crew
        </h1>

        <div className="dot-indicators flex">
          <button
            onClick={() => setCrewMember(0)}
            aria-pressed={crewMember === 0 ? true : false}
          >
            <span className="sr-only">The commander</span>
          </button>
          <button
            onClick={() => setCrewMember(1)}
            aria-pressed={crewMember === 1 ? true : false}
          >
            <span className="sr-only">The mission specialist</span>
          </button>
          <button
            onClick={() => setCrewMember(2)}
            aria-pressed={crewMember === 2 ? true : false}
          >
            <span className="sr-only">The pilot</span>
          </button>
          <button
            onClick={() => setCrewMember(3)}
            aria-pressed={crewMember === 3 ? true : false}
          >
            <span className="sr-only">The crew engineer</span>
          </button>
        </div>

        <article className="crew-info flow">
          <header className="flow flow--space-small">
            <h2 className="fs-600 ff-serif uppercase">{role}</h2>
            <p className="fs-700 ff-serif uppercase">{name}</p>
          </header>

          <p>{bio}</p>
        </article>

        <picture>
          <source srcSet={webp} type="image/webp" />
          <img src={png} alt={name + " picture"} />
        </picture>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const data = Data.crew;

  return {
    props: { data },
  };
}
export default Crew;
