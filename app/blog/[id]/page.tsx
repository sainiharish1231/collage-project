import Fullblog from "@/app/components/Fullblog";
import { Metadata } from "next";
import { headers } from "next/headers";

// Define the expected Item type
interface IComment {
  urlkey: string;
  userkey: string;
  username: string;
  posttime: string;
  userComment: string;
  userImage: string;
}
// Define the Item interface
interface Item {
  Image: string;
  Category: string;
  uploadTime: string;
  title: string;
  description: string;
  article: string;
  profilName: string;
  Comments: IComment[];
  Views: string;
  Likes: number;
  disLikes: string;
  saveData: string;
  share: string;
  downlode: string;
  urlkey: string;
}

// Define props for the component
interface FullBlogProps {
  item: Item;
}
// Fetch blog data (Server Component API Call)
const fetchBlogData = async (id: string): Promise<FullBlogProps | any> => {
  try {
    const headerList = await headers();
    const scheme = headerList.get("x-forwarded-proto") || "https";
    const host =
      headerList.get("x-forwarded-host") || process.env.NEXT_PUBLIC_HOST;

    if (!host) {
      throw new Error("Missing required headers");
    }

    const response = await fetch(`${scheme}://${host}/api/newblog?id=${id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch blog data");
    }

    const responseData: { data: Item } = await response.json();
    return responseData.data;
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return null;
  }
};

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
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
const FullblogPage = async ({ params }: { params: { id: string } }) => {
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
