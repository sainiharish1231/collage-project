import Fullblog from "@/app/components/Fullblog";
import { Metadata } from "next";
// import { headers } from "next/headers";

// Define the expected Item type
type Item = {
  id: string;
  title: string;
  image: string;
  category: string;
  uploadTime: string;
  description: string;
  author: string;
  publishedDate: string;
  [key: string]: any; // Allows extra properties if needed
};

// Fetch blog data (Server Component API Call)
const fetchBlogData = async (id?: string): Promise<any | null> => {
  try {
    if (!id) throw new Error("Invalid blog ID");

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST_URL}/api/newblog?id=${id}`,
      {
        cache: "no-store", // Ensures fresh data for each request
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch blog data");
    }

    const responseData = await response.json();
    return responseData.data as Item;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return null;
  }
};

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params?: { id?: string };
}): Promise<Metadata> {
  if (!params?.id) return {};

  const blogItem = await fetchBlogData(params.id);

  if (!blogItem) return {};

  return {
    title: `${blogItem.title} | San Raj`,
    description: blogItem.description,
    openGraph: {
      title: blogItem.title,
      description: blogItem.description,
      images: blogItem.image ? [{ url: blogItem.image }] : [],
    },
  };
}

// Server Component for the Blog Page
const FullblogPage = async ({ params }: { params?: { id?: string } }) => {
  if (!params?.id) {
    return <div className="text-center text-red-500">Invalid blog ID.</div>;
  }

  const blogItem = await fetchBlogData(params.id);

  if (!blogItem) {
    return <div className="text-center text-red-500">Blog not found.</div>;
  }

  return (
    <div className="mt-10">
      <Fullblog item={blogItem} />
    </div>
  );
};

export default FullblogPage;
