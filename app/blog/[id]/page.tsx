"use client";
import Fullblog from "@/app/components/Fullblog";
import { useState, useEffect } from "react";

const FullblogPage = ({ params }: any) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_HOST_URL}/api/newblog?id=${params.id}`,
          { cache: "no-store" }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }

        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    if (params?.id) {
      fetchBlogData();
    }
  }, [params?.id]);

  if (loading) {
    return <div className="text-center text-blue-500">Loading...</div>;
  }

  if (!data) {
    return <div className="text-center text-red-500">Blog not found.</div>;
  }

  return (
    <div className="mt-10">
      <Fullblog item={data} />
    </div>
  );
};

export default FullblogPage;
