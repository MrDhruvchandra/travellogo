import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
          Welcome to our travel hub, where your adventures begin with expert guidance 
  and personalized experiences. We are passionate about connecting travelers 
  with the world's most enchanting destinations, offering you the best tour 
  guides to make your journey unforgettable. Our team is dedicated to ensuring 
  that each trip is tailored to your unique interests, whether you're seeking 
  cultural immersion, thrilling adventures, or serene escapes. With years of 
  experience and a deep love for exploration, we are here to help you discover 
  the world like never before.
          </p>
          <br />
          <p>
          From the moment you book with us, our commitment to quality service and 
  attention to detail ensures that your travels are seamless and enjoyable. 
  Join us as we explore the globe, one unforgettable moment at a time.
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
