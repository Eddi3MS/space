import { useEffect, useState } from "react";
import Header from "../../components/layout/header";
import Image from "next/image";
import Data from "../../data/data.json";

function Destination({ data }) {
  const [planet, setPlanet] = useState(0);

  useEffect(() => {
    document.body.classList.add("destination");

    return function cleanup() {
      document.body.classList.remove("destination");
    };
  }, []);
  return (
    <>
      <Header />
      <main
        id="main"
        className="grid-container grid-container--destination  flow"
      >
        <h1 className="numbered-title ">
          <span aria-hidden="true">01</span> Pick your destination
        </h1>
        <picture>
          <source srcSet={data[`${planet}`].images.webp} type="image/webp" />
          <img
            src={data[`${planet}`].images.png}
            alt={data[`${planet}`].name + " picture"}
          />
        </picture>

        <div className="tab-list underline-indicators flex">
          <button
            onClick={() => setPlanet(0)}
            aria-pressed={planet === 0 ? true : false}
            className="uppercase ff-sans-cond text-accent bg-transparent letter-spacing-2"
          >
            Moon
          </button>
          <button
            onClick={() => setPlanet(1)}
            aria-pressed={planet === 1 ? true : false}
            className="uppercase ff-sans-cond text-accent bg-transparent letter-spacing-2"
          >
            Mars
          </button>
          <button
            onClick={() => setPlanet(2)}
            aria-pressed={planet === 2 ? true : false}
            className="uppercase ff-sans-cond text-accent bg-transparent letter-spacing-2"
          >
            Europa
          </button>
          <button
            onClick={() => setPlanet(3)}
            aria-pressed={planet === 3 ? true : false}
            className="uppercase ff-sans-cond text-accent bg-transparent letter-spacing-2"
          >
            Titan
          </button>
        </div>

        <article className="destination-info flow">
          <h2 className="fs-800 ff-serif uppercase">
            {data[`${planet}`].name}
          </h2>
          <p>{data[`${planet}`].description}</p>
          <div className="destination-meta flex">
            <div>
              <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
              <p className=" ff-serif uppercase">
                {data[`${planet}`].distance}
              </p>
            </div>
            <div>
              <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
              <p className=" ff-serif uppercase">{data[`${planet}`].travel}</p>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const data = Data.destinations;

  return {
    props: { data },
  };
}

export default Destination;
