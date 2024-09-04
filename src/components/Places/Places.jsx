import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Boat",
    location: "USA",
    description: 
      "Experience the tranquility of a scenic boat ride through some of the most picturesque waters in the USA, offering a perfect blend of relaxation and cultural exploration.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Underwater",
    location: "US",
    description:
      "Discover the mysteries of the deep with an underwater adventure, exploring vibrant marine life and stunning coral reefs, all while enjoying a serene escape.",
    price: 6200,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Sydney",
    location: "USA",
    description: 
      "Sydney offers a captivating mix of iconic architecture, stunning beaches, and vibrant culture, making it an ideal destination for those seeking both relaxation and adventure.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Los Angeles",
    location: "United States",
    description:
      "Explore the glamorous city of Los Angeles, where you can experience Hollywood’s glitz, stunning coastal views, and a thriving cultural scene.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Las Vegas",
    location: "California",
    description:
      "Las Vegas, the entertainment capital of the world, offers a dazzling array of attractions, from world-class shows to vibrant nightlife, all set against a backdrop of stunning desert landscapes.",
    price: 6200,
    type: "Cultural Relax",
  },
];


const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
