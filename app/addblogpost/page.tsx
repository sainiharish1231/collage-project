"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CloudUpload } from "lucide-react";
import Swal from "sweetalert2";
import Image from "next/image";

const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const BlogForm: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const user = session?.user;
  const [urlkey, setUrlkey] = useState("");
  const [image, setImage] = useState<string>("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [article, setArticle] = useState("");
  const formattedUploadTime = formatDate(new Date());
  const userName = user?.name || "Anonymous";

  const categories = [
    "Technology",
    "Health",
    "Finance",
    "Education",
    "Lifestyle",
    "Business",
    "Travel",
    "Food",
    "Entertainment",
    "Sports",
    "Science",
    "Fashion",
    "Automobile",
    "Politics",
    "History",
    "Culture",
    "Real Estate",
    "Parenting",
    "Self Improvement",
    "Gaming",
    "AI",
  ];

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    setUrlkey(
      title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")
    );
  }, [title]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const blogData = {
      urlkey,
      Image: image,
      Category: category,
      uploadTime: formattedUploadTime,
      title,
      description,
      article,
      profilName: userName,
    };

    try {
      const response = await fetch("/api/newblog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blogData),
      });

      if (!response.ok) throw new Error("Something went wrong");

      Swal.fire(
        "Success!",
        "Your blog post has been submitted successfully!",
        "success"
      );

      setTitle("");
      setUrlkey("");
      setImage("");
      setCategory("");
      setDescription("");
      setArticle("");
    } catch {
      Swal.fire(
        "Error!",
        "Failed to submit the blog post. Please try again.",
        "error"
      );
    }
  };

  return (
    <div className="min-h-screen flex mt-20 items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-4xl w-full space-y-8 bg-white p-10 shadow-lg rounded-lg">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Create a Professional Blog Post
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Share your insights with a polished and engaging layout.
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-2 p-2 border border-purple-600 rounded text-sm text-black"
              placeholder="Enter title"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="urlkey"
              className="text-sm font-medium text-gray-700">
              URL Key
            </label>
            <input
              type="text"
              id="urlkey"
              value={urlkey}
              readOnly
              className="mt-2 p-2 border border-purple-600 rounded text-sm text-black bg-gray-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image Upload
            </label>
            <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-500 transition bg-gray-50">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="fileInput"
              />
              <label
                htmlFor="fileInput"
                className="flex flex-col items-center cursor-pointer text-gray-600 hover:text-indigo-500">
                <CloudUpload className="w-12 h-12 text-gray-400" />
                <span className="text-sm mt-2">
                  Drag & Drop or Click to Upload
                </span>
              </label>
              {image && (
                <div className="mt-4 w-40 h-40 relative">
                  {/* <Image
                    src={image}
                    alt="Uploaded preview"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md shadow"
                  /> */}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="category"
              className="text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-2 p-2 border border-purple-600 rounded text-sm text-black">
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="description"
              className="text-sm font-medium text-gray-700">
              Description
            </label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-2 p-2 border border-purple-600 rounded text-sm text-black"
              placeholder="Enter description"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="article"
              className="text-sm font-medium text-gray-700">
              Article
            </label>
            <textarea
              id="article"
              value={article}
              onChange={(e) => setArticle(e.target.value)}
              className="mt-2 p-2 border border-purple-600 rounded text-sm text-black"
              placeholder="Enter article content"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
