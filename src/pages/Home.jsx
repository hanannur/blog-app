import background from "../assets/back.jpg";
import BlogData from "../Data/BlogData";
// import { useEffect } from "react";
// import { useState } from "react";
import BlogCard from "../components/BlogCard";

function Home({ blogs }) {
  const combinedBlogs = [...BlogData, ...blogs];

  return (
    <div>
      <div className="container mx-auto p-4 space-y-8">
        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-lg overflow-hidden shadow-lg">
          <img
            src={background}
            alt="No Background image "
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-start p-6 md:p-12 text-white space-y-4">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-black">
              Featured
            </h1>
            <h2
              className="text-2xl md:text-3xl lg:text-5xl font-normal"
              style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
            >
              Breaking into Product Design:
            </h2>
            <p
              className="text-xl md:text-2xl lg:text-3xl font-normal"
              style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
            >
              Advice from Untitled Founder, Frankie
            </p>
            <p
              className="text-sm md:text-base lg:text-lg font-black max-w-4xl"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Let’s get one thing out of the way: you don’t need a fancy
              Bachelor’s Degree to get into Product Design. We sat down with
              Frankie Sallivan to talk about gatekeeping in product design and
              how anyone can get into this growing industry.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {combinedBlogs.map((blog) => {
            return <BlogCard key={blog.id} blog={blog} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
