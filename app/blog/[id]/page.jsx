import Fullblog from "@/app/components/Fullblog";
import { headers } from "next/headers";


// Fetch Blog Data
const fetchBlogData = async (id, headerList) => {
  try {
    const scheme = headerList.get("x-forwarded-proto") || "https";
    const host =
      headerList.get("x-forwarded-host") || process.env.NEXT_PUBLIC_HOST;

    if (!host) throw new Error("Missing required headers");

    const response = await fetch(`${scheme}://${host}/api/newblog?id=${id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(
        `Error fetching blog: ${response.status} - ${response.statusText}`
      );
      return null;
    }

    const responseData = await response.json();
    return responseData.data;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return null;
  }
};

// Generate Metadata
export async function generateMetadata({ params }) {
  const headerList = await headers();
  const blogItem = await fetchBlogData(params.id, headerList);

  return blogItem
    ? {
        title: `${blogItem.title} | San Raj`,
        description: blogItem.description,
        openGraph: {
          title: blogItem.title,
          description: blogItem.description,
          images: blogItem.image ? [{ url: blogItem.image }] : [],
        },
      }
    : {
        title: "Blog Not Found | San Raj",
        description: "The requested blog could not be found.",
      };
}

// Server Component for Blog Page
const FullblogPage = async ({ params }) => {
  const headerList = await headers();
  const blogItem = await fetchBlogData(params.id, headerList);

  return (
    <div className="mt-10">
      {blogItem ? (
        <Fullblog item={blogItem} />
      ) : (
        <div className="text-center text-red-500">Blog not found.</div>
      )}
    </div>
  );
};

export default FullblogPage;
