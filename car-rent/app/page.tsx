
import { fetchCars } from "@/utils";
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";



export default async function Home({searchParams}:HomeProps) {
  const allCars = await fetchCars({
   manufacturer: searchParams.manufacturer,
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || ''
    
  });
 
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

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
       <SearchBar/>
          
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction}/>

          </div>
        </div>

        { !isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))
              }
              <ShowMore
                pageNumber={(searchParams.limit || 10) / 10}
                isNext={(searchParams.limit || 10) > allCars.length}
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
