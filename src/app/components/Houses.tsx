"use client";
import { useMemo, useState } from "react";
import { Item, property } from "../Utils/CardsList";
import Cards from "./Cards";
import Filter from "./Filter";

const Flats = () => {
  const [order, setOrder] = useState<"none" | "asc" | "desc">("none");
  const [sortCriteria, setSortCriteria] = useState<
    "relevance" | "newest" | "lowToHigh" | "highToLow"
  >("relevance");

  // Handlers for sorting criteria
  const handleHighToLow = () => {
    setSortCriteria("highToLow");
    setOrder("desc");
  };

  const handleLowToHigh = () => {
    setSortCriteria("lowToHigh");
    setOrder("asc");
  };

  const handleNewest = () => {
    setSortCriteria("newest");
    setOrder("none");
  };

  const handleRelevance = () => {
    setSortCriteria("relevance");
    setOrder("none");
  };

  // Sorting logic based on selected criteria
  const sortedProperty = useMemo(() => {
    const sortedItems = [...property]
      .filter((item: Item) => item.title === "House")
      .sort((a: Item, b: Item) => {
        if (sortCriteria === "lowToHigh") {
          const priceA =
            typeof a.price === "string" ? parseFloat(a.price) : a.price;
          const priceB =
            typeof b.price === "string" ? parseFloat(b.price) : b.price;
          return priceA - priceB;
        }

        if (sortCriteria === "highToLow") {
          const priceA =
            typeof a.price === "string" ? parseFloat(a.price) : a.price;
          const priceB =
            typeof b.price === "string" ? parseFloat(b.price) : b.price;
          return priceB - priceA;
        }

        return 0; // Default order or relevance
      });

    return sortedItems;
  }, [sortCriteria]);
  return (
    <div className="container mx-auto px-4 py-8">
      <Filter
        onHighToLowClick={handleHighToLow}
        onLowToHighClick={handleLowToHigh}
        onNewestClick={handleNewest}
        onRelevanceClick={handleRelevance}
      />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
        {sortedProperty.map((item: Item) => (
          <Cards
            key={item.id} // Ensure each item has a unique 'id'
            item={item} // Pass the entire item as 'item'
          />
        ))}
      </div>
    </div>
  );
};

export default Flats;
