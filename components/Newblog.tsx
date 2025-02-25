"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const NewBlog = () => {
  const [blogItem, setBlogItem] = useState("");

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const categories = Array.from(
    new Set(Object.values(blogItem).map((item: any) => item.Category))
  );

  const filteredItems = selectedCategory
    ? Object.values(blogItem).filter(
        (item: any) => item.Category === selectedCategory
      )
    : Object.values(blogItem);

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/newblog`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const responseData = await response.json();
      setBlogItem(responseData.data || null);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!blogItem)
    return (
      <div className="flex justify-center  items-center h-screen">
        <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-purple-500"></div>
      </div>
    );

  return (
    <>
      <div
        className="flex items-center space-x-2 overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        <FiArrowLeft
          className="text-2xl cursor-pointer hidden sm:block"
          onClick={scrollLeft}
        />
        <div
          ref={scrollContainerRef}
          className="flex space-x-2 overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <button
            className={`text-sm sm:text-lg py-2 px-4 rounded-full transition-all duration-300 whitespace-nowrap ${
              selectedCategory === null
                ? "bg-purple-600 text-white"
                : "bg-white text-black hover:bg-purple-500"
            }`}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`text-sm sm:text-lg py-2 px-4 rounded-full transition-all duration-300 whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-purple-600 text-white"
                  : "bg-white text-black hover:bg-purple-500"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <FiArrowRight
          className="text-2xl cursor-pointer hidden sm:block"
          onClick={scrollRight}
        />
      </div>

      <div className="w-full py-6">
        {filteredItems.map((item: any) => (
          <div key={item.urlkey} className="my-10 w-full p-2  rounded-lg ">
            <div className="grid  w-full grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <Image
                  className="w-full h-auto lg:max-w-[80%] lg:max-h-[300px] rounded-lg transform hover:scale-105 transition duration-500"
                  src={item.Image}
                  width={540}
                  height={303}
                  alt="Blog post"
                />
              </div>
              <div className="flex flex-col justify-between ">
                <Link
                  href={`blog/${item.urlkey}`}
                  className="text-2xl font-bold text-white line-clamp-2 hover:underline"
                >
                  {item.title}
                </Link>
                <p className="text-gray-300 line-clamp-4 text-lg mt-2">
                  {item.description}
                </p>
                <div className="flex items-center  mt-4">
                  <div className="text-white flex justify-between w-full">
                    {/* <p className="font-medium">{item.profilName}</p> */}
                    <li className="text-xs font-medium capitalize line-clamp-2 bg-purple-600 text-white py-1 px-3 rounded-full">
                      # {item.Category}
                    </li>
                    <p className="text-sm text-gray-400">
                      {new Date(item.uploadTime).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewBlog;
