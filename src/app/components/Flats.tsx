"use client"
import { Item, property } from "../Utils/CardsList";
import Cards from "./Cards";

const Flats = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
        {property
          .filter((item: Item) => item.title === "Flat")
          .map((item: Item) => (
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
