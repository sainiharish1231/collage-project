"use client";
import React, { useState, useEffect } from "react";
import { fadeInDownShorter, fadeInUp } from "../../keyframes";
import Reveal from "react-awesome-reveal";
import Link from "next/link";
import Image from "next/image";

// Define TypeScript interface for blog items
interface BlogItem {
  urlkey: string;
  Image: string;
  Title: string;
  title: string;
  Category: string;
  PublishedDate: string;
  Author: string;
  Description: string;
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
      const blogArray: BlogItem[] = Object.values(responseData.data);

      setBlogItem(blogArray);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (error) return <div>Error loading blogs.</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <section className="mx-auto px-6 p-10">
        <h2 className="text-4xl font-bold text-center mb-8">Latest Blog</h2>
        <div className="my-12 mx-auto md:px-6">
          <section className="mb-16 text-center md:text-left">
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {blogItem.slice(0, 6).map((item, index) => (
                <Reveal
                  key={index}
                  keyframes={index % 2 === 0 ? fadeInDownShorter : fadeInUp}
                  duration={450}
                  delay={289}
                >
                  <Link
                    href={`blog/${item.urlkey}`}
                    className="flex flex-col bg-white shadow-md p-6 rounded-lg min-h-[450px] max-h-[450px] justify-between"
                  >
                    <div className="relative mb-4 overflow-hidden rounded-lg shadow-lg h-[200px]">
                      <Image
                        src={item.Image}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover"
                        alt={"harish"}
                      />
                    </div>
                    <h3 className="text-2xl text-[#121212] font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-2 text-sm flex justify-between">
                      <span>📌 {item.Category}</span>
                      <span>
                        <u>{item.PublishedDate}</u> by{" "}
                        <span className="text-blue-500">{item.Author}</span>
                      </span>
                    </p>
                    <p className="text-gray-700 text-justify line-clamp-3">
                      {item.Description}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Features;
