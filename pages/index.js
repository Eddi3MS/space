import Header from "../components/layout/header";
import Link from "next/link";
import { useEffect } from "react";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    document.body.classList.add("home");

    return function cleanup() {
      document.body.classList.remove("home");
    };
  }, []);

  return (
    <>
      <Head>
        <title>Space Travel - An Adventure</title>
        <meta
          name="description"
          content="Are you up to the trip? Moon, Mars, Europa and Titan are right on the corner - of the space -."
        />
      </Head>
      <Header />
      <main id="main" className="grid-container  grid-container--home">
        <div>
          <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
            So, you want to travel to{" "}
            <span className="d-block fs-900 ff-serif text-white">Space</span>
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <Link href="/destination">
            <a className="large-button uppercase ff-serif fs-600 text-dark bg-white">
              Explore
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}
