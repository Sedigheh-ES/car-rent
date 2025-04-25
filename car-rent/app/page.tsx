
"use client";

import { fetchCars } from "@/utils";
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";
import { useEffect, useState } from "react";
import Image from "next/image";



export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  // Search States
  const [manufacturer, setManuFacturer] = useState("");
  const [model, setModel] = useState("");

  // Filter States
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);

  // pagination states
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || '',
        year: year || 2022,
        fuel: fuel || '',
        limit: limit || 10,
        model: model || ''
      });
      setAllCars(result);
    } catch (error) {
      console.log(error);
  
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    console.log(fuel,year,manufacturer, model,limit);

    getCars();

  }, [fuel, year,limit , manufacturer, model]);



  // const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main>
      <Hero />
      
      {/* Catalog Section */}
      <div className="mt-12 padding-x padding-y mx-width" id="discover">
        <div className="home__text-container">
          <h1 className=" text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar setManuFacturer={setManuFacturer } setModel={setModel} />
          
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter title="year" options={yearsOfProduction} setFilter={setYear} />

          </div>
        </div>

        { allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))
              }
            
              {loading && (
                <div className="mt-16 w-full flex-center">
                  <Image
                    src="/loader.svg"
                    alt="loader"
                    width={50}
                    height={50}
                    className="object-contain"
                  
                  />
                  </div>
              )

              }
              <ShowMore
                pageNumber={limit / 10}
                isNext={limit > allCars.length}
                setLimit={setLimit}
              />
              
            </div>
          </section>
        ) : (
            <div className="home__error-container">
              <h2 className="text-red-700 text-xl font-bold" >Opps no Results</h2>
              <p>{allCars?.message }</p>
            </div>
        )}

      </div>
    </main>
    
  );
}
