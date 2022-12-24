import React from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";
import Banner from "../components/Banner";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, nOfGuests } = router.query;

  const formatedStartData = format(new Date(startDate), "dd MMMM yy");
  const formatedEndData = format(new Date(endDate), "dd MMMM yy");

  const range = `${formatedStartData} - ${formatedEndData}`;

  return (
    <div>
      <Head>
        <title>{`Stay in ${location} | ${range} | ${nOfGuests} guests`}</title>
        <link
          rel="icon"
          href="https://image.flaticon.com/icons/png/512/2111/2111320.png"
        />
      </Head>
      <Header placeholder={`${location} | ${range} | ${nOfGuests} guests`} />
      <Banner
        img={
          "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1934&q=80"
        }
        text="explore the new world..."
      />

      <main className="flex border-b-2 bg-gray-50">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ stays -{range} for {nOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stay in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5  space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancelation Flexiblity</p>
            <p className="button">Type of Placey</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          <Fade left>
            <div className="flex flex-col border-t-2">
              {searchResults.map(
                ({ img, location, title, description, star, price, total }) => (
                  <InfoCard
                    key={img}
                    img={img}
                    location={location}
                    title={title}
                    description={description}
                    star={star}
                    price={price}
                    total={total}
                  />
                )
              )}
            </div>
          </Fade>
        </section>
        <Zoom>
          <section className="hidden xl:inline-flex m-4 mt-56 shadow-2xl rounded-md xl:min-w-[600px]">
            <Map searchResults={searchResults} />
          </section>
        </Zoom>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
