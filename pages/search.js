import React from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import InfoCard from "../components/InfoCard";

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
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
