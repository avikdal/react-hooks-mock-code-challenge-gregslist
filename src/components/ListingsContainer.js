import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";


function ListingsContainer({ search }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then((r) => r.json())
    .then(items => setItems(items))
  }, [])

  function handleDelete(id){
    console.log("handle delete item id in container", id)
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => {
      const remainingItems = items.filter(item => item.id !== id)
      setItems(remainingItems)
    })
  }

  const searchedListings = items.filter((item) => {
    return item.description.toLowerCase().includes(search.toLowerCase())
  })
  console.log("searchedListings", searchedListings)

  const listingCards = searchedListings.map((item) => (
      <ListingCard 
        key={item.id}  
        id={item.id}
        description={item.description} 
        image={item.image} 
        location={item.location}
        onDeleteClick={handleDelete}
      />
  ))

  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
