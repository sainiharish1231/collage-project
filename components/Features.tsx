"use client";
import React, { useState, useEffect } from "react";
import { fadeInDownShorter, fadeInUp } from "..//keyframes";
import Reveal from "react-awesome-reveal";
import Link from "next/link";
import Image from "next/image";

interface BlogItem {
  urlkey: string;
  Image: string;
  Title: string;
  title: string;
  category: string;
  publishedDate: string;
  author: string;
  description: string;
}

const Features: React.FC = () => {
  const [blogItem, setBlogItem] = useState<BlogItem[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/newblog`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const responseData = await response.json();
      setBlogItem(Object.values(responseData.data));
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(true);
    } finally {
      setTimeout(() => setIsLoading(false), 1000);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="text-xl font-semibold text-gray-700 animate-pulse">
          Loading Blogs...
        </span>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="text-xl font-semibold text-red-600">
          Error loading blogs. Please try again later.
        </span>
      </div>
    );

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12">Latest Blogs</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogItem.slice(0, 6).map((item, index) => (
          <Reveal
            key={index}
            keyframes={index % 2 === 0 ? fadeInDownShorter : fadeInUp}
            duration={450}
            delay={250}
          >
            <Link
              href={`/blog/${item.urlkey}`}
              className="flex flex-col bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="h-full w-full">
                <Image
                  src={item.Image}
                  width={3000}
                  height={2200}
                  className="object-cover w-full h-[220px]"
                  alt={item.title}
                />
              </div>
              <div className="p-6 flex flex-col justify-between h-[230px]">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm flex justify-between">
                  <span>{item.category}</span>
                  <span>
                    <u>{item.publishedDate}</u> •{" "}
                    <span className="text-blue-500">{item.author}</span>
                  </span>
                </p>
                <p className="text-gray-700 text-lg line-clamp-3 mt-2">
                  {item.description}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Features;
