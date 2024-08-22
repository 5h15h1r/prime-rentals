  "use client";
  import { useState } from "react";
  import Banner from "./components/Banner";
  import Categories from "./components/Categories";
  import Flats from "./components/Flats";
  import Houses from "./components/Houses";
  import Navbar from "./components/Navbar";
  import Pgs from "./components/Pgs";
  import Footer from "./components/Footer";

  function Home() {
    const [flat, setFlat] = useState<Boolean>(true);
    const [house, setHouse] = useState<Boolean>(false);
    const [pg, setPg] = useState<Boolean>(false);

    function handlehouseclick(): void {
      setHouse(true);
      setFlat(false);
      setPg(false);
    }

    function handlepgclick(): void {
      setPg((pg) => !pg);
      setFlat(false);
      setHouse(false);
    }
    function handleflatclick(): void {
      setFlat(true);
      setHouse(false);
      setPg(false);
    }

    return (
      <div className="flex flex-col items-center justify-center">
        <Navbar />
        <Banner />
        <Categories
          flat={handleflatclick}
          house={handlehouseclick}
          pg={handlepgclick}
        />
        {house && <Houses />}
        {flat && <Flats />}
        {pg && <Pgs />}
        {!house && !flat && !pg && <  Flats />}
        <Footer/>
      </div>
    );
  }
  export default Home;
