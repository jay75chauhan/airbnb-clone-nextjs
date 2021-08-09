import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
import Login from "../components/Login";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { getSession } from "next-auth/client";

export default function Home({ session, exploreData, cardsData }) {
  if (!session) {
    return <Login />;
  }

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Airbnb</title>
        <link
          rel="icon"
          href="https://image.flaticon.com/icons/png/512/2111/2111320.png"
        />
      </Head>

      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner
        img={
          "https://a0.muscache.com/im/pictures/e4a2a61c-589f-4e49-b3b8-968a6bc23389.jpg?im_w=2560"
        }
        text=" Olympian & Paralympian Online Experiences"
      />

      <main className="max-w-7xl bg-gray-50 mx-auto shadow px-8 my-7 rounded-lg sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Pull some data frome a server -API endpoints */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <Bounce key={img}>
                <SmallCard
                  key={img}
                  img={img}
                  distance={distance}
                  location={location}
                />
              </Bounce>
            ))}
          </div>
        </section>
        <Fade bottom>
          <LargeCard
            img="https://a0.muscache.com/im/pictures/258b129d-d1cd-48b5-86d4-86206c13ebf7.jpg?im_w=2560"
            title="The Gretest Outdoors"
            description="Wishlists curated by Airbnb"
            buttonText="Get Inspired"
          />
        </Fade>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywehr</h2>
          <div className="flex space-x-4 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }) => (
              <Slide right key={img}>
                <MediumCard key={img} img={img} title={title} />
              </Slide>
            ))}
          </div>
        </section>
        <Fade bottom>
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Gretest Outdoors"
            description="Wishlists curated by Airbnb"
            buttonText="Get Inspired"
          />
        </Fade>
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  //get user
  const session = await getSession(context);

  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      session,
      exploreData,
      cardsData,
    },
  };
}
