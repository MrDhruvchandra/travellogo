import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top places to visit in India",
    description: "India is a land of diverse cultures, rich history, and breathtaking landscapes. From the majestic palaces of Rajasthan to the serene backwaters of Kerala, India offers a multitude of experiences. Visit the iconic Taj Mahal in Agra, explore the vibrant markets of Jaipur, and immerse yourself in the spiritual ambiance of Varanasi. Whether you're drawn to the snowy peaks of the Himalayas or the golden sands of Goa's beaches, India has something for every traveler.",author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 1,
    image: Img2,
    title: "Top places to visit in US",
    description: "The United States is a vast country with an incredible range of attractions. Discover the bustling energy of New York City, marvel at the natural beauty of the Grand Canyon, and enjoy the sun-soaked beaches of California. From the historic monuments of Washington, D.C., to the vibrant music scene in New Orleans, each state offers its own unique charm. Whether you're an adventure seeker, a history buff, or a foodie, the US has endless destinations to explore.", author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 1,
    image: Img3,
    title: "Top places to visit in Japan",
    description: "Japan is a fascinating blend of ancient tradition and cutting-edge modernity. Visit Tokyo for its skyscrapers and world-class shopping, and then step back in time in the historic city of Kyoto, where you can explore beautiful temples and serene gardens. Don%E2%80%99t miss the chance to see the iconic Mount Fuji, or relax in an onsen (hot spring). From the cherry blossoms in spring to the vibrant autumn leaves, Japan's natural beauty is as captivating as its culture.",  author: "Someone",
    date: "April 22, 2022",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
