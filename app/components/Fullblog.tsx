"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Features from "./Features";

// Interface for comment details
export interface CommentDetails {
  username: string;
  posttime: string;
  userComment: string;
  urlkey: string;
  userImage?: string;
}


// Interface for CommentDataModel with dynamic keys
export interface CommentDataModel {
  [urlkey: string]: CommentDetails;
}
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

const Fullblog = ({ item }: FullBlogProps) => {
  const [likeCounter, setLikeCounter] = useState<number>(item.Likes);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isopen, setIsOpen] = useState<boolean>(false);
  const [userLike, setUserLike] = useState<boolean>(false);
  const [comments, setComments] = useState<CommentDetails[]>(item.Comments);
  const [newComment, setNewComment] = useState<string>("");

  const { data: session } = useSession();
  const user = session?.user;
  const userName = user?.name || "";
  const userImage = user?.image || "";

  useEffect(() => {
    setIsLiked(userLike);
  }, [userLike]);

  useEffect(() => {
    const fetchUserLikeStatus = async () => {
      if (!session) return;

      try {
        const response = await fetch(`/api/userlikeblog?urlkey=${item.urlkey}`);
        if (response.ok) {
          const data = await response.json();
          setUserLike(data.userlike);
        }
      } catch (error) {
        console.error("Error fetching user like status:", error);
      }
    };

    fetchUserLikeStatus();
  }, [session, item.urlkey, userName, userLike]);

  const UpdateLike = async () => {
    if (!session) {
      alert("You need to be logged in to like a post.");
      return;
    }

    const newCounter = isLiked ? likeCounter - 1 : likeCounter + 1;
    setLikeCounter(newCounter);
    setIsLiked(!isLiked);
    setUserLike(!userLike);

    try {
      await fetch(`/api/newblog?id=${item.urlkey}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ urlkey: item.urlkey, Likes: newCounter }),
      });

      await fetch(`/api/userlikeblog`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          urlkey: item.urlkey,
          username: userName,
          userlike: !userLike,
        }),
      });
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };

  const handleSubmit = async () => {
    if (!session) {
      alert("You need to be logged in to comment.");
      return;
    }

    const newCommentData: CommentDetails = {
      urlkey: item.urlkey,
      username: userName,
      posttime: new Date().toISOString(),
      userComment: newComment,
      userImage: userImage,
    };

    setComments([...comments, newCommentData]);
    setNewComment("");

    try {
      await fetch(`/api/newblog?id=${item.urlkey}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          urlkey: item.urlkey,
          Comments: [...comments, newCommentData],
        }),
      });
    } catch (error) {
      console.error("Error updating comments:", error);
    }
  };

  const toggleComments = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="mt-40 px-28 mb-40 flex flex-col">
      <div className="shadow-md rounded-lg max-w-6xl mx-auto w-full">
        <Image
          src={item.Image}
          width={400}
          height={300}
          alt="Blog post"
          className="w-full"
        />
        <p className="font-semibold text-lg mt-5 px-2">{item.title}</p>
        <article className="mb-6 text-lg px-2">
          <div dangerouslySetInnerHTML={{ __html: item.article }}></div>
        </article>
        <div className="border-t flex justify-between p-4">
          <button onClick={toggleComments}>💬 {comments.length}+</button>
          <button onClick={UpdateLike}>
            {isLiked ? "❤️" : "🤍"} {likeCounter}
          </button>
        </div>
        {isopen && <div>Comment Section Here</div>}
      </div>
      <Features />
    </div>
  );
};

export default Fullblog;
