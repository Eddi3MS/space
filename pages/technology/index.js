import Data from "../../data.json";
import { useEffect, useState } from "react";
import Header from "../../components/layout/header";
import Head from "next/head";

function Technology({ data }) {
  const [tech, setTech] = useState(0);

  useEffect(() => {
    document.body.classList.add("technology");

    return function cleanup() {
      document.body.classList.remove("technology");
    };
  }, []);

  return (
    <>
      <Head>
        <title>Technology Applied</title>
        <meta name="description" content="technology applied in the travel" />
      </Head>

      <Header />
      <main
        id="main"
        className="grid-container grid-container--technology  flow"
      >
        <h1 className="numbered-title">
          <span aria-hidden="true">03</span> space lauch 101
        </h1>
        <picture>
          <source
            srcSet={data[`${tech}`].images.portrait}
            type="image/jpg"
            media="(min-width: 45em)"
          />
          <img
            src={data[`${tech}`].images.landscape}
            alt={data[`${tech}`].name + "picture"}
          />
        </picture>

        <div className="num-list flex">
          <button
            onClick={() => setTech(0)}
            aria-pressed={tech === 0 ? true : false}
            className="ff-sans-cond  text-accent bg-transparent letter-spacing-2"
            style={
              tech === 0
                ? { color: "hsl(230 35% 7%)" }
                : { color: "hsl(231 77% 90%)" }
            }
          >
            1
          </button>
          <button
            onClick={() => setTech(1)}
            aria-pressed={tech === 1 ? true : false}
            className=" ff-sans-cond text-accent bg-transparent letter-spacing-2"
            style={
              tech === 1
                ? { color: "hsl(230 35% 7%)" }
                : { color: "hsl(231 77% 90%)" }
            }
          >
            2
          </button>
          <button
            onClick={() => setTech(2)}
            aria-pressed={tech === 2 ? true : false}
            className=" ff-sans-cond text-accent bg-transparent letter-spacing-2"
            style={
              tech === 2
                ? { color: "hsl(230 35% 7%)" }
                : { color: "hsl(231 77% 90%)" }
            }
          >
            3
          </button>
        </div>

        <article className="technology-info flow">
          <h2 className="fs-700 ff-serif uppercase">the terminology...</h2>
          <h3 className="fs-600 ff-serif uppercase">{data[`${tech}`].name}</h3>
          <p>{data[`${tech}`].description}</p>
        </article>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const data = Data.technology;

  return {
    props: { data },
  };
}

export default Technology;
